import { React, useState } from 'react'
import TextField from '@mui/material/TextField'
import AutoComplete from './components/Autocomplete'
import Select from './components/Select'
import Card from './components/Card'
import Button from './components/Button'
import Disclaimer from './components/Disclaimer'
import predictService from './services/predict'
import '@fontsource/public-sans'
import './App.css'

const App = () => {
  const [symbol, setSymbol] = useState({})
  const [price, setPrice] = useState('')
  const [candles, setCandles] = useState('')
  const [interval, setinterval] = useState('')
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const handlePriceChange = (event) => {
		setPrice(event.target.value)
	}

  const handleCandlesChange = (event) => {
    setCandles(event.target.value)
  }

  const handleIntervalChange = (event) => {
    setinterval(event.target.value)
  }

  const setDisabled = () => {
    return !price || !candles || !symbol || !interval || loading
  }

  const setLoad = () => {
    setLoading(true)
    setShow(false)
    predictService.predict(symbol, interval, price, candles)
    .then((val) => {
      setLoading(false)
      setResult(val)
      setShow(true)
    })
  }

  const card = document.getElementById('predict-card');

  if (show === true) {
    if (card !== null)
      card.style.visibility = 'visible'
  }
  else {
    if (card !== null)
      card.style.visibility = 'hidden'
  }

  return (
    <>
      <div className='page-wrap'>
        <Disclaimer/>
        <h2>Stock Price Analysis</h2>
        <AutoComplete setSymbol={setSymbol}/>
        <div style={{paddingTop: '0.8%'}}>
          <TextField
            value={price}
            onChange={handlePriceChange}
            label="Price"
          />
        </div>
        <div style={{paddingTop: '0.8%'}}>
          <TextField
            value={candles}
            onChange={handleCandlesChange}
            label="Candles"
          />
        </div>
        <Select interval={interval} handleIntervalChange={handleIntervalChange}/>
        <Button
          onClick={setLoad}
          isDisabled={setDisabled()}
          text="predict"
        />
        <Card loading={loading} result={result}></Card>
      </div>
    </>
  )
}

export default App;
