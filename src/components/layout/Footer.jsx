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
                <p className="contactInfo">phone nr</p>
                <p className="contactInfo">e-mail</p>
            </div>
            <button id="subscribeBtn">subscribe for more</button>
            <div className="icons-container">
                <InstagramIcon
                    id="instagramIcon"
                />
                <TwitterIcon
                    id="twitterIcon"
                />
                <FacebookIcon
                    id="facebookIcon"
                />
            </div>
        </div>
    )

}

export default Footer;