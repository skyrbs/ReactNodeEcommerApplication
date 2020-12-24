import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CategoryMenu from "./CategoryMenu";
import "../styles.css";
{/* import HomeBanner from "./HomeBanner"; */}

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <CategoryMenu />
	<div className="pagefixedheight">
	<div className={className}>{children}</div>
	</div>
        <Footer />
   </div>
);

export default Layout;