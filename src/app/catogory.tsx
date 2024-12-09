import React from 'react'


import Navbar from './components/Navbar'
import sidebar from './components/sidebar'
import Hero  from './components/Homecar'
import Footer from './components/Footer'

import Link from 'next/link'
 
 

const CarListing = () => {
  return (

    <main>

<Navbar />



    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          {/* Category Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Type</h3>
            <ul className="space-y-2">
              <li><input type="checkbox" className="mr-2" /> MPV (16)</li>
              <li><input type="checkbox" className="mr-2" /> Sedan (20)</li>
              <li><input type="checkbox" className="mr-2" /> Coupe (14)</li>
              <li><input type="checkbox" className="mr-2" /> Hatchback (14)</li>
            </ul>
          </div>

          {/* Capacity Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Capacity</h3>
            <ul className="space-y-2">
              <li><input type="radio" name="capacity" className="mr-2" /> 2 Person (10)</li>
              <li><input type="radio" name="capacity" className="mr-2" /> 4 Person (14)</li>
              <li><input type="radio" name="capacity" className="mr-2" /> 6 Person (12)</li>
              <li><input type="radio" name="capacity" className="mr-2" /> 8 or More (16)</li>
            </ul>
          </div>

          {/* Price Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full" />
            <div className="text-sm text-gray-600 mt-2">Max: $100.00</div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Car Cards */}
          {Array(9).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              {/* Car Image */}
              <img
                src="/images/car5.png"
                alt="Car"
                className="w-full h-32 object-cover rounded-md mb-4" />
              {/* Car Details */}
              <h3 className="text-lg font-semibold">Car Name</h3>
              <p className="text-sm text-gray-600 mb-2">Category</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>90L</span>
                <span>Manual</span>
                <span>4 People</span>
              </div>
              <div className="mt-4">
                <div className="text-lg font-semibold">$80.00/day</div>
                <div className="text-sm text-gray-500 line-through">$100.00/day</div>
                < Link href="/payment">
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-indigo-800">
                  Rent Now
                </button>
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
        <Link href="/catogory">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-indigo-800">
            Show more car
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
   </main>
  );
};

export default CarListing;

  
