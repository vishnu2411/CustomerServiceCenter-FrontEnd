import React, { useState } from 'react';
import './App.css';
import HoursDisplay from './components/HoursDisplay';
import ContactOptions from './components/ContactOptions';
import SpecialHoursForm from './components/SpecialHoursForm';
import { regularHours, specialHours as initialSpecialHours } from './data';

const App: React.FC = () => {
  const [specialHours, setSpecialHours] = useState(initialSpecialHours);

  const handleAddSpecialHours = (newHours: string) => {
    setSpecialHours([...specialHours, { hours: newHours }]);
  };

  return (
    <div className="App">
      <div className="outer-container">
        <ContactOptions />
        <SpecialHoursForm onSubmit={handleAddSpecialHours} />
        <HoursDisplay regularHours={regularHours} specialHours={specialHours} />
      </div>
    </div>
  );
};

export default App;
