import React from 'react'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-base font-bold mb-3">FOLLOW US</div>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 group hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 group hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 group hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="text-sm">Youtube</span>
              </a>
            </div>
          </div>

          <div>
            <div className="text-base font-bold mb-3">INFORMATION</div>
            <div className="text-xs space-y-1">
              <a href="#" className="block hover:underline">About</a>
              <a href="#" className="block hover:underline">Help</a>
              <a href="#" className="block hover:underline">Contact Us</a>
              <a href="#" className="block hover:underline">Custom Orders</a>
              <a href="#" className="block hover:underline">Information Act</a>
              <a href="#" className="block hover:underline">Terms & Conditions</a>
              <a href="#" className="block hover:underline">International Tolerance and Apparel</a>
            </div>
          </div>

          <div>
            <div className="text-base font-bold mb-3">CONTACT US</div>
            <div className="space-y-1">
              <div className="text-xs">General: info@captivity.co.za</div>
              <div className="text-xs">Website Queries: web@captivity.co.za</div>
              <br />
              <div className="text-xs"><b>CAPE TOWN</b></div>
              <div className="text-xs">Tel: +27 21 590 3668</div>
              <br />
              <div className="text-xs"><b>JOHANNESBURG</b></div>
              <div className="text-xs">Tel: +27 11 608 3014</div>
            </div>
          </div>

          <div>
            <div className="text-base font-bold mb-3">OPENING HOURS</div>
            <div className="space-y-1">
              <div className="text-sm font-medium"><b>Cape Town:</b></div>
              <div className="text-xs">Mon - Thu: 8 am - 5 pm</div>
              <div className="text-xs">Friday: 8 am - 4 pm</div>
              <div className="text-xs">Saturday - Sunday: Closed</div>
              <div className="text-xs">Public Holidays: Closed</div><br />
              <div className="text-sm font-medium mt-3"><b>Johannesburg:</b></div>
              <div className="text-xs">Mon - Thu: 7 am - 4:30 pm</div>
              <div className="text-xs">Friday: 7 am - 4 pm</div>
              <div className="text-xs">Saturday - Sunday: Closed</div>
              <div className="text-xs">Public Holidays: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
