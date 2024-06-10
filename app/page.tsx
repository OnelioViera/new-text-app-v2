import React from 'react';
import Image from 'next/image';

const MainPage = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Hello, Tailwind!</h1>
        <p className='my-5'>This is a simple example of a React component using next.js.</p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <div className='text-white bg-pink-500 col-span-2 py-6 px-4 rounded-lg shadow-md border-2 border-red-700'>
          <h1 className='text-center text-4xl font-semibold lg:mb-2 md:mb-6'>Next.js</h1>
          <div className='grid text-center justify-items-center lg:p-10'>
            <Image
              src='/images/nextjs.png'
              alt='image'
              width={300}
              height={300}
              className='hidden lg:block md:block'
            />
          </div>
          <p className='text-center pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium recusandae omnis, quis ea perspiciatis cupiditate. Sint ex id deserunt, ad velit ducimus quos, minus fugit autem, nesciunt suscipit mollitia placeat!</p>
        </div>
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
        <div className='row-span-3 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>01
        </div>
        <div className='col-span-2 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>02</div>
        <div className='row-span-2 col-span-2 bg-green-400 text-white font-bold text-center py-2 px-2 border-green-600 border-2 shadow-md rounded-md'>03</div>
      </div>
    </>
  )
};

export default MainPage;
