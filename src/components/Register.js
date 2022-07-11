import React from 'react';
import { FaCheckCircle, FaEnvelope, FaRegShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='register-section'>
      <div className='registration-main'>
        <h2>Registration</h2>
        <p>
          Hello! Please register below. You will be able to join the event when
          the host approves your registration
        </p>

        <div className='topReg-container'>
          <div className='mainReg-container'>
            <div className='main-img'>
              <img src='img/led-1.png' alt='' />
            </div>
            <div className='main-text'>
              <h3>Pushpak Hurpade</h3>
              <p>pushpak.developer@gmail.com</p>
            </div>
          </div>

          <Link className='Btn' to='/Form'>
            <h4>
              <FaCheckCircle /> Register
            </h4>
          </Link>
        </div>
      </div>

      <div className='registration-details'>
        <div className='secondReg-container'>
          <div className='second-img'>
            <img src='img/led-1.png' alt='' />
          </div>
          <div className='second-text'>
            <h3>Pushpak Hurp...</h3>
            <p>Host</p>
          </div>
        </div>

        <a className='mainLink' href='#'>
          <h4>
            <FaEnvelope /> contact the host
          </h4>
        </a>
        <hr />
        <h2 className='locationMain'>Location</h2>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.379491888632!2d73.86398651436859!3d18.511745374276707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041da6f339b%3A0x22faf47eb93683fa!2sNana%20Peth%20Rd%2C%20New%20Nana%20Peth%2C%20Ganj%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1657468739197!5m2!1sen!2sin'
            width='300'
            height='250'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <h4 className='locationDetail'>Pune, Maharashtra, India</h4>

        <hr />

        <div className='eventDetails'>
          <h3>
            <FaRegShareSquare className='shareEventicon' /> Share This Event
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Register;
