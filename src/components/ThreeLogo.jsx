import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import logoSrc from '../assets/logo-icon.png'

export default function ThreeLogo({ className = '' }) {
  const mountRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  // Server + first client render show a static logo image; the WebGL canvas only
  // mounts after hydration. Identical fallback markup on both = no mismatch.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, precision: 'highp' })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100)
    camera.position.z = 4

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))

    let mesh = null

    const loader = new THREE.TextureLoader()
    loader.load(logoSrc, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      tex.minFilter = THREE.LinearMipmapLinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy()
      tex.needsUpdate = true

      const imgAspect = tex.image.width / tex.image.height
      const planeH = 2.4
      const planeW = planeH * imgAspect

      const geo = new THREE.PlaneGeometry(planeW, planeH)
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      })
      mesh = new THREE.Mesh(geo, mat)
      scene.add(mesh)

      // Wait 2 frames so Framer Motion always applies opacity:0 first,
      // even when texture loads instantly from cache (refresh)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mount.classList.remove('three-logo-hidden')
        })
      })
    })

    let t = 0
    let animId
    const MAX_SWING = Math.PI / 6

    const onMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (!mesh) return

      t += 0.004

      const swingY = Math.sin(t) * MAX_SWING
      const parallaxY = mouseRef.current.x * 0.14
      const parallaxX = mouseRef.current.y * 0.10

      mesh.position.y = Math.sin(t * 3) * 0.07
      mesh.rotation.x += (parallaxX - mesh.rotation.x) * 0.04
      mesh.rotation.y = swingY + parallaxY

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      ro.disconnect()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div
        className={className}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}
      >
        <img
          src={logoSrc}
          alt="Greymont"
          width={288}
          height={288}
          style={{ width: '80%', height: 'auto', filter: 'brightness(0) invert(1)' }}
        />
      </div>
    )
  }

  return (
    <div
      ref={mountRef}
      className={`three-logo-hidden ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}
