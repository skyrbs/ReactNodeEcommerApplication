import React from "react";
import { Link, withRouter } from "react-router-dom";
import email from '../img/email.png';
import fb from '../img/fb.png';
import linkedin from '../img/linkedin.png';
import pt from '../img/pt.png';
import twitter from '../img/twitter.png';
import yt from '../img/yt.png';



const FooterMenu = () => (
    <div className="container-fluid">
    <div className="footer-container">
    <div className="row pt-3 pb-3 Footerbotton" >  
    <div className="FooterCopyLeft">
        <Link to="/how" className="copyleftText"> How </Link> 
        <Link to="/pricing" className="copyleftText"> Pricing </Link> 
        <Link to="/menuorder" className="copyleftText"> Menu </Link> 
        <Link to="/resources" className="copyleftText"> Resources </Link> 
        <a href="https://www.diabetesandobesityblog.com/recipes" target="_blank" className="copyleftText"> Recipies </a> 
        <Link to="/questions" className="copyleftText"> Questions </Link> 
        <Link to="/disclaimer" className="copyleftText"> Disclaimer </Link> 
        <Link to="/contacts" className="copyleftText"> Contact Us </Link>
    </div>
    <div className="FooterCopyRight">
        <a href="https://www.facebook.com/diobesity" target="_blank" className="copyrightText"> <img src={fb}  alt="Facebook" /> </a> 
        <a href="https://www.youtube.com/channel/UCrocY4uHeWsxtnM_JpbxBVA" target="_blank" className="copyrightText"> <img src={yt}  alt="Pintrest" /> </a> 
        <a href="https://www.instagram.com/curemydiabetes/" target="_blank" className="copyrightText"> <img src={pt}  alt="instagram" /> </a> 
        <a href="https://www.linkedin.com/in/junior-gupta-1a43a84/" target="_blank" className="copyrightText"> <img src={linkedin}  alt="Linkedin" /> </a> 
        <a href="https://twitter.com/JGupta_me" target="_blank" className="copyrightText"> <img src={twitter}  alt="Twitter" /> </a> 
        <a href="/" target="_blank" className="copyrightText"> <img src={email}  alt="Email" /> </a>
    </div>
    </div>
    </div>
	</div>
);

export default withRouter(FooterMenu);
