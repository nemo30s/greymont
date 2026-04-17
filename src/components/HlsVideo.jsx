import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function HlsVideo({ src, className = '', style = {}, ...props }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Fade in smoothly once the video has enough data to play
    const onCanPlay = () => {
      video.style.transition = 'opacity 0.6s ease'
      video.style.opacity = '1'
    }
    video.addEventListener('canplay', onCanPlay)

    if (Hls.isSupported()) {
      const hls = new Hls({
        startLevel: -1,            // auto-select lowest viable quality first — faster start
        capLevelToPlayerSize: false,
        maxMaxBufferLength: 30,
      })
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
      return () => {
        hls.destroy()
        video.removeEventListener('canplay', onCanPlay)
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.play().catch(() => {})
    }

    return () => video.removeEventListener('canplay', onCanPlay)
  }, [src])

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      loop
      muted
      playsInline
      {...props}
    />
  )
}
