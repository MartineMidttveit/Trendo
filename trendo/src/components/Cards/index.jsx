import React from 'react';
import Thumbnail from './Thumbnail';

function Cards() {
  return (
    <div className='grid 2xl:grid-cols-4 w-5/6 mx-auto pt-8 pb-16 gap-6'>
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


