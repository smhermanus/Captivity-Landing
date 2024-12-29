import React from 'react'

const BestSellers: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-3xl font-bold text-center mb-6">BEST SELLERS</div>
      <div className="grid grid-cols-4 gap-6">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Classic T-Shirt" />
          <div className="mt-2">Classic T-Shirt</div>
          <div className="mt-1 text-yellow-500">★★★★★</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Americano Cap" />
          <div className="mt-2">Americano Cap</div>
          <div className="mt-1 text-yellow-500">★★★★★</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Promo T-Shirt" />
          <div className="mt-2">Promo T-Shirt</div>
          <div className="mt-1 text-yellow-500">★★★★★</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Aspen Beanie" />
          <div className="mt-2">Aspen Beanie</div>
          <div className="mt-1 text-yellow-500">★★★★★</div>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
