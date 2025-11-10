"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode
  className?: string
}

export function Carousel({ children, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex md:flex-row flex-col gap-4">{children}</div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-white shadow-lg border-2"
        onClick={scrollPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-white shadow-lg border-2"
        onClick={scrollNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      {/* Mobile navigation buttons */}
      <div className="md:hidden flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-lg border-2"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-lg border-2"
          onClick={scrollNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full md:basis-full", className)}>
      {children}
    </div>
  )
}
