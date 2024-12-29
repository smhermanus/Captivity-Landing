'use client'

import { useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  anchorEl: HTMLElement | null
}

export default function SearchOverlay({ isOpen, onClose, anchorEl }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node) &&
        anchorEl &&
        !anchorEl.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose, anchorEl])

  if (!isOpen || !anchorEl) return null

  // Calculate position based on anchor element
  const rect = anchorEl.getBoundingClientRect()
  const top = rect.bottom + window.scrollY
  const left = rect.left + window.scrollX - 350 + rect.width // Center the dropdown under the search icon

  return (
    <div
      ref={overlayRef}
      className="fixed bg-white rounded-lg shadow-xl border border-gray-200 w-[400px] z-50 transition-all duration-200"
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      {/* Search input */}
      <div className="p-4">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            className="w-full bg-gray-100 text-gray-900 border-0 rounded-lg py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // Handle search here
                console.log('Search:', e.currentTarget.value)
              }
            }}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Quick links */}
      <div className="border-t border-gray-100 px-4 py-3">
        <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Popular Searches</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            T-Shirts
          </button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            Headwear
          </button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            Apparel
          </button>
        </div>
      </div>
    </div>
  )
}
