import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Howdoesitwork = () => {

    const showSuccess = () => (
		<div>
<div className="container-fluid">
<div className="banner bandiabetes">
   <img src={howdoeswork}  alt="howdoeswork" />
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>How Does It Work?</b>
            </div>
            <div className="easypara">
            <p>All you have to do is eat!</p>
<p>We do the planning, cooking and delivery of therapeutic meals. The food is delivered right to your 
doorstep.</p>
    <p>It is 24 hrs of food. It will reach before 7 pm and will include :</p>       
            <ul>
            <li>Dinner
            </li>
            <li>
         Next Day's Breakfast
            </li>
            <li>Next Days's Lunch
</li>
<li>Next Day's High Tea</li>
            </ul>
            <p>The food is packed in reusable glass jars. The driver will come back next day and deliver more 
food and pick up the old used glass jars. This is repeated everyday till you have hit your targeted 
health goals.</p>
            <p>In case of travel you can cancel your food delivery one day prior. There is no cancellation charge.</p>
            <p>You can cancel your subscription any time and get reimbursed for unused days of food. However 
any free services or add-ons which are included with a monthly package are charged if the whole 
month's subscription is not completed. Please see pricing page for more details.</p>
            </div>
            </div>
		</div>
            
	</div>	
    );

    return (
        <Layout
            title="Howdoesitwork"
            description="HOW WE WORK"
            className="container col-md-12">
		<div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );

};

export default Howdoesitwork;
