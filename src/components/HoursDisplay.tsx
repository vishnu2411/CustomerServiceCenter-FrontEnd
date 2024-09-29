import React from 'react';

interface HoursDisplayProps {
  regularHours: { [key: string]: string };
  specialHours: { date: string; hours: string }[];
}

const HoursDisplay: React.FC<HoursDisplayProps> = ({ regularHours, specialHours }) => {
  return (
    <div>
      <h2>Availability Hours</h2>
      <h3>Regular Hours</h3>
      <ul>
        {Object.entries(regularHours).map(([day, hours]) => (
          <li key={day}>{day}: {hours}</li>
        ))}
      </ul>
      <h3>Special Hours</h3>
      <ul>
        {specialHours.map(({ date, hours }) => (
          <li key={date}>{date}: {hours}</li>
        ))}
      </ul>
    </div>
  );
};

export default HoursDisplay;
