import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGooglePlusG,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row mb-5">
                    <FooterCol key={1} menuTitle={" ."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul class=" social-media list-inline">
                            <li class="list-inline-item" > <a href="//facebook.com"> <FontAwesomeIcon className="icon active-icon" icon={faFacebookF}/> </a></li>
                            <li class="list-inline-item"> <a href="//google.com"> <FontAwesomeIcon className="icon" icon={faGooglePlusG}/> </a></li>
                            <li class="list-inline-item"> <a href="//instagram.com"> <FontAwesomeIcon className="icon " icon={faInstagram}/> </a></li>
                        </ul>
                        <div className="mt-4">
                            <h6> Call Now </h6>
                            <button > +2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p> Copyright {(new Date()).getFullYear()} All Rights Reserved </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;