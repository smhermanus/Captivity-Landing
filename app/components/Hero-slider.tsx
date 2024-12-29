'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { 
    id: 1, 
    image: '/ActivVest.jpg', 
    alt: 'Fashion Slide 1',
    backgroundColor: '#E6D5C3',
    title: 'ACTIVE LIFESTYLE',
    subtitle: 'Performance Meets Style',
    cta: 'Shop Activewear'
  },
  { 
    id: 2, 
    image: '/Classic-T-shirt.jpg', 
    alt: 'Fashion Slide 2',
    backgroundColor: '#ddcdda',
    title: 'CLASSIC ESSENTIALS',
    subtitle: 'Timeless Comfort',
    cta: 'Explore Collection'
  },
  { 
    id: 3, 
    image: '/MensGolfer.jpg', 
    alt: 'Fashion Slide 3',
    backgroundColor: '#b2d4f1',
    title: 'GOLF COLLECTION',
    subtitle: 'Precision in Motion',
    cta: 'View Golf Range'
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid h-[600px] w-full grid-cols-1 md:grid-cols-2">
      {/* Left Column - Content */}
      <div 
        className="flex flex-col justify-center px-28 transition-colors duration-500"
        style={{ backgroundColor: slides[currentSlide].backgroundColor }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">{slides[currentSlide].title}</h1>
          <p className="text-xl text-gray-700">{slides[currentSlide].subtitle}</p>
          <Link 
            href="#" 
            className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            {slides[currentSlide].cta}
          </Link>
        </div>
      </div>

      {/* Right Column - Image Slider */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
