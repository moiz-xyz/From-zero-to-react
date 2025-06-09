import axios from 'axios'

const postapi =  async() => {
  const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
  return response.data
}
const postapi2 =  async(name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,capital,flags`)
  return response.data[0]
}

export default postapi;
export { postapi2 };
