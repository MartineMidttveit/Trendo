import React from 'react';
import Thumbnail from './Thumbnail';

function Cards() {
  return (
    <div className='grid 2xl:grid-cols-4 w-5/6 mx-auto pt-8 pb-16 gap-4 2xl:gap-x-6 2xl:gap-y-10'>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
    </div>
  );
}

export default Cards;


