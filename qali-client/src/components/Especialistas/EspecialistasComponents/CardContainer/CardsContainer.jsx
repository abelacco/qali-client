import React from 'react';
import Card from './CardContarinerComponents/Card';

function CardsContainer() {
  const array = [1,2,3,4]
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {array.map(element => <Card
        name={"Gaston"}
        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUJ_kOh-4mPOy2oYS6a7fe6gNfuF17uM61Q&usqp=CAU'}
        speciality={'Cardeologia'}
        subSpeciality ={'malabarista'}
        location={"nomada"}
        rating={3}
      />)}
    </div>
  )
}

// "_id": "646e31bf155d2c0b7174a0ac",
// "name": "gaston",
// "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUJ_kOh-4mPOy2oYS6a7fe6gNfuF17uM61Q&usqp=CAU",
// "lastName": "Cito",
// "email": "juandoctorcito@hotmail.com",
// "speciality": "Cardeologia",
// "sub_speciality": "Malabarista",
// "location": "Nomada",
// "rating": 0,

export default CardsContainer;