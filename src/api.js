import axios from 'axios'
export const getImages = async () => (await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')).data