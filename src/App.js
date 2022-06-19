/** @format */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Component/body";
import Footer from "./Component/footer";
import Navbar from "./Component/navbar";
import "./style/index.scss";
import ArticleView from "./view/articel";
import { Home } from "./view/home";
import ProductView from "./view/product";
import AboutUsView from "./view/aboutUs";
import ContactView from "./view/contact";
import ReviewView from "./view/review";
import GalleryView from "./view/gallery";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="split-home">
				<Body />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<AboutUsView />} />
					<Route path="/visi-misi" element={<h3>Visi dan Misi</h3>} />
					<Route path="/product" element={<ProductView />} />
					<Route path="/artikel" element={<ArticleView />} />
					<Route path="/contact" element={<ContactView />} />
					<Route path="/review" element={<ReviewView />} />
					<Route path="/gallery" element={<GalleryView />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
