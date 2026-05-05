import '../styles/Contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-header">
                <p id="header-left">Let's</p>
                <p id="header-right">Align</p>
            </div>
            <div className="form-container">
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
                    
                </div> 
                </div>
                
        </div>
    )
}

export default Contact;