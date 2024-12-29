import React from 'react'

const RegistrationForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">REGISTRATION FORM</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name / Account Number *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">VAT Number</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CK Number</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Email *</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nature of Business *</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option>Promotional</option>
              <option>Advertising</option>
              <option>Branders and Event Companies</option>
              <option>Independent resellers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Who are you currently buying from? *</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option>None</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">If OTHER then please specify</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Website or Social Media Page</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Where would you be reselling our products?</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Position held in company</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Street Address *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address line 2 (Optional)</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Suburb</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Town / City *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Postcode / ZIP *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="South Africa" readOnly required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">The sales rep. that helped you? *</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option>None</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a></span>
          </label>
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md">Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
