import React from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    const serviceId = 'service_ss6cnuh';
    const templateId = 'template_97ph0sa';
    const formInput = e.target;
    const userId = 'user_1px9QOird60YWESRvJcx3';

    emailjs
      .sendForm(serviceId, templateId, formInput, userId)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='contact-section'>
      <h1 className='section-title'>Get in touch</h1>

      <Form id='contact-form' className='contact-form' onSubmit={sendEmail}>
        <Form.Group className='form-group'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='user_name' placeholder='Your name' />
        </Form.Group>
        <Form.Group controlId='formBasicEmail' className='form-group'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='user_email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted' style={{ textAlign: 'center' }}>
            I'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            name='message'
            as='textarea'
            placeholder='Nice website.'
            rows={3}
          />
        </Form.Group>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ justifyContent: 'center' }}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
