import React, { useState } from 'react';
import { FaAws } from 'react-icons/fa';

function Form() {
  // Your web app's Firebase configuration

  // let firebase = 'https://www.gstatic.com/firebasejs/8.5.0/firebase.js';

  // var firebaseConfig = {
  //   apiKey: 'AIzaSyCcNKmXcY-3oyNihSCANvVbejhmla81FDI',
  //   authDomain: 'contactform-8f644.firebaseapp.com',
  //   databaseURL: 'https://contactform-8f644-default-rtdb.firebaseio.com',
  //   projectId: 'contactform-8f644',
  //   storageBucket: 'contactform-8f644.appspot.com',
  //   messagingSenderId: '969739600527',
  //   appId: '1:969739600527:web:96694ce4d855ce0cc6e6fa',
  // };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  //     --------------------------------------------------------------------------
  // Reference contactInfo collections
  // let contactInfo = firebase.database().ref('Information');

  //     --------------------------------------------------------------------------

  const [user, setUser] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, company, email, phone, message } = user;
    if (name && company && email && phone && message) {
      const res = await fetch(
        'https://contactform-8f644-default-rtdb.firebaseio.com/Information.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            company,
            email,
            phone,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });

        alert('Data Stored Successfully');
      }
    } else {
      alert('Please fill all the data');
    }
  };

  return (
    <section className='FormSection'>
      <div className='container'>
        <h1 className='brand'>
          <span>Registration Form</span>
        </h1>
        <div className='wrapper'>
          <div className='company-info'>
            <h3>Coding Session</h3>
            <ul>
              <li>
                <i className='fa fa-road'></i> 77 Something st
              </li>
              <li>
                <i className='fa fa-phone'></i> (000) 000-0000
              </li>
              <li>
                <i className='fa fa-envelope'></i> test@xyz.test
              </li>
            </ul>
          </div>
          <div className='contact'>
            <h2>Fill The Form</h2>
            <div className='alert'>Your message has been sent</div>
            <form method='POST' id='contactForm'>
              <p>
                <label>Name</label>
                <input
                  type='text'
                  name='name'
                  value={user.name}
                  onChange={getUserData}
                  id='name'
                  required
                />
              </p>
              <p>
                <label>Company</label>
                <input
                  type='text'
                  name='company'
                  value={user.company}
                  onChange={getUserData}
                  id='company'
                  required
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type='text'
                  name='email'
                  value={user.email}
                  onChange={getUserData}
                  id='email'
                  required
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  type='text'
                  name='phone'
                  value={user.phone}
                  onChange={getUserData}
                  id='phone'
                  required
                />
              </p>
              <p className='full'>
                <label>Message</label>
                <textarea
                  name='message'
                  value={user.message}
                  onChange={getUserData}
                  rows='5'
                  id='message'
                  required
                ></textarea>
              </p>
              <p className='full'>
                <button type='submit' onClick={postData}>
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className='infosResults'></div>
      </div>
    </section>
  );
}

export default Form;
