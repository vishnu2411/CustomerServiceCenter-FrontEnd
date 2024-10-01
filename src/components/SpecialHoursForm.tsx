// src/components/SpecialHoursForm.tsx
import React, { useState } from 'react';

const SpecialHoursForm: React.FC<{ onSubmit: (hours: string) => void }> = ({ onSubmit }) => {
  const [hours, setHours] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hours) {
      onSubmit(hours);
      setHours(''); // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="special-hours-form">
      <h4>Add Special Hours</h4>
      <input
        type="text"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Enter special hours (e.g., 8:45 am - 7:45 pm)"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SpecialHoursForm;
