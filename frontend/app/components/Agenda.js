'use client';

import { useState } from 'react';

export default function Agenda({ data }) {
  const [activeDay, setActiveDay] = useState(data.days[0]?.id || 'day-one');

  return (
    <section id="agenda" className="agenda">
      <div className="container">
        <h2 className="section-title">Agenda</h2>
        
        <div className="day-tabs">
          {data.days.map((day) => (
            <button
              key={day.id}
              className={`day-tab ${activeDay === day.id ? 'active' : ''}`}
              onClick={() => setActiveDay(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>
        
        <div className="agenda-items">
          {data.items.map((item, index) => (
            <div key={index} className="agenda-item">
              <div>
                <p className="agenda-time">{item.time}</p>
                <h3 className="agenda-title">{item.title}</h3>
              </div>
              <p className="agenda-description">{item.description}</p>
              <p className="agenda-location">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
