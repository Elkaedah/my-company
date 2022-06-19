/** @format */

import React from "react";
import { article } from "../data/article";

export default function News() {
	return (
		<div className="grid-news">
			{article.map((data, index) => {
				return (
					<div
						className="news-path"
						onClick={() => {
							console.log(index);
						}}>
						<img
							src="https://images.unsplash.com/photo-1594634932563-cb50acd10766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							alt=""
							style={{
								width: "75px",
								height: "75px",
							}}
						/>
						<div style={{ marginLeft: "1%" }}>
							<h5>{data.judul}</h5>
							<h6>{data.date}</h6>
						</div>
					</div>
				);
			})}
		</div>
	);
}
