import React from 'react';
import { Phone, Sms, Chat, Mail } from '@mui/icons-material';

const ContactOptions: React.FC = () => {
  return (
    <div className="contact-options">
        <img
        src="https://static.vecteezy.com/system/resources/previews/014/873/884/original/customer-service-icon-call-center-icon-design-illustration-customer-service-icon-simple-and-modern-flat-symbol-vector.jpg"
        alt="Profile"
        className="profile-photo"
      />
        <div className="header-section">
        <h3>Questions?</h3>
        <p>We are operating in special hours today</p>
        <hr className="separator" />
        <h4>Contact Us</h4>
        </div>
      
      
      <div className="options">
        <div className="option">
          <Phone />
          <span>
            (123) 456-7890
          </span>
        </div>
        <div className="option">
          <Sms />
          <span>(123) 456-7891</span>
        </div>
        <div className="option">
          <Chat />
          <span>Live Chat</span>
        </div>
        <div className="option">
          <Mail />
          <span>Email</span>
        </div>
      </div>
      <hr className="separator" />
    </div>
    
  );
};

export default ContactOptions;
