import React from 'react';
import './App.css';
import HoursDisplay from './components/HoursDisplay';
import ContactOptions from './components/ContactOptions';

const App: React.FC = () => {
  const regularHours = {
    "Monday-Thursday": "8am ET - 7:45pm ET",
    "Friday": "9am ET - 7:45pm ET",
    "Saturday-Sunday": "9am ET - 5:45pm ET"
  };

  const specialHours = [
    { date: "2024-12-25", hours: "Closed" },
    { date: "2024-11-30", hours: "10am ET - 3pm ET" }
  ];

  return (
    <div className="App">
      <h1>Customer Service Hours</h1>
      <ContactOptions />
      <HoursDisplay regularHours={regularHours} specialHours={specialHours} />
    </div>
  );
};

export default App;
