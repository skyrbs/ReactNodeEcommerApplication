import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../img/logo.png';


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#c31f41" };
    } else {
        return { color: "#000000" };
    }
};

const CategoryMenu = ({ history }) => (
	<section id="myHeaderhead" fixed="top" >
	  	
   
	
    <div className="container-fluid">

                <Link
                    className="logonav"
                    style={isActive(history, "/")}
                    to="/">
                    <img src={logo}  alt="CureMyDiabetes" />
                </Link>
            
        <ul className="nav nav-tabs categorymenu">
            
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/menuorder">
                    Menu & Ordering
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/pricing">
                    Pricing
                </Link>
            </li>
<div className="dropdownmenu">
				<Link to="javascript:void(0)" className="dropbtn">Dietician</Link>
				<div className="dropdown-content">
				  <span className="dropdown-submenu"><Link to="heal/index">All Orders</Link>
				  <div className="dropdown-menu"><Link to="heal/index/printall">Print All</Link>
				  </div>
		          </span>		
				  <Link to="heal/index/qty">Qty Order Report</Link>
				  <Link to="heal/index/qtydetails">Qty Details Report</Link>
				  <Link to="heal/index/mealdetails">Meal Details Report</Link>
				  <Link to="heal/index/creport">Customer Report</Link>
				  <Link to="setmenuorder">Set/Unset Menu</Link>	
       
				</div>
        </div>
			
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/contacts">
                    Contact Us
                </Link>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="https://www.diabetesandobesityblog.com/" target="_blank">
                   Blog
                </a>
            </li>  

			
        </ul>
    </div>

</section>
);

export default withRouter(CategoryMenu);

