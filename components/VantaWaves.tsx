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

    let mounted = true

    // Load Three.js and Vanta.js dynamically
    const loadVanta = async () => {
      try {
        // Load Three.js first
        if (!window.THREE) {
          await new Promise<void>((resolve, reject) => {
            const threeScript = document.createElement("script")
            threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
            threeScript.async = true
            threeScript.onload = () => resolve()
            threeScript.onerror = () => reject(new Error("Failed to load Three.js"))
            document.head.appendChild(threeScript)
          })
        }

        // Wait a bit for Three.js to initialize
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Load Vanta.js WAVES
        if (!window.VANTA || !window.VANTA.WAVES) {
          await new Promise<void>((resolve, reject) => {
            const vantaScript = document.createElement("script")
            vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
            vantaScript.async = true
            vantaScript.onload = () => resolve()
            vantaScript.onerror = () => reject(new Error("Failed to load Vanta.js"))
            document.head.appendChild(vantaScript)
          })
        }

        // Wait for VANTA to be fully available
        let retries = 0
        while (!window.VANTA?.WAVES && retries < 10) {
          await new Promise((resolve) => setTimeout(resolve, 100))
          retries++
        }

        // Initialize Vanta WAVES effect
        if (mounted && vantaRef.current && window.VANTA?.WAVES) {
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
            waveHeight: 20,
            waveSpeed: 1.5,
            zoom: 0.75,
          })
        }
      } catch (error) {
        console.error("Error loading Vanta.js:", error)
      }
    }

    loadVanta()

    // Cleanup function
    return () => {
      mounted = false
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy()
        } catch (error) {
          console.error("Error destroying Vanta effect:", error)
        }
        vantaEffect.current = null
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
