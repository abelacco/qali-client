import React from 'react';
import Card from './CardContarinerComponents/Card';

function CardsContainer() {
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default CardsContainer;