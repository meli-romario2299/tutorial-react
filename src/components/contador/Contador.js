import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../store/counterSlice'
import { getGifs } from '../../store/thunks';

const Contador = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const images = useSelector((state) => state.images.gifs);
  const isLoading = useSelector((state) => state.images.isLoading);

  useEffect(() => {
    dispatch(getGifs());
  }, []);
  

  return (
    <>
      <div>Contador: {count}</div>
      <hr />
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))} >incrementByAmount</button>
      <br /><br /><br />
      {
        isLoading ? 
        <span>La información se está cargando</span>
        :
        images.length > 0 && images.map( image => {
          return <img key={image.id}  src={image.images.original.url} />
        })

      }
    </>

  )
}

export default Contador