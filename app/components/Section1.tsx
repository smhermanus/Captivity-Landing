import { Users, Clock, Factory } from 'lucide-react'

export function Section1() {
  const features = [
    {
      icon: Users,
      title: 'BECOME A RESELLER',
      description: 'Join our network of authorized distributors and grow your business',
    },
    {
      icon: Clock,
      title: 'QUICK TURNAROUND',
      description: 'Orders ready within 24/48 hours after payment confirmation',
    },
    {
      icon: Factory,
      title: 'CUSTOM FACTORY ORDERS',
      description: 'Tailored manufacturing solutions for your specific needs',
    },
  ]

  return (
    <section className="border-y bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:bg-gray-50 p-6 rounded-lg transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-red-50 p-4 mb-4">
                <feature.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
