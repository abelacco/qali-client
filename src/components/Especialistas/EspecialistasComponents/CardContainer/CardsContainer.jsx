import Card from './CardContarinerComponents/Card';
import { useSelector } from 'react-redux';
import { ProgressSpinner } from 'primereact/progressspinner';

function CardsContainer() {

  const { doctors } = useSelector(state => state.doctor)

  return (

    <div className='flex flex-wrap gap-8 justify-center '>
      {
        doctors ? doctors?.map(element => <Card
          id={element._id}
          name={`${element.name} ${element.lastName}`}
          image={element.image}
          speciality={element.speciality}
          subSpeciality={element.sub_speciality}
          location={element.location}
          rating={element.rating}
          key={element._id}
        />)
          :
          <div className='card flex justify-content-center h-96 pt-28'>
            <ProgressSpinner />

          </div>
      }
    </div>
  )
}

export default CardsContainer;