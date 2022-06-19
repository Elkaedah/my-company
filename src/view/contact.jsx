/** @format */

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactView() {
	const margin = { marginBottom: "3%" };
	const { register, handleSubmit } = useForm();
	return (
		<div style={{ marginTop: "3%", marginRight: "5%" }}>
			<h1>Kontak Kami</h1>
			<div>Jl. Bandung bekasi no.32, Sunda</div>
			<div>081332160311</div>
			<div>motorclub.id@gmail.com</div>
			<form
				onSubmit={handleSubmit(data => {
					console.log(data);
				})}
				style={{
					display: "grid",
					justifyItems: "baseline",
					alignItems: "center",
				}}>
				<label style={margin}>Kirim pesan </label>
				<label style={margin}>
					<input
						type="text"
						{...register("name")}
						name="name"
						placeholder="nama"
					/>
				</label>
				<label style={margin}>
					<input
						type="text"
						{...register("massage")}
						name="massage"
						placeholder="pesan"
					/>
				</label>
				<input type="submit" value="Kirim" />
			</form>
		</div>
	);
}
