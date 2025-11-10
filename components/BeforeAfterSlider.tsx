"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { useState } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false })

  return (
    <div className="relative w-full aspect-video bg-gray-200">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeImage}
            alt="Before"
            style={{ objectFit: "cover" }}
            onLoad={() => setImagesLoaded(prev => ({ ...prev, before: true }))}
            onError={(e) => {
              console.error("Failed to load before image:", beforeImage)
              e.currentTarget.style.display = 'none'
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImage}
            alt="After"
            style={{ objectFit: "cover" }}
            onLoad={() => setImagesLoaded(prev => ({ ...prev, after: true }))}
            onError={(e) => {
              console.error("Failed to load after image:", afterImage)
              e.currentTarget.style.display = 'none'
            }}
          />
        }
      />
      <div className="absolute left-4 top-4 rounded bg-black/70 px-3 py-1.5 text-sm font-semibold text-white z-10">
        {beforeLabel}
      </div>
      <div className="absolute right-4 top-4 rounded bg-black/70 px-3 py-1.5 text-sm font-semibold text-white z-10">
        {afterLabel}
      </div>
    </div>
  )
}
