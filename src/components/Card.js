import { Fragment } from "react";
import { Card, CardContent, CircularProgress } from "@mui/material"

const CardComponent = ({ loading, result }) => {

  const style = {
    visibility: 'hidden'
  }

  return (
    <>
      <Fragment>
        {loading ?
          <div style={{marginTop: '30px', minHeight: '40px', display: 'flex', alignItems: 'center', fontWeight: 'bold'}}>
            Analysing and calculating result&ensp;
            <CircularProgress color="inherit" size={20}/>
          </div>
          : null}
      </Fragment>
      <div id='predict-card' style={style}>
        <Card>
          <CardContent>
            <div id='price'>Predicted Price: {result[0]}</div><br />
            <div id='accuracy'>Predicted Accuracy: {result[1]}</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}


export default CardComponent