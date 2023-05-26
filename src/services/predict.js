import axios from 'axios'
const baseUrl = 'http://stock-predict-backend.onrender.com/api'

const predict = async (symbol, interval, price, no_of_candles) => {
  const response = await axios.get(`${baseUrl}/stock/predict/${symbol}-${interval}-${price}-${no_of_candles}`)
  return response.data
}

export default { predict }