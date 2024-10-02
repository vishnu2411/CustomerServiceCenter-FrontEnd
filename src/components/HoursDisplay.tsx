
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
          {specialHours.map((special, index) => (
            <p key={index} className="special-hours">{special.hours}</p>
          ))}
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
