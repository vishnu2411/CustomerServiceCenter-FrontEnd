import React from 'react';
import './App.css';
import HoursDisplay from './components/HoursDisplay';
import ContactOptions from './components/ContactOptions';

const App: React.FC = () => {
  const regularHours = {
    "Monday - Thursday": "8 am - 7:45 pm",
    "Friday": "9 am - 7:45 pm",
    "Saturday": "9 am - 5:45 pm",
    "Sunday": "9 am - 5:45 pm"
  };

  const specialHours = [
    { hours: "8:45 am - 7:45 pm" }
  ];

  return (
    <div className="App">
      <h1>Customer Service Hours</h1>
      <div className="container-box"> {/* New box for content */}
        <ContactOptions />
        <hr className="separator" />
        <HoursDisplay regularHours={regularHours} specialHours={specialHours} />
      </div>
    </div>
  );
};

export default App;
