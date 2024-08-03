import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { send } from 'emailjs-com';

const Contact = () => {
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
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <Formik
                
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validate={validate}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    phone: Yup.string()
                        .required('Required'),
                    message: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
                    let toSend = {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        message: values.message
                    };
                
                    send(
                        'service_h76664b',
                        'template_mteu13p',
                        toSend, 
                        'CPpHbv60cnqfo0ARK'
//                         REACT_APP_SERVICE_ID=service_h76664b
// REACT_APP_TEMPLATE_ID=template_mteu13p
// REACT_APP_USER_ID=CPpHbv60cnqfo0ARK
                    )
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setStatus({ success: true });
                        setSubmitting(false);
                        resetForm();
                    })
                    .catch((err) => {
                        console.log('FAILED...', err);
                        setStatus({ success: false });
                        setSubmitting(false);
                    });
                }}
            >
                {({ status, isValid, isSubmitting }) => (
                <Form >
                    <div className='icon-position'> <FontAwesomeIcon icon={faUser} className="mr-2" /> <label className="text-" htmlFor="name">Name</label></div>
                    
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <div className='icon-position'> <FontAwesomeIcon icon={faEnvelope} className="mr-2" />  <label htmlFor="email">Email</label></div>
                    
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />

                    <div className='icon-position'> <FontAwesomeIcon icon={faPhone} className="mr-2" /> <label htmlFor="phone">Phone</label> </div>
                    
                    <Field name="phone" type="text" />
                    <ErrorMessage name="phone" />

                    <div className='icon-position'> <FontAwesomeIcon icon={faComment} className="mr-2" /> <label htmlFor="message">Message</label> </div>
                    
                    <Field name="message" as="textarea" />
                    <ErrorMessage name="message" />

                    <button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
                    {status && status.success && <div>Form submitted successfully!</div>}
                    {status && !status.success && <div>Form submission failed.</div>}   
                </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;