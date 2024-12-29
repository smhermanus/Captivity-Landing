import React from 'react'
import { Store, Building2, Factory, BadgeCheck, ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'

export function RegisterSection() {
  const categories = [
    {
      icon: Store,
      title: 'Retail Stores',
      description: 'Physical stores selling clothing and accessories',
    },
    {
      icon: Building2,
      title: 'Promotional Companies',
      description: 'Businesses looking for branded merchandise solutions',
    },
    {
      icon: Users,
      title: 'Independent Resellers',
      description: 'Individual distributors and sales representatives',
    },
  ]

  return (
    <>
      <section className="py-16">
        <div className="container w-full mx-auto px-4">
          <div className="mx-auto bg-[#efeeee] rounded-xl overflow-hidden">
            <div className="p-12">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">WHO CAN REGISTER</h2>
                <p className="text-gray-600 text-lg">
                  Join our network of authorized distributors and grow your business with Captivity if you fall under the following categories:
                </p>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center group hover:shadow-lg transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16">
                <Link 
                  href="/register"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-lg text-lg font-semibold text-white"
                >
                  Register Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="mt-4 text-gray-600">
                  Start your journey with Captivity today
                </p>
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
