'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProductCard } from './Product-card'

interface Product {
  id: number
  title: string
  price: number
  image: string
  rating: number
  salePrice?: number
}

const products: Record<string, Product[]> = {
  'new-arrivals': [
    {
      id: 1,
      title: 'Faux suede biker jacket',
      price: 60.00,
      image: '/placeholder.png?height=600&width=400',
      rating: 4
    },
    {
      id: 2,
      title: 'Pocketed denim jacket',
      price: 56.00,
      image: '/placeholder.png?height=600&width=400',
      rating: 0
    },
    {
      id: 3,
      title: 'Oversized jacket with denim panels',
      price: 33.00,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    },
    {
      id: 4,
      title: 'Eco Aware organic cotton top',
      price: 39.00,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    }
  ],
  'best-sellers': [
    {
      id: 5,
      title: 'Classic Leather Jacket',
      price: 89.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 5
    },
    {
      id: 6,
      title: 'Denim High-Rise Jeans',
      price: 49.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    },
    {
      id: 7,
      title: 'Cotton Blend T-Shirt',
      price: 24.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4
    },
    {
      id: 8,
      title: 'Wool Blend Sweater',
      price: 69.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    }
  ],
  'on-sale': [
    {
      id: 9,
      title: 'Summer Dress',
      price: 79.99,
      salePrice: 59.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4
    },
    {
      id: 10,
      title: 'Casual Blazer',
      price: 129.99,
      salePrice: 89.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    },
    {
      id: 11,
      title: 'Printed Blouse',
      price: 45.99,
      salePrice: 29.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4
    },
    {
      id: 12,
      title: 'Slim Fit Pants',
      price: 69.99,
      salePrice: 49.99,
      image: '/placeholder.png?height=600&width=400',
      rating: 4.5
    }
  ]
}

export function ProductTabs() {
  const [activeTab, setActiveTab] = React.useState('new-arrivals')
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slidesPerView = 4
  const maxSlide = Math.max(0, products[activeTab].length - slidesPerView)

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">GOTTA HAVE IT</h2>
          <Tabs
            defaultValue="new-arrivals"
            className="w-full"
            onValueChange={value => {
              setActiveTab(value)
              setCurrentSlide(0)
            }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="new-arrivals" className="text-xl">New Products</TabsTrigger>
              <TabsTrigger value="best-sellers" className="text-xl">Best Sellers</TabsTrigger>
              <TabsTrigger value="on-sale" className="text-xl">Coming Soon</TabsTrigger>
            </TabsList>
            {Object.entries(products).map(([key, items]) => (
              <TabsContent key={key} value={key} className="relative">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`
                    }}
                  >
                    {items.map((product) => (
                      <div
                        key={product.id}
                        className="w-1/4 flex-shrink-0 px-3"
                      >
                        <ProductCard {...product} />
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="h-px bg-gray-200"></div>
      </div>
    </>
  )
}
