import React,{useState} from 'react'
import { Card,Col,Form,Button, Row, Image } from 'react-bootstrap'
import {IoSend} from 'react-icons/io5'

import messageLogo from '../../../assets/images/message.png'
import './ContactForm.css'

function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [submit,setSubmit] =useState(false)
    const handleValidate =(event) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
          event.preventDefault();
          event.stopPropagation();
          handleSubmit()
        }
        setValidated(true);
      }
    const handleSubmit =()=>{

    }
  return (
    <div className="contactForm">
        <Card>
            <Card.Title>
                Get In Touch
            </Card.Title>
            <Row>
                <Col>
                    <Image
                    alt='message'
                    id='messageLogo'
                    loading='lazy'
                    src={messageLogo}/>
                </Col>
                <Col className='cForm'>
                    <Form noValidate validated={validated} onSubmit={handleValidate}>
                        <Form.Group className='my-0'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Name"
                                type="text"
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Name is a required field.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='my-0'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                placeholder="Email"
                                type="email"
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='my-0'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                            as="textarea" 
                            placeholder="Message"
                            type="text"
                            required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Message is a required field.
                            </Form.Control.Feedback>
                        </Form.Group>
                            <Button
                            type="submit"
                            variant="success"
                            size="lg"
                            > 
                            Send Message&nbsp;
                            {
                            submit &&
                            <IoSend/>
                            }
                            {
                            !submit &&
                            <IoSend/>
                            }
                            </Button>
                    </Form>
                </Col>
            </Row>
        
        </Card>
    </div>
  )
}

export default ContactForm