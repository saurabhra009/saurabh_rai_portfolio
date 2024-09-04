import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_idqgvgm', 'template_ql45n6e', form.current, '4fEW9pRhVll9yfbe9')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <section id="contact" className="contact">
            <h2>Let's Connect</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" name="subject" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
