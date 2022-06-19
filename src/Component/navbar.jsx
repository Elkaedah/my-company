/** @format */

import React from "react";

import { Link } from "react-router-dom";
import LogoPng from "../assets/picture/logo.png";
export default function Navbar() {
	const logo = LogoPng;

	return (
		<div className="fixed">
			<div className="navbar">
				<img src={logo} alt="Perusahaan Logo" className="logo" />
				<h1>Motor Club Indonesia</h1>
			</div>

			<div className="navbar-link">
				<Link to="/">Home</Link>
				<Link to="/Profile">Profile</Link>
				<Link to="/Visi-misi">Visi dan misi</Link>
				<Link to="/product">Produk Kami</Link>
				<Link to="/contact">Kontak Kami</Link>
				<Link to="/about">About Us</Link>
			</div>
		</div>
	);
}
