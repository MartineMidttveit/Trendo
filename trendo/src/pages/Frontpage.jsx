import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Frontpage() {
  return (
    
      <main className="text-primary">
        <Header/>
        <div className="w-full bg-cover bg-center relative top-[145px]" style={{ backgroundImage: `url('/background.png')` }}>
          <div className="wrap bg-customGrey shadow-lg">

            <div className='pt-10 text-left w-5/6 mx-auto'>
              <h1 className='text-2xl font-bold'>All products</h1>
              <p className='2xl:text-lg pt-2'>Showing <span className='font-medium'>11</span> out of <span className='font-medium'>11.345</span> products</p>
            </div>
            
            <Cards/>
          </div>
          <Footer/>
        </div>
      </main>

  );
}

export default Frontpage;