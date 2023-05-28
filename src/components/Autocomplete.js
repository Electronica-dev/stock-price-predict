import { React, useState, useEffect, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import getStockService from '../services/getStockList';

const AutocompleteComponent = ({ setSymbol }) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const loading = options.length === 0;

  const filterOptions = createFilterOptions({
    ignoreAccents: false,
    stringify: (option) => option.label + option.value
  });

  useEffect(() => {

    if (!loading) {
      return undefined;
    }

    (async () => {
      const stockList = await getStockService.getStockList();
      setOptions([...stockList]);
    })();

  }, [loading]);

  return (
    <Autocomplete
      freeSolo
      open={open}
      filterOptions={filterOptions}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) =>{
        setInputValue(newInputValue)
        if(newInputValue.length > 2)
          setOpen(true)
        else
          setOpen(false)
        }
      }
      onChange={(event, value, reason) => {
          if (value === null) {
            setSymbol(null)
          }
          if(reason === 'selectOption') {
            if (value.exchange === 'NSE') {
              setSymbol(value.label.concat('.NS'))
            }
            else if (value.exchange === 'BSE') {
              setSymbol(value.label.concat('.BO'))
            }
            setOpen(false)
          }
        }
      }
      disablePortal
      id="combo-box-demo"
      loading={loading}
      options={options}
      getOptionLabel={(option) => option.value}
      sx={{ maxWidth: 800 }}
      renderOption={(props, option) => (
        <div {...props} key={uuidv4()}>
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td style={{width: '20%'}}>{option.label}</td>
                <td style={{textAlign: 'left'}}>{option.value}</td>
                <td style={{textAlign: 'right'}}>{option.exchange}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Stock"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
)}

export default AutocompleteComponent
