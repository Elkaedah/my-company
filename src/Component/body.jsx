/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { checkUser } from "../logic/login";

export default function Body() {
	// const [visible, setVisible] = useState(false);

	return (
		<div className="slide-navbar-link">
			<ul>
				<li>
					<Link to="/artikel">Artikel</Link>
				</li>
				<li>
					<Link to="">Event</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery Foto</Link>
				</li>
				<li>
					<Link to="/review">Klien Kami</Link>
				</li>
				<li>{login()}</li>
			</ul>
		</div>
	);
}

const login = () => {
	const avaible = checkUser();
	//console.log(avaible);
	if (avaible) {
		return <Link to="/">Login</Link>;
	} else {
		return <Link to="/">Login</Link>;
	}
};
