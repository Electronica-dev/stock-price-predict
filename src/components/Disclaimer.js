import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import Button from './Button';

export default function Disclaimer() {
  const [modal, setModal] = useState(false)

  const handlePopup = (e) => {
    console.log('inside handlepopup');
    setModal(false)
  }

  useEffect(() => {
    setModal(true);
  }, [])

  return (
    <Modal
      open={modal}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15%",
        justifyContent: "center"
      }}
    >
      <Card
        sx={{ maxWidth: 500 }}
      >
        <CardHeader
          title="Disclaimer"
          sx={{textAlign: "center"}}
        />
        <CardContent>
          This website has been developed for educational purposes only.
          Any losses incurred and/or risks taken is the user's responsibility.
        </CardContent>
        <CardActions disableSpacing sx={{justifyContent: "center"}}>
          <Button
            onClick={handlePopup}
            text='I Agree'
          />
        </CardActions>
      </Card>
    </Modal>
  );
}