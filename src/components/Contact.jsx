import React from 'react';
import './componentStyles/Contact.scss';

function Contact(props) {

    //possibly a contact form? (name, email, age of child, some info)
    
    return(
        <div id="contact-container">
            <svg id="big-light-red-circle" width="320" height="320" >
                <circle 
                    cx="160"
                    cy="160" 
                    r="160" 
                    stroke="none" 
                    fill="red"
                    id="css-circle-red" />
            </svg>
            <svg id="big-light-green-circle" width="260" height="260" >
                <circle 
                    cx="130"
                    cy="130" 
                    r="130" 
                    stroke="none" 
                    fill="green"
                    id="css-circle-green" />
            </svg>
            <div className="contact-info">
                <a href='tel: +37120201960'>+371 20201960</a>
                <a href="mailto: abc@example.com">Email: abc@example.com</a>
            </div>
            <svg id="big-light-grey-circle" width="160" height="160" >
                <circle 
                    cx="80"
                    cy="80" 
                    r="80" 
                    stroke="none" 
                    fill="grey"
                    id="css-circle-grey" />
            </svg>
        </div>
    );
}

export default Contact;