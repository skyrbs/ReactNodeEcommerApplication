import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import Toxicchemical from "../img/Toxic-chemical-triggers.jpg";
import ThyroidFoodTriggers from "../img/Thyroid-Food-Triggers.jpg";
import Itemeliminationtracker from "../img/Item-elimination-tracker.jpg";
import LiverScorecard from "../img/Liver-Function-Scorecard.jpg";
import resourcesstyle from "../resourcesstyle.css";
import tigger from '../img/Toxicchemicaltriggers.pdf';
import thyroid from '../img/ThyroidFoodTriggers.pdf';
import tracker from '../img/Itemeliminationtracker.pdf';
import liverfun from '../img/LiverFunctionScorecard.pdf';

const Resources = () => {

    const showSuccess = () => (
        <div className="container-fluid">
		<div>
         
<div className="fullpdfbox">
<h2>Toxic chemical triggers</h2>
<Link to={tigger} className="pdfimage" target="_blank" download>
<img src={Toxicchemical}  alt="Toxicchemicaltriggers" className="Toxic-chemical-triggers"/>
</Link>
<div className="pdfdownloadbox">
<Link to={tigger} target="_blank" download>
<button className="btn"><i className="fa fa-download"></i> Download Pdf</button>
</Link>
 </div>
</div>


<div className="fullpdfbox">
<h2>Thyroid Food Triggers</h2>
<Link to={thyroid} className="pdfimage" target="_blank" download>
<img src={ThyroidFoodTriggers}  alt="Thyroid-Food-Triggers" className="Thyroid-Food-Triggers"/>
</Link>
<div className="pdfdownloadbox">
<Link to={thyroid} target="_blank" download> 
<button className="btn"><i className="fa fa-download"></i> Download Pdf</button>
</Link>
 </div>
</div>


<div className="fullpdfbox">
<h2>Item elimination tracker</h2>
<Link to={tracker} className="pdfimage" target="_blank" download>
<img src={Itemeliminationtracker}  alt="Item-elimination-tracker" className="Item-elimination-tracker"/>
</Link>
<div className="pdfdownloadbox">
<Link to={tracker} target="_blank" download>
<button className="btn"><i className="fa fa-download"></i> Download Pdf</button>
</Link>
 </div>
</div>



<div className="fullpdfbox">
<h2>Liver Function Scorecard</h2>
		
<Link to={liverfun} className="pdfimage" target="_blank" download>

<img src={LiverScorecard}  alt="Liver-Scorecard" className="Liver-Scorecard"/>
</Link>
<div className="pdfdownloadbox">

 <Link to={liverfun} target="_blank" download>
<button className="btn"><i className="fa fa-download"></i> Download Pdf</button>
</Link>
 </div>
</div>
</div>

        </div>
    );

    return (
        <Layout
            title="Resources"
            description="HOW WE WORK"
            className="container col-md-12"
        >
            {showSuccess()}
        </Layout>
    );
};

export default Resources;
