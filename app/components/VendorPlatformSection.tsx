import { BadgeCheck } from 'lucide-react'

export function VendorPlatformSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-2xl overflow-hidden">
          <div className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">VENDOR PLATFORM</h2>
            <p className="text-xl mb-8 text-white/90">
              Our dedicated vendor platform is coming soon! Stay tuned for an enhanced business experience.
            </p>
            <div className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold">
              <BadgeCheck className="w-5 h-5" />
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
