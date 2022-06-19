/** @format */

import React from "react";
import { product } from "../data/product";
import { useLocation } from "react-router-dom";

export default function Product() {
	let location = useLocation();
	const Detail = (nama, harga) => {
		if (location.pathname === "/product") {
			return (
				<div style={{ marginLeft: "2%" }}>
					<h4>{nama}</h4>
					<h5>{harga}</h5>
				</div>
			);
		}
	};
	return (
		<div className="grid-card">
			{/* {console.log(location.pathname)} */}
			{product.map((data, index) => {
				return (
					<div className="card" onClick={() => console.log(index)}>
						<img
							style={{ width: "300px", height: "300px", objectFit: "fit" }}
							src={data.foto}
							alt=""
						/>
						{Detail(data.nama, data.harga)}
					</div>
				);
			})}
		</div>
	);
}
