import axios from 'axios'

const postapi =  async() => {
  const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
  return response.data
}

export default postapi
