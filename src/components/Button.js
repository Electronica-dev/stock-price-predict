import { Button } from "@mui/material";

const buttonComponent = ({ onClick, isDisabled }) => {
  return (
    <div style={{paddingTop: '0.3%'}}>
    <Button
      id='predict-button'
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isDisabled}
    >
      predict
    </Button>
  </div>
)}

export default buttonComponent