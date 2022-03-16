import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const predict = async (symbol, interval, price, no_of_candles) => {
  const response = await axios.get(`${baseUrl}/stock/predict/${symbol}-${interval}-${price}-${no_of_candles}`)
  console.log(response.data);
  return response.data
}

export default { predict }