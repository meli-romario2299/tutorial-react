const baseURL = 'https://54fc58b0-10e2-4fe9-8ef1-ecd98c639781.mock.pstmn.io';

export const login = async () => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST'
  });
  // .then(res => {
  //   if(res.ok) {
  //     res.json()
  //   } else {
  //     throw new Error(`Error con status ${res.status}`)
  //   }
  // })
  // .then(console.log)
  // .catch( err => console.log('Esto es un error ', err))

  return response.json();

}