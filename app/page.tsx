import React from 'react'

const MainPage = () => {
  return (
    <>
      <div className='p-10'>
        <h1 className='text-3xl font-bold'>Hello, Tailwind!</h1>
        <p className='mt-5'>This is a simple example of a React component using next.js.</p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-indigo-500 duration-300 text-white bg-pink-500 col-span-2 hover:col-span-4 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>01</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>02</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>03</div>
        <div className='text-white bg-pink-500 col-span-2 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>04</div>
        <div className='lg:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>05</div>
        <div className='lg:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>06</div>
        <div className='lg:hidden md:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>07</div>
        <div className='lg:hidden md:hidden text-white bg-pink-500 text-center py-2 px-2 rounded-lg shadow-md border-2 border-red-700'>08</div>
      </div>

      <div className='grid grid-rows-4 grid-flow-col gap-4 mt-6'>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 1</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 2</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 3</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 4</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 5</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 6</div>
        <div className='bg-blue-200 text-white font-bold py-2 px-2 rounded-lg text-center shadow-md border-2 border-blue-400'>row 7</div>
      </div>

      <div className='grid grid-rows-3 grid-flow-col gap-4 mt-6'>
        <div className='row-span-3 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>01</div>
        <div className='col-span-2 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>02</div>
        <div className='row-span-2 col-span-2 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>03</div>
      </div>

    </>
  )
};

export default MainPage;