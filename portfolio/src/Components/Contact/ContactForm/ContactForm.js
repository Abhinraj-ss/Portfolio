import React,{useState} from 'react'
import { Card,Form,Button, Image , Alert} from 'react-bootstrap'
import {IoSend,IoCheckmarkDoneSharp} from 'react-icons/io5'
import emailjs from '@emailjs/browser';

import messageLogo from '../../../assets/images/message.svg'
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
          sendEmail(event)
        }
        setValidated(true);
      }
      const sendEmail = (e) => {
        e.preventDefault();
        console.log(e)
         emailjs.sendForm('service_tiw9p62', 'template_yqqlnkt', e.target, 'dW1sG2gZRY9izbKN2')
          .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
        setSubmit(true)
        setTimeout(() => {
            document.getElementById("contact").reset();
            setValidated(false);
            setSubmit(false)
          }, 5000);
      };
      
      
      const handleClearForm = () =>{
        document.getElementById("contact").reset();
        setValidated(false);
        setSubmit(false)
      }
      
  return (
    <div className="contactForm">
        {submit&&
            <Alert  variant='success' onClose={handleClearForm} dismissible>
                I will reach you out soon!
            </Alert>
        }
        <Card>
            <Card.Title>
                Get In Touch
            </Card.Title>
            <div className='cardContent'>
                <div>
                    <Image
                    alt='message'
                    id='messageLogo'
                    loading='lazy'
                    src={messageLogo}/>
                </div>
                <div className='cForm'>
                    <Form id='contact' noValidate validated={validated} onSubmit={handleValidate}>
                        <Form.Group className='my-0'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
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
                                name='email'
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
                            name='message'
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
                            {
                            submit &&
                            <>
                            Success&nbsp;
                            <IoCheckmarkDoneSharp/>
                            </>
                            }
                            {
                            !submit &&
                                <>
                                    Send Message&nbsp;
                                    <IoSend/>
                                </>
                            }
                            </Button>
                    </Form>
                </div>
            </div>
        
        </Card>
    </div>
    
  )
}

export default ContactForm