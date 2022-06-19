/** @format */

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { review } from "../data/review";
export default function Slider() {
	const Autoplay = withAutoplay(AwesomeSlider);
	return (
		<Autoplay
			organicArrows={false}
			bullets={true}
			play={true}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={2500}>
			{review.map(data => {
				return (
					<div
						style={{
							backgroundImage: "url(" + data.foto + ")",
							backgroundSize: "auto",
						}}>
						<div>{data.nama}</div>
						<div>{data.pesan}</div>
					</div>
				);
			})}
		</Autoplay>
	);
}
