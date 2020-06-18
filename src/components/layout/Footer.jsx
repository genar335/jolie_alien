import React from 'react';
import { Link } from 'react-router-dom';
import '../layoutStyles/Footer.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer(props) {

    return(
        <div className="footer-container">
            <div className="contacts-container">
                <p className="contactInfo">+7(916)1234567</p>
                <p className="contactInfo">please@help.me</p>
            </div>
            <button id="subscribeBtn">subscribe for more</button>
            <div className="icons-container">
                <Link to="/insta" className="social-media-icons">
                    <InstagramIcon 
                        style={{
                            width: "3rem",
                            height: "3rem"
                        }}
                    />
                </Link>
                <Link to="/twitter" className="social-media-icons">
                    <TwitterIcon
                    style={{
                        width: "3rem",
                        height: "3rem"
                    }} />
                </Link>
                <Link to="/facebook" className="social-media-icons">
                    <FacebookIcon
                    style={{
                        width: "3rem",
                        height: "3rem"
                    }} />
                </Link>
            </div>
        </div>
    );

}

export default Footer;