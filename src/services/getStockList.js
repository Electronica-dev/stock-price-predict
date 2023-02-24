import axios from 'axios'
const baseUrl = 'http://stock-predict-backend.onrender.com/api'

const getStockList = async () => {
  const bseStocks = await axios.get(`${baseUrl}/stock/bse`)
  const nseStocks = await axios.get(`${baseUrl}/stock/nse`)
  return nseStocks.data.concat(bseStocks.data)
}

export default { getStockList }