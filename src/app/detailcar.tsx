


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FilterSidebar from './components/Filtersidebar';
import CarCard from './components/CarCard';
import CarDetailsCard from './components/CarDetailCard';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex max-w-7xl mx-auto p-4">
        {/* Sidebar */}
        <FilterSidebar />
        
        {/* Main content */}
        <div className="flex-1 space-y-8">
          <CarDetailsCard />
          
          {/* Recent Cars Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CarCard name="Koenigsegg" price={99} type="Sport" capacity="2 People" />
              <CarCard name="Nissan GT-R" price={80} type="Sport" capacity="2 People" />
              <CarCard name="Rolls-Royce" price={96} type="Sport" capacity="2 People" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

     

