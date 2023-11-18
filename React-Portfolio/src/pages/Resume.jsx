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
      {/* <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p> */}
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