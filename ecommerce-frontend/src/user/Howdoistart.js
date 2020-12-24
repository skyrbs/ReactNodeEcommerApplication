import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Howdoistart = () => {

    const showSuccess = () => (
     <div>
<div className="container-fluid">
<div className="banner bandiabetes">
  <img src={howdoeswork}  alt="Howdoistart" />
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>How Do I Start?</b>
            </div>
            <div className="easypara">
            <p>Starting works as follows :</p>
     
            <ul>
            <li><b>MEET OUR DIETICIAN:</b> You can come in to our center or our dietician can come and visit you at 
      home. We will learn about your medical history and what are typical problems for you. We will 
      also note your weight, HBA1c and other important details.
            </li>
            <li>
          <b>INSTALL GLUCOSE MONITORING CHIP:</b> This chip is installed on you to get a closer look at how 
      your body's sugar moves during the day. This data is collected for 48-72 hours and reviewed 
      before starting the delivery program. 
            </li>
            <li><b>DOCTOR REVIEW:</b> The doctor will review your glucose levels and your current medications. Any 
      medication changes will be advised by the doctor. 
</li>
<li><b>FOOD DELIVERY BEGINS:</b> Food delivery begins. We work with you to understand your tastes 
      and preferences. So far everyone has complained that there is too much food and they cannot 
      finish it.</li>
      <li><b>GLUCOSE LEVEL REVIEW AND MEDICINE ADJUSTMENT:</b> We review how the food is impacting 
      your blood glucose levels and the doctor adjusts medication accordingly. We keep reviewing 
      your glucose levels and weight to ensure we keep moving forward.</li>
            </ul>
           
            </div>
            </div>
            </div>
		</div>
    );

    return (
        <Layout
            title="Howdoistart"
            description="HOW WE WORK"
            className="container col-md-12"
        ><div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );
};

export default Howdoistart;
