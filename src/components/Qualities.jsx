import React from "react";
import "../css/Qualities.css"; 

const calitati = [
    {
      titlu: "Profesionalism",
      emoji: "💼",
      text: "Oferim servicii realizate la cele mai înalte standarde."
    },
    {
      titlu: "Promptitudine",
      emoji: "⚡",
      text: "Răspundem rapid și respectăm termenele stabilite."
    },
    {
      titlu: "Flexibilitate",
      emoji: "🤝",
      text: "Ne adaptăm nevoilor fiecărui client."
    }
  ];

  function Calitati() {
   return (
   <section className="calitati-section">
        <h2>De ce să ne alegi</h2>

        <div className="calitati-container">
          {calitati.map((item, index) => (
            <div key={index} className="calitate-card">
              <div className="emoji">{item.emoji}</div>
              <h3>{item.titlu}</h3>
              <h5>{item.text}</h5>
            </div>
          ))}
        </div>
      </section>
    );
    }

export default Calitati;