import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Whathappenedatend = () => {

    const showSuccess = () => (
        <div>
<div className="container-fluid">
<div className="banner bandiabetes">
 <img src={howdoeswork}  alt="Whathappenedatend"/>
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>What Happens At End?</b>
            </div>
            <div className="easypara">
            <p>At the end of the program you will return to your home food.
</p>
<p>Let us explain.

</p>
   
            <p><b>THERE IS A DIFFERENCE BETWEEN THE REVERSAL FOODS AND THE MAINTENANCE FOODS.</b>
Cooking and eating to maintain your health is far easier. We will give you a program which can 
be achieved within a normal home's cooking possibilities and time. What we cook in our kitchen 
is very hard to do in a home setting. It takes many many professional chefs, it takes special 
equipment and special training.</p>
            <p>At home you will not have so much time, your chefs might leave and you will have new chefs. So 
we will leave you with a health maintenance plan. You will yourself be so aware of new foods and 
new items to eat that it will become easy to maintain a healthy lifestyle.
</p>
<p>Just the reversal diet is close to impossible to do at home. The maintenance diet is not as hard.</p>
            </div>
            </div>
            </div>
		</div>
    );

    return (
        <Layout
            title="Whathappenedatend"
            description="HOW WE WORK"
            className="container col-md-12"
        ><div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );
};

export default Whathappenedatend;
