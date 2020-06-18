import React from 'react';
import './componentStyles/Contact.scss';

function Contact(props) {

    //possibly a contact form? (name, email, age of child, some info)
    
    return(
        <div id="contact-container">
            <svg id="big-light-red-circle" width="340" height="340" >
                <circle 
                    cx="170"
                    cy="170" 
                    r="170" 
                    stroke="none" 
                    fill="red"
                    id="css-circle-red" />
            </svg>
            <svg id="big-light-green-circle" width="300" height="300" >
                <circle 
                    cx="150"
                    cy="150" 
                    r="150" 
                    stroke="none" 
                    fill="green"
                    id="css-circle-green" />
            </svg>
            <div className="contact-info">
                <a href='tel: +37120201960'>+371 20201960</a>
                <a href="mailto: abc@example.com">Email: abc@example.com</a>
            </div>
            <svg id="big-light-grey-circle" width="200" height="200" >
                <circle 
                    cx="100"
                    cy="100" 
                    r="100" 
                    stroke="none" 
                    fill="grey"
                    id="css-circle-grey" />
            </svg>
        </div>
    );
}

export default Contact;