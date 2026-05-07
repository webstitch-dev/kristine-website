import '../styles/Contact.css';
import emailjs, { send } from '@emailjs/browser';
import {useState, useRef} from 'react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef(null); 

    const sendEmails = (e) => {
        e.preventDefault();
      
        //send email to kristine
        emailjs.sendForm(
        //   'service_6mjsmhn',
        //   'template_q8lhcgq',
          form.current,
        //   'KKC9Gvu4hrfwlZbHq'
        ).then((result) => {
            console.log('Email was received:', result.text);
            setIsSubmitted(true);
            setErrorMessage('');
            e.target.reset();
        }).catch((error) => {
            console.error('Error:', error.text);
            setIsSubmitted(false);
            setErrorMessage('Oops! Something went wrong. Please try again.');
        });

        //send confirmation email to sender
        emailjs.sendForm(
        //   'service_6mjsmhn',
        //   'template_n0n8wnb',
          form.current,
        //   'KKC9Gvu4hrfwlZbHq'
        ).then(() => {
          console.log('Confirmation email sent to their inbox');
        }).catch((error) => {
          console.error('Error:', error);
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <p id="header-left">Let's</p>
                <p id="header-right">Align</p>
            </div>
            <form className="form-container" ref={form} onSubmit={sendEmails}>
                <p id="form-title">contact kristine</p>
                <p id="form-subtitle">Please reach out with any questions or comments you might have! 
                Feedback is always welcome!</p>

                <div className="contact-fields">
                    <div className="field">
                        <label htmlFor="fullName">Full Name:</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            name="fullName" 
                            placeholder="Jane Doe"
                            required 
                        />
                    </div>
                    
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="jane@email.com"
                            required 
                        />
                    </div>
                   
                    <div className="field message-field">
                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="What's on your mind?"
                            rows="6"
                            required 
                        />
                    </div>

                    <button className="submit-btn" type="submit">Send</button>

                    {isSubmitted && <p className="success-msg">Message sent successfully!</p>}
                    {errorMessage && <p className="error-msg">{errorMessage}</p>}
                    
                </div> 
            </form>
        </div>
    )
}

export default Contact;