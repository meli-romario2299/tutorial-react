import { getGifsLoading, setGifs } from "./imagesSlider";

export const getGifs = () => {
  return async (dispatch, state) => {
    console.log(state)
    dispatch(getGifsLoading());
    setTimeout(async () => {
      const data = await fetch('https://api.giphy.com/v1/gifs/search?api_key=1C2a97Z3JXRckG4lqCI2OX7nhtA8tSbi&q=celular&limit=25&offset=0&rating=g&lang=en')
      const jsonData = await data.json();
      console.log('data: ', jsonData);
      dispatch(setGifs(jsonData.data))
    }, 4000);
  }
}