import { REACT_APP_RAPID_API_KEY } from '@env'

// Fetchs multiple random secret words from the API
const fetchSecretWords = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };

  const response = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&wordLength=5', options)
  const data = await response.json();
  console.log('fetchSecretWords: ', data);
  return data;
};

export default fetchSecretWords;