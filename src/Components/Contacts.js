import React from "react";
import "../Styles/Contacts.css";
import contact from '../contact.jpg';
const Contacts = () => {
  const contacts = [
    { name: "herry", imgSrc: contact },
    { name: "siyamadit", imgSrc: contact },
    { name: "Claire", imgSrc: contact},
  ];

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h3>15 Contacts</h3>
        <div className="icons">
          <button className="filter-btn">🔍</button>
          <button className="help-btn">?</button>
        </div>
        <button className="new-contact-btn">+ New Contact</button>
      </div>

      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <div className="contact-item" key={index}>
            <div className="contact-img">
              {contact.imgSrc ? (
                <img src={contact.imgSrc} alt={contact.name} />
              ) : (
                <div className="default-img">🖼</div>
              )}
            </div>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>

      <div className="show-all">
        <button>Show All</button>
      </div>
    </div>
  );
};

export default Contacts;
