import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import disclaimer from "../img/disclaimer.jpg";
const Disclaimer = () => {

    const showSuccess = () => (
        <div className="container-fluid">
          <div>
		

<div className="banner bandiabetes">
  <img src={disclaimer} alt="disclaimer"/>
</div>


<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              DISCLAIMER
            </div>
            <div className="easyway">
            <p>Please Note:</p>
           <p>Results vary from person to person.</p>
           <p>No results are guaranteed.</p>
           <p>Generally, the sooner a diabetic comes to us, the better the chances for best results. 
           At very late stages all we can aim to do is to reduce the damage from the disease. However this varies from person to person.</p>

          <br/>
          
          <p>We do not promise to cure any disease, only to help in the goal to be healthier.</p>
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
		<div className="main-container">
            {showSuccess()}
       </div>
		   </Layout>
    );
};

export default Disclaimer;
