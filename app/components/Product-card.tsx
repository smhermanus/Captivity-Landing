import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  image: string
  title: string
  price: number
  salePrice?: number
  rating?: number
  isNew?: boolean
}

export function ProductCard({
  image,
  title,
  price,
  salePrice,
  rating = 5,
  isNew = false,
}: ProductCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-none shadow-none">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isNew && (
            <Badge className="absolute left-4 top-4 bg-black text-white">
              New
            </Badge>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="flex items-center space-x-2">
            {salePrice ? (
              <>
                <span className="text-sm font-medium text-red-600">R{salePrice}</span>
                <span className="text-sm text-neutral-500 line-through">R{price}</span>
              </>
            ) : (
              <span className="text-sm font-medium">R{price}</span>
            )}
          </div>
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
