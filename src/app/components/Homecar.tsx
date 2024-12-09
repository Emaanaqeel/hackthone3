
import Link from 'next/link';

import React from 'react'




export default function Hero () {
    return (
      <main>
      
    <div className="flex justify-between items-center h-screen">
    <div className="w-1/2 mx-12">
    <div className="flex flex-col gap-9">

    <img src="/images/Ads 1.png" alt="Ads1" />

  </div>
    </div>

    <div className="w-1/2 ">
    
    <img src="/images/Ads 2.png" alt="Ads2" />

    </div>
 
</div>


{/* <Pickup /> */}


<div className="flex flex-col md:flex-row items-center justify-between gap-14 md:gap-28 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
       {/* Pick-Up Section */}
     <div className="flex flex-col w-full md:w-1/2">        
      <h2 className="text-lg font-semibold mb-4">Pick - Up</h2>     
          <div className="flex flex-col gap-4">     
      
        <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
           <option>Select your city</option>
           </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Select your date</option>
          </select>
         <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
             <option>Select your time</option>
           </select>
         </div>
      </div>
      <br /><br />
    

      {/* Drop-Off Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Drop - Off</h2>
        <div className="flex flex-col gap-4">
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Select your city</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Select your date</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Select your time</option>
          </select>
        </div>
      </div>
</div>




{/* hero section */}

<h3 className='flex items-center mx-4 text-gray-500 '>Popular Car</h3>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car1.png"
          />
        </a>
        <div className="mt-4">
        <p className="mt-1">$58.00</p>
        <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>

        <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car6.png"
          />
        </a>
        <div className="mt-4">
         
          <p className="mt-1">$21.15</p>
          <span className="title-font font-medium text-2xl text-gray-900">$21.15</span>

         <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>

          
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car7.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$12.00</p>
          <span className="title-font font-medium text-2xl text-gray-900">$21.15</span>

         <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car8.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$18.40</p>
          <span className="title-font font-medium text-2xl text-gray-900">$18.40</span>

         <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>

        </div>
      </div>
    </div>
  </div>

</section>




 <h3 className='flex items-center mx-4 text-gray-500 '>Recomendation Car</h3>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car1.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$16.00</p>
          <span className="title-font font-medium text-2xl text-gray-900">$16.00</span>

          <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car2.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$21.15</p>
          <span className="title-font font-medium text-2xl text-gray-900">$12.00</span>

        <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car3.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$12.00</p>
          <span className="title-font font-medium text-2xl text-gray-900">$12.00</span>

          <Link href="/Detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
          
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car1.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$16.00</p>
          <span className="title-font font-medium text-2xl text-gray-900">$16.00</span>

         <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car1.png"
          />
        </a>
        <div className="mt-4">
        <p className="mt-1">$58.00</p>
        <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>

       <Link href="/Detailcar">
       <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car6.png"
          />
        </a>
        <div className="mt-4">
         
          <p className="mt-1">$21.15</p>
          <span className="title-font font-medium text-2xl text-gray-900">$21.15</span>

          <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>

          
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car7.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$12.00</p>
          <span className="title-font font-medium text-2xl text-gray-900">$21.15</span>

          <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>

        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/images/car8.png"
          />
        </a>
        <div className="mt-4">
          
          <p className="mt-1">$18.40</p>
          <span className="title-font font-medium text-2xl text-gray-900">$18.40</span>
          <Link href="/detailcar">
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Rent Now</button>
        </Link>
        </div>
      </div><br />

      <div className="mt-6 text-center">
      <Link href="/catogory">
     
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-indigo-800">
            Show more car
          </button>
       
      </Link>
      </div>
    </div>
    
  </div>

</section>


</main>
    );
  };
  
  