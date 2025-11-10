"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import Image from "next/image"

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
  return (
    <div className="relative w-full aspect-video">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeImage}
            alt="Before"
            style={{ objectFit: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImage}
            alt="After"
            style={{ objectFit: "cover" }}
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
