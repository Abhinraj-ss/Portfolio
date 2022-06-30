import {Image, Modal} from 'react-bootstrap'
import './ImageModal.css'
function ImageModal(props) {
    console.log(props.show,props.handleClose)
  return (
    <Modal show={props.show} size="lg" onHide={props.handleClose}>
        <Modal.Header closeVariant='white' closeButton/>
        <Modal.Body  closeButton>
            <Image className='modalImg' loading='lazy' src={props.link}/>
        </Modal.Body>
      </Modal>

  )
}

export default ImageModal