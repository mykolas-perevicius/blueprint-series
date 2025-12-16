'use client';

import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-layout">
          <h2 className="faq-title">FAQ</h2>
          
          <div className="faq-items">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  {item.question}
                  <span className="faq-icon"></span>
                </button>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
