import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'form_info',
        'template_hw7fiag',
        e.target,
        'user_yaQZnFEtASnkWMuFPLp64'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className='container'>
      <h1 className='brand'>
        <span>Acme</span> Web Design
      </h1>
      <div className='wrapper animated bounceInLeft'>
        <div className='company-info'>
          <h3>Hamid Goudarzi</h3>
          <ul>
            <li>
              <i className='fa fa-road'></i> Montreal, QC
            </li>
            <li>
              <i className='fa fa-phone'></i> (032) 345-8905
            </li>
            <li>
              <i className='fa fa-envelope'></i> hamid@gmail.test
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h3>Email Us</h3>
          <form onSubmit={handleSubmit}>
            <p>
              <label>First Name</label>
              <input type='text' name='name' />
            </p>
            <p>
              <label>Last Name</label>
              <input type='text' name='family' />
            </p>
            <p>
              <label>Address</label>
              <input type='address' name='address' />
            </p>
            <p>
              <label>Phone Number</label>
              <input type='text' name='phone' />
            </p>
            <p className='full'>
              <label>Message</label>
              <textarea name='message' rows='5'></textarea>
            </p>
            <p className='full'>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
