import React from 'react';
import { Phone, Sms, Chat, Mail } from '@mui/icons-material';

const ContactOptions: React.FC = () => {
  return (
    <div className="contact-options">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="profile-photo"
      />
      <h3>Contact Us</h3>
      <div className="options">
        <div className="option">
          <Phone />
          <span>Call</span>
        </div>
        <div className="option">
          <Sms />
          <span>Text</span>
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
    </div>
  );
};

export default ContactOptions;
