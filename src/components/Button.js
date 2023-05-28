import { Button } from "@mui/material";

const buttonComponent = ({ onClick, isDisabled, text }) => {
  return (
    <div style={{paddingTop: '0.3%'}}>
    <Button
      id='predict-button'
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </Button>
  </div>
)}

export default buttonComponent