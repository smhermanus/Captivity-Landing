import Image from 'next/image'
import Link from 'next/link'

interface CollectionProps {
  title: string
  image: string
  href: string
  isHotList?: boolean
}

function Collection({ title, image, href, isHotList = false }: CollectionProps) {
  return (
    <div className="group relative h-full w-full overflow-hidden bg-[#F5F5F5] rounded-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {isHotList && (
          <span className="mb-2 text-sm font-medium uppercase tracking-wider">
            Hot List
          </span>
        )}
        <h3 className="mb-2 text-2xl font-bold uppercase">{title}</h3>
        <Link 
          href={href}
          className="inline-block border-b border-black pb-1 text-sm font-medium uppercase tracking-wider hover:opacity-80"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export function Section2() {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* T-Shirts - Large left panel */}
          <div className="h-full md:col-span-6">
            <Collection
              title="T-Shirts"
              image="/Promo T-shirt.jpg"
              href="/tshirts"
              isHotList={false}
            />
          </div>
          
          {/* Right column */}
          <div className="flex flex-col gap-4 md:col-span-6">
            {/* Apparel - Top right panel */}
            <div className="h-[300px]">
              <Collection
                title="Apparel"
                image="/MensGolfer.jpg"
                href="/apparel"
                isHotList={false}
              />
            </div>
            
            {/* Bottom right grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Kids Collection */}
              <div className="h-[300px]">
                <Collection
                  title="Kids"
                  image="/kids.jpg"
                  href="/kids"
                  isHotList={false}
                />
              </div>
              
              {/* Headwear */}
              <div className="h-[300px]">
                <Collection
                  title="Headwear"
                  image="/Promo6Panel.jpg"
                  href="/headwear"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="h-px bg-gray-200"></div>
      </div>
    </>
  )
}
