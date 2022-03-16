import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const getStockList = async () => {
  const bseStocks = await axios.get(`${baseUrl}/stock/bse`)
  const nseStocks = await axios.get(`${baseUrl}/stock/nse`)
  return nseStocks.data.concat(bseStocks.data)
}

export default { getStockList }