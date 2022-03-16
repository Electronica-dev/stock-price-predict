import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

const SelectComponent = ({ interval, handleIntervalChange }) => {

  return (
    <div style={{paddingTop: '0.8%'}}>
      <FormControl sx={{ minWidth: 130 }}>
        <InputLabel id="interval-select-label">Interval</InputLabel>
        <Select
          defaultValue={'1mo'}
          labelId="interval-select-label"
          id="interval-select"
          value={interval}
          label="Interval"
          onChange={handleIntervalChange}
        >
          <MenuItem value={'1m'}>1 minute</MenuItem>
          <MenuItem value={'5m'}>5 minutes</MenuItem>
          <MenuItem value={'15m'}>15 minutes</MenuItem>
          <MenuItem value={'1d'}>1 day</MenuItem>
          <MenuItem value={'1w'}>1 week</MenuItem>
          <MenuItem value={'1mo'}>1 month</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectComponent