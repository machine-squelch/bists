"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

export function VantaWaves() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    if (!vantaRef.current) return

    // Load Three.js and Vanta.js dynamically
    const loadVanta = async () => {
      // Load Three.js first
      if (!window.THREE) {
        const threeScript = document.createElement("script")
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        threeScript.async = true
        document.head.appendChild(threeScript)
        await new Promise((resolve) => {
          threeScript.onload = resolve
        })
      }

      // Load Vanta.js
      if (!window.VANTA) {
        const vantaScript = document.createElement("script")
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
        vantaScript.async = true
        document.head.appendChild(vantaScript)
        await new Promise((resolve) => {
          vantaScript.onload = resolve
        })
      }

      // Initialize Vanta WAVES effect
      if (window.VANTA && window.VANTA.WAVES) {
        vantaEffect.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x0a4f9d, // Primary blue color
          shininess: 30,
          waveHeight: 15,
          waveSpeed: 1,
          zoom: 1,
        })
      }
    }

    loadVanta()

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
