import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Anysideeffect = () => {

    const showSuccess = () => (
    <div>
<div className="container-fluid">
<div className="banner bandiabetes">
 <img src={howdoeswork}  alt="anysideffect" />
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>Any Side Effects?</b>
            </div>
            <div className="easypara">
            <p>There are no known side effects to eating healthy food. </p>
<p>There are no known medicine reactions to eating food.</p>
    <p>There are precautions of course, and we will discuss those with you during our patient intake 
process. 
</p>   
<p>We have seen additional benefits in people, including:</p>    
            <ul>
            <li>Reduction of sleep apnea   </li>
            <li>Increased Energy
</li>
            <li>Better Digestion
</li>
<li>Better Skin Glow
</li>
<li>Decrease in cravings of junk food</li>
            </ul>
          
            </div>
            </div>
            </div>
		</div>
    );

    return (
        <Layout
            title="Anysideeffect"
            description="HOW WE WORK"
            className="container col-md-12"
        ><div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );
};

export default Anysideeffect;
