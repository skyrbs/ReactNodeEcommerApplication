import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import pricingimage from "../img/pricingbanner.jpg";
const How = () => {

    const showSuccess = () => (
		<div>
          <div className="container-fluid">
  
     

<div className="w3-content">
  <img src={pricingimage}  alt="Diabetes" className="pricingimage"/>
  <div className="w3-panel">

<h1><b>PRICING</b></h1>
</div>
<div className="table-responsive">
<table className="table table-striped hover">
 <thead> 
<tr>		
    <th></th>
    <th><h4>WEEKLY</h4></th>
    <th><h4>MONTHLY</h4></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colSpan="3"><h4>DISEASE REMISSION PROGRAMS</h4></td>   
  </tr>
  <tr>
    <td><b>CURE MY DIABETES</b></td>
    <td><b>10,500</b></td>
    <td><b>42,000</b></td>
  </tr>
  <tr>
    <td><b>FIX MY FAT</b></td>
    <td><b>8,000</b></td>
    <td><b>32,000</b></td>
  </tr>
  <tr>
    <td colSpan="3">INCLUDES : ALL CONSULTING, MEALS,<br/> 
	<span>TESTS & SENSORS
	(IN CMD PROGRAM ONLY)</span></td>
    
  </tr>
  <tr>
    <td colSpan="3">3-5 MONTHS IS EXPECTED TIME</td>
      </tr>
  
  <tr>
    <td colSpan="3"><h4>WEIGHT LOSS SUPPORT</h4></td>
    
  </tr>
  <tr>
    <td><b>METABOLIC BOOSTER</b></td>
    <td><b>3,750</b></td>
    <td><b>15,000</b></td>
  </tr>
  <tr>
    <td><b>HEALTH MATE</b></td>
    <td><b>3,250</b></td>
    <td><b>13,000</b></td>
  </tr>
  <tr>
    <td colSpan="3">THE ABOVE 2 PROGRAMS INCLUDE:</td>
   
  </tr>
  <tr>
    <td colSpan="3">15 MIN/WEEK CONSULTING AND FOOD</td>
   
  </tr>
   <tr>
    <td colSpan="3"><h4>CONSULTING</h4></td>
   
  </tr>
  <tr>
    <td><b>CHIEF RESEARCH OFFICER</b></td>
    <td><b></b></td>
    <td><b>8,500</b></td>
  </tr>
  <tr>
    <td><b>SENIOR DIETICIAN</b></td>
    <td><b></b></td>
    <td><b>5,000</b></td>
  </tr>
  <tr>
    <td><b>15 MIN/PER WEEK WITH WEB PORTAL</b></td>
    <td></td>
    <td><b>3,000</b></td>
  </tr>
  <tr>
    <td><b>METABOLICDASHBOARD</b></td>
    <td></td>
    <td><b>FREE</b></td>
  </tr>
	</tbody>
</table>
</div>
		</div>
</div>
	</div>
    );

    return (
        <Layout
            title="How"
            description="HOW WE WORK"
            className="container col-md-12">
		<div className="main-container">
            {showSuccess()}
        </div>
        </Layout>
    );
};

export default How;
