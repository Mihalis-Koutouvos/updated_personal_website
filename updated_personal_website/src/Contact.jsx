import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='contact' id='contact'>
        <div className='container'>
        
            <div className='text-section'>
                <h2>Contact:</h2>
                <span className='highlight-line'></span>
                
                <section className='contact-form'> 
                  <form>
                    <h2>Contact Form:</h2>
                    <div className='input-box'>
                      <label>Full Name:</label>
                      <input type='text' className='field' placeholder='Please enter your full name: ' required/>
                    </div>

                    <div className='input-box'>
                      <label>Email Address:</label>
                      <input type='email' className='field' placeholder='Please enter your email address: ' required/>
                    </div>

                    <div className='input-box'>
                      <label>Message Content:</label>
                      <textarea name="" id="" className='field message' placeholder="Please enter your message: " required></textarea>
                    </div>

                    <button type='submit'>Send Message</button>
                  </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Contact