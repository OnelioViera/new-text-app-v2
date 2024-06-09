import React from 'react'

const MainPage = () => {
  return (
    <>
      <div className='p-10'>
        <h1 className='text-3xl font-bold'>Hello, World!</h1>
        <p className='mt-5'>This is a simple example of a React component using next.js.</p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <div className='text-white bg-pink-500 col-span-2 hover:col-span-4 text-center py-2 px-2 rounded-lg'>01</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg'>02</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg'>03</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg'>04</div>
        <div className='lg:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg'>05</div>
        <div className='lg:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg'>06</div>
        <div className='lg:hidden md:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg'>07</div>
        <div className='lg:hidden md:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg'>08</div>
      </div>
    </>
  )
};

export default MainPage;
