import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import howpage from "../img/img-4755-1_1_orig.jpg";
const How = () => {

    const showSuccess = () => (

		<div>
		<div id="wsite-content" className="wsite-elements wsite-not-footer">
	<div className="wsite-section-wrap">
	<div className="wsite-section wsite-body-section wsite-background-2">
		<div className="wsite-section-content">
          <div className="container">
			<div className="wsite-section-elements">
            
            <h1 className="arial default-transform large">
		The Cure My Diabetes Program : How The Diabetes Reversal Program Works
		</h1>

<div className="wsite-spacer"></div>

<div className="wsite-multicol">
		<div className="wsite-multicol-table-wrap">
	<table className="wsite-multicol-table">
		<tbody className="wsite-multicol-tbody">
			<tr className="wsite-multicol-tr">
				<td className="wsite-multicol-col wsite-left">
					
						

<h2 className="wsite-content-title">How We Work</h2>

<div className="paragraph">
		We provide customized food delivered to your home, in subscription packages.
		<p>
		The food is customized around you and our focus is to bring the desired changes to the HbA1c and weight loss that you need. This is individualized based on your starting parameters and needs.
		</p>
		<span>Our food research is centered around reversing diabetes but all of these diseases are related and people will get relief in:
		</span>
		<ul>
		<li><span> Diabetes</span></li>
		<li>Blood Pressure</li>
		<li>Obesity</li>
		<li>Heart Disease</li>
		<li>High Cholesterol</li>
		<li>Many other chronic degenerative diseases.</li>
		</ul>
		
		</div>
</td>				
		<td className="wsite-multicol-col wsiteright">
					
						


		<div className="wsite-image wsite-image-border-none">

  <img src={howpage}  alt="howpage" className="howpageimage"/>

<div className="afterimg">
		Kale, Bell Pepper &amp; Tofu Salad With Nutri-Boost Dressing
		</div>
</div>
	
<h2 className="wsite-content-title">Mission</h2>

<div className="paragraph">
<p>To help the body need a minimum amount of medicines and have maximum immunity.
</p>
</div>

<h2 className="wsite-content-title">Vision</h2>

<div className="paragraph">
<p>A world where more people eat well and have minimum chronic diseases and better quality life</p>
</div>


					
				</td>		
		</tr>
		</tbody>
	</table>
</div>
		</div>
		
		
<div className="whiteer"></div>
<hr className="styled-hr" />
<div className="whiteer"></div>

<div className="wsite-multicol">
		<div className="wsite-multicol-table-wrap">
	<table className="wsite-multicol-table">
		<tbody className="wsite-multicol-tbody">
			<tr className="wsite-multicol-tr">
				<td className="wsite-multicol-col wsiteleft">
					
						

<h2 className="wsite-content-title">
		
		<span className="fontcolorwhat">WHAT WE DO:&nbsp;</span>
		</h2>

<div className="paragraph">
		<p>We give customized food to patients of chronic diseases to help their body need a minimum amount of medicines and have maximum immunity &amp; vitality</p>
		</div>


					
				</td>	
		<td className="wsite-multicol-col wsiteleft">
					
						

<h2 className="wsite-content-title"><span className="fontcolorwhat">HOW DO WE DO:&nbsp;
		</span>
		</h2>

<div className="paragraph">
		<p>We provide food ideal for your health needs delivered with the maximum convenience
		</p>
		</div>


					
				</td>			
		<td className="wsite-multicol-col wsiteleft">
					
						

<h2 className="wsite-content-title">
		<span className="fontcolorwhat">WHY DO WE DO:&nbsp;
		</span>
		</h2>

<div className="paragraph">
		<p>We have family members and friends with chronic diseases. This journey is to maximize their health, lengthen their life, and along the way to help others just like ourselves
		</p>
		</div>


					
				</td>		
		</tr>
		</tbody>
	</table>
</div>
</div>


</div>
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
        ><div className="main-container">
		
            {showSuccess()}

</div>        </Layout>
    );
};

export default How;
