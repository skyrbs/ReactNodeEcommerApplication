import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howdoeswork from "../img/HT-Diabetes-1280x640.jpg";
const Isthecurepermanent = () => {

    const showSuccess = () => (
		<div>
  
<div className="container-fluid">
<div className="banner bandiabetes">
  <img src={howdoeswork}  alt="Isthecurepermanent" />
</div>
</div>

<div className="padd-10">
        <div className="container-fluid">
            <div className="sec-start-head">
              <b>Is The Cure Permanent?</b>
            </div>
            <div className="easypara">
            <p>If you return to a non-diabetic state it means you are non diabetic. It means your body is able to 
control your sugar levels, and keep them within 70 - 140 range like a non-diabetic person.
</p>
<p>However if you return to doing the things which made you diabetic before, you will likely return to 
being diabetic again.

</p>
    <p>We will make you healthy and teach you how to stay healthy. The rest will depend on you.</p>       
           
            </div>
            </div>
            </div>
		</div>
    );

    return (
        <Layout
            title="Isthecurepermanent"
            description="HOW WE WORK"
            className="container col-md-12"
        ><div className="main-container">
            {showSuccess()}
</div>
        </Layout>
    );
};

export default Isthecurepermanent;
