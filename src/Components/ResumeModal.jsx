import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

// Modal styles
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85vh',
  height: '85vh',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'hidden', // updated this for iframe
  backgroundColor: 'white', // make sure background isn't transparent
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="btn"
      style={{
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onClick={handleOpen}
        style={{ fontFamily: 'inherit', fontSize: 'inherit', color: 'white', width: '100%',}}
      >
        Resume
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent style={{ height: '90%', padding: 0 }}>
            <iframe
              src="/IanJordanResume.pdf" // <-- Replace with your actual file path
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Resume PDF"
            />
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Link href="/IanJordanResume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="small" variant="contained" color="primary">
                Open Fullscreen
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
