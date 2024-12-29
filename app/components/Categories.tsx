import React from 'react'

const Categories: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-4 gap-6">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Headwear" />
          <div className="mt-2 text-lg font-semibold">HEADWEAR</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Apparel" />
          <div className="mt-2 text-lg font-semibold">APPAREL</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="T-Shirts" />
          <div className="mt-2 text-lg font-semibold">T-SHIRTS</div>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Kids" />
          <div className="mt-2 text-lg font-semibold">KIDS</div>
        </div>
      </div>
    </section>
  )
}

export default Categories
