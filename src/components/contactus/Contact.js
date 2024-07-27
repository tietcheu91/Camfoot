import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useFormik } from 'formik';
import { send } from 'emailjs-com';
import './Contact.css';

/**
 * Renders a contact form with fields for name, email, phone, and message.
 * @returns {JSX.Element} The rendered contact form.
 */
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    /**
     * Handles form submission by logging the form data to the console.
     * @param {Event} event - The form submission event.
     */
    const validate = (values) => {
        const errors = {}
        
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        
        return errors
    }

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
        let toSend = {
            name: name,
            email: email,
            phone: phone,
            message: message
          };

        send(
            'service_vf6p3fs',
            'template_74etbt6',
            toSend, 
            'W5GDqXCv90Wj_43rK'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    };

    const isFormValid = () => {
        return name && email && phone && message;
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="full-contact">
                    <Label for="name">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Name
                    </Label>
                    <Input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup className="full-contact">
                    <Label for="email">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                    </Label>
                    <Input type="email" name="email" id="email" value={email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Enter your email" required />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
                </FormGroup>
                <FormGroup className="full-contact">
                    <Label for="phone">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Phone
                    </Label>
                    <Input type="number" name="phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Enter your phone number" />
                </FormGroup >
                <FormGroup className="full-contact">
                    <Label for="message">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />
                        Message
                    </Label>
                    <Input type="textarea" name="message" id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your message" required />
                </FormGroup>
                <Button color="primary" type="submit" disabled={!isFormValid()} >Submit</Button>
                {isSubmitted && <p className='contact_text'>Thank you for contacting us, we will get back to you as soon as possible!</p>}
            </Form>
        </div>
    );
}

export default Contact;