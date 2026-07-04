import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

export default function HlsVideo({ src, poster, className = '', style = {}, ...props }) {
  const videoRef = useRef(null)
  // Server + first client render show the static fallback; the real <video> +
  // hls.js only mount after hydration. Keeps heavy playback out of SSR and makes
  // the server/first-client markup identical (no hydration mismatch).
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    const video = videoRef.current
    if (!video) return
    video.muted = true

    // Fade in smoothly once the video has enough data to play
    const onCanPlay = () => {
      video.style.transition = 'opacity 0.6s ease'
      video.style.opacity = '1'
    }
    video.addEventListener('canplay', onCanPlay)

    let hls
    if (Hls.isSupported()) {
      hls = new Hls({
        startLevel: -1,            // auto-select lowest viable quality first — faster start
        capLevelToPlayerSize: false,
        maxMaxBufferLength: 30,
      })
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }

    // Only decode/play while on screen. iOS caps the number of videos that can
    // play at once; pausing off-screen backgrounds frees decoders for whatever
    // the visitor is actually looking at (and saves battery/data).
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = video.play()
          if (p) p.catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(video)

    return () => {
      io.disconnect()
      if (hls) hls.destroy()
      video.removeEventListener('canplay', onCanPlay)
    }
  }, [src, mounted])

  // Static fallback: a poster image when we have a real frame, otherwise a solid
  // black box (the HLS backgrounds are heavily blurred/vignetted to near-black).
  // Same className → identical box → no layout shift when the video swaps in.
  if (!mounted) {
    return poster ? (
      <img src={poster} alt="" aria-hidden="true" className={className} style={style} />
    ) : (
      <div
        aria-hidden="true"
        className={className}
        style={{ backgroundColor: '#000', ...style }}
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      style={{ opacity: 0, ...style }}
      loop
      muted
      playsInline
      {...props}
    />
  )
}
