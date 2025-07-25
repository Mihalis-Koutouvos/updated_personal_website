import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "65f640ce-98d1-438d-bdde-ee695aef08a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks for the message!",
        text: "You successfully sent a message to Mihalis!",
        icon: "success"
});
    }
  };


  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='contact' id='contact'>
        <div className='container'>
        
            <div className='text-section'>
                <h2>Contact:</h2>
                <span className='highlight-line'></span>
                
                <section className='contact-form'> 
                  <form onSubmit={onSubmit}>
                    <h2>Contact Form:</h2>
                    <div className='input-box'>
                      <label>Full Name:</label>
                      <input type='text' className='field' placeholder='Please enter your full name: ' name='name' required/>
                    </div>

                    <div className='input-box'>
                      <label>Email Address:</label>
                      <input type='email' className='field' placeholder='Please enter your email address: ' name='email' required/>
                    </div>

                    <div className='input-box'>
                      <label>Message Content:</label>
                      <textarea name="message" className='field message' placeholder="Please enter your message: " required></textarea>
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