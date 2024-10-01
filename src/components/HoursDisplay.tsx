// src/components/HoursDisplay.tsx
import React from 'react';

interface HoursDisplayProps {
  regularHours: { [key: string]: string };
  specialHours: { hours: string }[];
}

const HoursDisplay: React.FC<HoursDisplayProps> = ({ regularHours, specialHours }) => {
  return (
    <div className="hours-section">
      {specialHours.length > 0 && (
        <>
          <h3 className="special-hours">Special Hours</h3>
          <p className="special-hours">{specialHours[0].hours}</p>
        </>
      )}
      <h3>Regular Hours</h3>
      <div className="hours-list">
        {Object.entries(regularHours).map(([day, hours]) => (
          <div key={day} className="hours-item">
            <h4>{day}</h4>
            <p>{hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoursDisplay;
