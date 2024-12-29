import Image from 'next/image'
import Link from 'next/link'
import styles from './FwrdSection.module.css'

export default function FwrdSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Title and Description */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-red-600 mb-4">VISIT THE FWRD WEBSITE</h2>
          <p className="text-gray-600 text-lg mb-8">
            The FWRD Brand is distributed via promotional companies, advertising, event companies and resellers ONLY.
          </p>
          <Link 
            href="https://fwrd.co.za" 
            target="_blank"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Visit Site
          </Link>
        </div>

        {/* Right side - Flipping Card */}
        <div className={`flex-1 ${styles['perspective-1000']}`}>
          <div className={`relative w-full aspect-video ${styles['transform-style-preserve-3d']} transition-transform duration-700 hover:${styles['rotate-y-180']}`}>
            {/* Front of card */}
            <div className={`absolute w-full h-full ${styles['backface-hidden']}`}>
              <Image
                src="/FWRD.jpg"
                alt="FWRD Website Preview"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Back of card */}
            <div className={`absolute w-full h-full ${styles['backface-hidden']} ${styles['rotate-y-180']} bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl`}>
              <div className="flex flex-col items-center justify-center h-full text-white p-8">
                <h3 className="text-3xl font-bold mb-2">FWRD</h3>
                <p className="text-xl mb-8 text-center text-gray-300">THE PROMOTIONAL BRAND FOR YOU</p>
                <Link 
                  href="https://fwrd.co.za"
                  target="_blank"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Take me there
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
