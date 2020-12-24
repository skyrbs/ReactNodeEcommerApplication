import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Whatitis = () => {

    const showSuccess = () => (
   <div>
<div className="container-fluid">
<div className="banner bandiabetes">
  <img src={howdoeswork}  alt="whatisit" />
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>What Is It ?</b>
            </div>
            <div className="easypara">
            <p>It has now been proven that food can reverse diabetes. However making this food is very hard, time 
consuming. </p>
<p>Simple, we take care of all the work, the planning and of course the scientific research to give you 
daily therapeutic meals.
</p>
    <p>These meals are customized to your medical needs, for example :</p>       
            <ul>
            <li>Some Diabetics Are Not Obese and Actually Need To Gain Weight
            </li>
            <li>
          Some Diabetics Have Kidney Diseases
            </li>
            <li>Some Diabetics Are Heart Patients
</li>
<li>Some Diabetics Are Pregnant</li>
            </ul>
            <p>These meals are then planned under the medical supervision of an endocrinologist.</p>
            <p>Medications are usually lowered within 12 hours and we have seen in many cases that insulin use 
has dropped 75% within 4 days of starting our program.</p>
            </div>
            </div>
            </div>
		</div>
    );

    return (
        <Layout
            title="Whatitis"
            description="HOW WE WORK"
            className="container col-md-12">
		<div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );
};

export default Whatitis;
