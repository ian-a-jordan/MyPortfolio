import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'85vh',
  height:'85vh',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: "scroll"
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <btn className="btn">
      <Button onClick={handleOpen}style={{fontFamily: 'inherit', fontSize: 'inherit', color: 'white'}}>Resume</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Card sx={style}>
          <CardMedia
            component="img"
            image="https://media-exp1.licdn.com/dms/image/C4D2DAQFYKsrnac8RjA/profile-treasury-image-shrink_1280_1280/0/1642733967977?e=2147483647&v=beta&t=a92jQrI4yADebBp-Q_qvqFs9A4LOXo6UOL_xIERey4g"
            alt="Resume"
          />
          <CardContent>
          </CardContent>
          <CardActions style={{justifyContent:'center'}}>
            <Link href="https://www.linkedin.com/in/ian-jordan-aa6ab8207/overlay/1635480584948/single-media-viewer/" target="_blank" rel="noreferrer">
            <Button size="small" variant="contained" color="success" >Visit</Button>
            </Link>
          </CardActions>
          </Card>
      </Modal>
    </btn>
  );
}
