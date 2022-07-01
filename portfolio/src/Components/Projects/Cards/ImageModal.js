import {Image, Modal} from 'react-bootstrap'
import './ImageModal.css'
function ImageModal(props) {
  return (
    <Modal show={props.show} fullscreen='md-down' onHide={props.handleClose}>
        <Modal.Body  >
            <Modal.Header closeVariant='white' closeButton/>
            <Image className='modalImg' loading='lazy' src={props.link}/>
        </Modal.Body>
      </Modal>

  )
}

export default ImageModal