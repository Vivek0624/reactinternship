import React from 'react';
import {
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const Event = () => {
  return (
    <article>
      <h3>
        THIS IS YOUR EVENT - <span>Manage Event</span>
      </h3>
      <h2>Coding session</h2>
      <h3 className='calender'>
        {' '}
        <FaRegCalendarAlt className='mainCalenderIcon' />
        Fri, 22 Jul, 8:00 PM - 9:30 PM IST
        <FaExclamationCircle className='calenderIcon' />
      </h3>
      <h4>
        <FaMapMarkerAlt /> Pune, Maharashtra, India
      </h4>
    </article>
  );
};

export default Event;
