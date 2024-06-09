import '@/assets/styles/globals.css';

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='p-10'>
        <main>
          {children}
        </main>
      </body>

    </html>
  )
};

export default layout;
