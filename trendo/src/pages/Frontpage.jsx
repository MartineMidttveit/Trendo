import React from 'react';
import Header from '../components/Header';

function Frontpage() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <main className="relative z-10 min-h-screen">
        <Header/>
        <div className="wrap bg-customGrey min-h-screen">
          {/* Your content goes here */}
        </div>
      </main>
    </div>
  );
}

export default Frontpage;