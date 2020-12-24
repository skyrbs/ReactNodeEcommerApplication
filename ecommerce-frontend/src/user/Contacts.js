import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import contactform from "../img/contact-us-banner.jpg";
import HubspotForm from 'react-hubspot-form'
import Layout from "../core/Layout";

const Contact = () => {

    const showSuccess = () => (
        <div className="container-fluid">
          
		<div className="contactformbanner contactform">
    <img src={contactform}  alt="contactform" className="contactform"/>
    <div className="contactformleft col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <h1>Reverse Diabetes</h1>
    <h3>Learn About Nutrition Science And Reversing Diabetes</h3>
</div>
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 classleft">
<div className="page-title">
    <h1>Contact Us</h1>
    <p>Please fill out the details and briefly tell us how we can help you in the comments section below.</p>
      <HubspotForm
     portalId='5359263'
     formId='f90f53b5-7377-42c8-b334-36efe83f5727'
     onSubmit={() => console.log('Submit!')}
     onReady={(form) => console.log('Form ready!')}
     loading={<div>Loading...</div>}
    />
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 classleft">

<h2 className="wsite-content-title">EMAIL ADDRESS</h2>

<div className="paragraph"><Link to="mailto:Team@CureMyDiabetes.com" target="_top">Team@CureMyDiabetes.com</Link></div>

<h2 className="wsite-content-title">TELEPHONE NUMBER</h2>

<div className="paragraph"><Link to="tel:+91-9999-84-6622">+91-9999-84-6622</Link></div>

<h2 className="wsite-content-title">PHYSICAL ADDRESS</h2>

<div className="paragraph">JMD Regent Arcade, 3rd Floor<br/>MG Road,Gurgaon,<br/> HR 122 002</div>

    <div className="contactform"> 
            <div className="mapouter">
			  <div className="gmap_canvas">
			  <iframe width="600" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=curemydiabetes&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
			  <a href="https://www.emojilib.com"></a>
			  </div>
			  </div>
    </div>
</div>
			  </div>
		
			  </div>
		
  
);

    return (
        <Layout
            title="How"
            description="HOW WE WORK"
            className="container col-md-12"
        >
            {showSuccess()}
        </Layout>
    );
};


export default Contact;
