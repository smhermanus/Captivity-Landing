'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import SearchOverlay from './SearchOverlay'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const accountDropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-captivity-dark text-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/captivity-logo-white.png"
              alt="CAPTIVITY"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center"
                >
                  Headwear
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/headwear/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      New in Headwear
                    </Link>
                    <Link href="/headwear/flat-peaks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Flat Peaks
                    </Link>
                    <Link href="/headwear/pre-curved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Pre-Curved Peaks
                    </Link>
                    <Link href="/headwear/hats" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Hats
                    </Link>
                    <Link href="/headwear/multifunctional" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Multifunctional Headwear
                    </Link>
                    <Link href="/headwear/beanies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Beanies
                    </Link>
                    <Link href="/headwear/trucker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Trucker Caps
                    </Link>
                    <Link href="/headwear/bucket" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Bucket Hats
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center"
                >
                  Apparel
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/apparel/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      New in Apparel
                    </Link>
                    <Link href="/apparel/men" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Men
                    </Link>
                    <Link href="/apparel/women" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Women
                    </Link>
                    <Link href="/apparel/kids" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Kids
                    </Link>
                    <Link href="/apparel/tshirts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      T-Shirts
                    </Link>
                    <Link href="/apparel/golfers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Golfers
                    </Link>
                    <Link href="/apparel/hoodies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Hoodies
                    </Link>
                    <Link href="/apparel/jackets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Jackets
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center"
                >
                  All Collections
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/collections/signature" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Signature Collection
                    </Link>
                    <Link href="/collections/camo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Camo Collection
                    </Link>
                    <Link href="/collections/winter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Winter Collection
                    </Link>
                    <Link href="/collections/baseball" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Baseball Collection
                    </Link>
                    <Link href="/collections/fashion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Fashion Collection
                    </Link>
                    <Link href="/collections/sport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sport Collection
                    </Link>
                    <Link href="/collections/industrial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Industrial Collection
                    </Link>
                    <Link href="/collections/leisure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Leisure Collection
                    </Link>
                    <Link href="/collections/kids" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Kids Collection
                    </Link>
                    <Link href="/collections/african" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      African Collection
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative">
                <button 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center"
                  onClick={() => window.location.href = '/catalogue'}
                >
                  Catalogue
                </button>
              </li>
              <li className="relative">
                <button
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center"
                  onClick={() => window.location.href = '/clearance'}
                >
                  Clearance
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              ref={searchButtonRef}
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="hover:bg-white hover:text-black transition-colors"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-white hover:text-black transition-colors relative"
              title="Account"
              onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            >
              <User className="h-5 w-5" />
            </Button>
            {isAccountDropdownOpen && (
              <div 
                ref={accountDropdownRef}
                className="absolute right-16 top-16 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  <Link
                    href="https://captivity.co.za/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="https://captivity.co.za/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-white hover:text-black transition-colors"
              title="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        anchorEl={searchButtonRef.current}
      />
    </header>
  )
}

export default Header