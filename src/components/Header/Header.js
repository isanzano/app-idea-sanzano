import React from "react";
import imgHeader from "../../assets/img/imgHeader.png";
import "./Header.css";
const Header = (props) => {
	return (
		<div style={{ backgroundColor: `${props.color}` }} className="Header">
			<img src={imgHeader} alt="imgHeader" className="Logo" />
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};

export default Header;
