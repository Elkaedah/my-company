/** @format */

import React from "react";
import News from "../Component/news";
import Product from "../Component/product";
import Slider from "../Component/slider";

export function Home() {
	return (
		<div>
			<Slider />
			<div style={{ margin: "0% 2%" }}>
				<h1 style={{ marginTop: "3%" }}>Product</h1>
				<Product />
			</div>
			<div style={{ margin: "0% 2%" }}>
				<h1 style={{ marginTop: "3%" }}>Article</h1>
				<News />
			</div>
		</div>
	);
}
