import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  

export default function Resume() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Resume</h1>
      <p>Click <Button variant="primary" className="p-1 mx-1" onClick={handleShow}>here</Button> to see my Resume!</p>

      <Modal
        size="fullscreen"
        fullscreen="true"
        show={show}
        onHide={handleClose}
        scrollable="true"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <iframe src="https://docs.google.com/document/d/e/2PACX-1vS2a5PBNTHo16v2qmWyYuzANPgGchWeWrJPtpYYqq3kVbb54cHHlcOTUMqkZT8FvJTr_nxm9rtAQE3E/pub" frameBorder="0" width="100%" height="80%"></iframe>
          {/* <iframe src="https://drive.google.com/file/d/1YadNOA7FUbQheIZ6fJx39zN6AN9bVxHD/view?usp=sharing" frameBorder="0" width="100%" height="80%"></iframe> */}
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}


{/* // ./assets/DanielLongacreResume.pdf */}