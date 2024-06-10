import React from 'react';
import Image from 'next/image';

const MainPage = () => {
  return (
    <>
      <div className='text-center lg:text-left'>
        <h1 className='text-3xl font-bold'>Next.js, React and Tailwind!</h1>
        <p className='my-5'>This is a simple example of a React component using Next.js with Tailwind.</p>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-2 gap-4'>

        {/* Next Component */}
        <div className='text-white text-center bg-pink-500 col-span-2 py-6 px-4 rounded-lg shadow-md border-2 border-red-700'>
          <h1 className='text-center text-4xl font-semibold lg:mb-2 md:mb-6'>Next.js</h1>
          <div className='grid text-center justify-items-center lg:p-10'>
            <Image
              src='/images/nextjs.png'
              alt='image'
              width={265}
              height={265}
              className='hidden lg:block md:block'
            />
          </div>
          <div className='hidden lg:block md:block mt-4'>
            <button className='font-semibold bg-gray-900 hover:bg-gray-500 py-2 px-6 rounded-full shadow-lg'><a href='https://nextjs.org/' target='blank_page'>MORE INFO</a></button>
          </div>
          <p className='lg:text-left md:text-left lg:text-xl md:text-md text-center pt-4'> <a className='text-blue-500 font-bold hover:text-blue-700' href='https://nextjs.org/' target='blank_page'>Next.js</a> is an open-source web development framework created by the private companyVercel providing React-based web applications with server-side rendering and static website generation.</p>
        </div>

        {/* React Component */}
        <div className='text-white bg-pink-500 col-span-2 text-center py-6 px-4 rounded-lg shadow-md border-2 border-red-700'>
          <h1 className='text-center text-4xl font-semibold lg:mb-2 md:mb-6'>React</h1>
          <div className='grid text-center justify-items-center lg:p-10'>
            <Image
              src='/images/React.png'
              alt='image'
              width={300}
              height={300}
              className='hidden lg:block md:block'
            />
          </div>
          <div className='hidden lg:block md:block mt-4'>
            <button className='font-semibold bg-[#48d2f5] hover:bg-[#3db4d1] py-2 px-6 rounded-full shadow-lg'><a href='https://react.dev/' target='blank_page'>MORE INFO</a></button>
          </div>
          <p className='lg:text-left md:text-left lg:text-xl md:text-md text-center pt-4'><a className='text-blue-500 hover:text-blue-700 font-bold' href="https://react.dev/" target='blank_page'>React</a> components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data</p>
        </div>

        {/* Tailwind Component */}
        <div className='text-white bg-pink-500 col-span-2 text-center py-6 px-4 rounded-lg shadow-md border-2 border-red-700'>
          <h1 className='text-center text-4xl font-semibold lg:mb-2 md:mb-6'>Tailwindcss</h1>
          <div className='grid text-center justify-items-center lg:p-10'>
            <Image
              src='/images/Tailwind.png'
              alt='image'
              width={400}
              height={400}
              className='hidden lg:block md:block mt-4'
            />
          </div>
          <div className='hidden lg:block md:block mt-4'>
            <button className='font-semibold bg-[#48d2f5] hover:bg-[#3db4d1] py-2 px-6 rounded-full shadow-lg'><a href='https://react.dev/' target='blank_page'>MORE INFO</a></button>
          </div>
          <p className='lg:text-left md:text-left lg:text-xl md:text-md text-center pt-4'><a className='text-blue-500 hover:text-blue-700 font-bold' href="https://tailwindcss.com/" target='blank_page'>Tailwind CSS</a> works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
        </div>
        </div>
    </>
  )
};

export default MainPage;
