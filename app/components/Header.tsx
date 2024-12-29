'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import SearchOverlay from './SearchOverlay'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)

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
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Headwear
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections" 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link 
                  href="/pages" 
                  className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Clearance
                </Link>
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
              className="hover:bg-white hover:text-black transition-colors"
              title="Account"
            >
              <User className="h-5 w-5" />
            </Button>
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