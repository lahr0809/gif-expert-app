
import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';


export  function GifGrid({ category }) {

  const {images, isLoading} = useFetchGifs (category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h3>Cargando...</h3>)
      }
      <div className='card-grid'>
        {
          images.map((images) => (
          <GifItem 
          key={images.id}
          {...images}
          />
          ))
        }
        </div>
    </>

  )

}
