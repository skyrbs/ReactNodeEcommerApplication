import React from "react";
import { Link, withRouter } from "react-router-dom";
import Untitled from '../img/Untitled-12.jpeg';
import curemydiabetesform from '../img/curemydiabetesform.jpg';
import CureMyDiabetes2 from '../img/Cure-My-Diabetes-2.jpg';
import CureMyDiabetes3 from '../img/Cure-My-Diabetes-3.jpg';
import CureMyDiabetes4 from '../img/Cure-My-Diabetes-4.jpg';
import CureMyDiabetes5 from '../img/Cure-My-Diabetes-5.jpg';
import CureMyDiabetes6 from '../img/Cure-My-Diabetes-6.jpg';
import CureMyDiabetes1 from '../img/Cure-My-Diabetes-1.jpg';
import CureMyDiabetes7 from '../img/Cure-My-Diabetes-7.jpg';
import HubspotForm from 'react-hubspot-form'


const HomeContent = () => (
<div className="banner bannerheight">
  <img src={Untitled}  alt="CureMyDiabetes" className="deskimg" />
  {/*<img src={curemydiabetesform}  alt="CureMyDiabetes" className="mobimg"/>*/}
     
  <div className="banner-form">
  <h2>learn about our innovative diabetes program</h2>
   <HubspotForm
     portalId='5359263'
     formId='1c6467c1-3ad3-4af1-819c-05dffadbaa22'
     onSubmit={() => console.log('Submit!')}
     onReady={(form) => console.log('Form ready!')}
     loading={<div>Loading...</div>}
    />
  </div>


  <div className="ourservices">
    <div className="sec-head"> our services </div>
    <div className="row services">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <div> <h2>Therapeutic Food</h2>
      <p>We take all the work and effort out of food. Just Open, heat and eat. All the food is delivered. The simplest easiest and most hassle free way to reduce weight and diabetes</p>
    </div>
    </div>
   
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div> <h2>Consulting</h2>
         <p>Learn our techniques and methodology in managing and reversing diabetes. 
         Recommended for people living far away or ending our subscription program.</p>
      </div>
      </div>
    </div>
  </div>

  <div className="whatweoffer">
      <div className="row ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="detail-txt">  <h4>What Is It?</h4> </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="detail-sec">
              <img src={CureMyDiabetes2}  alt="CureMyDiabetes"  />
          </div>
        </div>  
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div className="detail-sec">
            <div className="detail-txt">                        
              <p>It has now been proven that food can reverse diabetes. However making this food is very hard, time consuming.
                Simple, we take care of all the work, the planning and of course the scientific research to give you daily therapeutic meals.</p>
              <Link  to="/whatitis" >Learn More...  </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <div className="detail-sec">
              <video controls id="video" width="100%" height="100%" preload="auto" controlsList="nodownload" >
                <source src="" type="video/mp4" /> </video> 
            </div>
        </div>

    </div>

    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="detail-txt"> <h4>How Does It Work?</h4> </div>
      </div>
           
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">      
      <div className="detail-sec">
              <img src={CureMyDiabetes3}  alt="CureMyDiabetes"  />
          </div>
      </div>  

      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">      
        <div className="detail-sec">
          <div className="detail-txt"> 
            <p>All you have to do is eat!
              We do the planning, cooking and delivery of therapeutic meals. The food is delivered right to your doorstep. 
            </p>
            <Link  to="/howdoesitwork" >Learn More...  </Link>
          </div>
        </div>
      </div> 

      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">      
        <div className="detail-sec">
          <video controls id="video" width="100%" height="100%" preload="auto"    controlsList="nodownload" >
          <source src="" type="video/mp4" /> </video>           
        </div>
      </div>  
      
    </div>

    <div className="row "  >
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="detail-txt"> <h4>What will I get to eat?</h4> </div>
      </div>
                        
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">     
        <div className="detail-sec">
            <img src={CureMyDiabetes4}  alt="CureMyDiabetes"  />
        </div>
      </div> 

      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">     
        <div className="detail-sec">
          <div className="detail-txt">
            <p>We believe a person's identity is defined by their food. 
              So you will get things you normally eat, but cooked in our special, secret way. 
              You will get Mughlai, Chinese, Italian and homestyle Indian. 
              You will even get dessert</p>
              <Link  to="/anysideeffect" >Learn More...  </Link>
          </div>
        </div>
      </div>  
      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">     
        <div className="detail-sec">
             <video controls id="video" width="100%" height="100%"  preload="auto"   controlsList="nodownload" >
              <source src="" type="video/mp4" />
            </video>                                      
        </div>
      </div> 

    </div>

    <div className="row"  >
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="detail-txt"> <h4>How Long Does It Take?</h4>  </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">      
          <div className="detail-sec">
              <img src={CureMyDiabetes5}  alt="CureMyDiabetes"  />
          </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">      
        <div className="detail-sec">
          <div className="detail-txt">
            <p>It has now been proven that food can reverse diabetes. However making this food is very hard, time consuming.
              Simple, we take care of all the work, the planning and of course the scientific research </p>
                <Link  to="/howlongdoesittake" >Learn More...  </Link>
          </div>
        </div>
      </div>  

      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">      
        <div className="detail-sec">
         <video controls id="video" width="100%" height="100%" preload="auto"    controlsList="nodownload" >
          <source src="" type="video/mp4" />  </video>                                    
        </div>
      </div>  

    </div>

    <div className="row "  >
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="detail-txt" > <h4>What Happens At The End?</h4> </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">      
          <div className="detail-sec">
              <img src={CureMyDiabetes6}  alt="CureMyDiabetes"  />
          </div>
      </div> 
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">      
        <div className="detail-sec">
          <div className="detail-txt">
            <p>Cooking and eating to maintain your health is far easier. We will give you a program which can be achieved within a normal home's cooking possibilities and time.</p>
            <Link  to="/whathappenedatend" >Learn More...  </Link>
          </div>
        </div>
      </div>  

      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">      
        <div className="detail-sec">
          <video controls id="video" width="100%" height="100%" preload="auto" poster=""   controlsList="nodownload" >
          <source src="" type="video/mp4" /> </video>    
        </div>
      </div> 

    </div>

    <div className="row" >
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="detail-txt"> <h4>Is The Cure Permanent ?</h4> </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">      
        <div className="detail-sec">
          <img src={CureMyDiabetes1}  alt="CureMyDiabetes"  />
        </div>
      </div>  
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div className="detail-sec">
          <div className="detail-txt">
            <p>If you return to a non-diabetic state it means you are non diabetic. It means your body is able to control your sugar levels, and keep them within 70 - 140 range like a non-diabetic person.</p>
            <Link  to="/isthecurepermanent" >Learn More...  </Link>
          </div>
        </div>
      </div> 
      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">      <div className="detail-sec">
        <video controls id="video" width="100%" height="100%" preload="auto" poster=""   controlsList="nodownload" >
        <source src="" type="video/mp4" /> </video>  </div>
      </div>  

    </div>

    <div className="row "  >
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="detail-txt"> <h4>How Do I Start?</h4> </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">     
        <div className="detail-sec">
            <img src={CureMyDiabetes7}  alt="CureMyDiabetes"  />
        </div>
      </div> 
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">    
        <div className="detail-sec">
          <div className="detail-txt">
            <p>Starting is easy. We simply need to know your glucose levels and we can start. You can come in to our center or our dietician can come and visit you at home.</p>
            <Link  to="/howdoistart" >Learn More...  </Link>
          </div>
        </div>
      </div>  
      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">     
        <div className="detail-sec">
          <video controls id="video" width="100%" height="100%" preload="auto" poster=""   controlsList="nodownload">
              <source src="" type="video/mp4" />
          </video>                                     
      </div>
    </div> 
   </div>  

  </div>


  <div className="testimonial">
    <div className="sec-head">Testimonial</div>
    <iframe width="100%" height="515" src="https://www.youtube.com/embed/6MyMA3dDkLc"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  </div>




</div>
);

export default withRouter(HomeContent);
