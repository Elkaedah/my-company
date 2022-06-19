/** @format */

import React from "react";

export default function AboutUsView() {
	const margin = { marginBottom: "3%" };
	return (
		<div style={{ marginTop: "3%", marginRight: "5%" }}>
			{/* <img
				style={{
					maxWidth: "100% auto",
					height: "100vh",
					objectFit: "fill",
				}}
				src="https://images.unsplash.com/photo-1560744085-4b1a76def5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				alt=""
				srcset=""
			/> */}
			<div>
				<h1>Motor Club Indonesia</h1>
				<div style={margin}>
					Motor Club Indonesia adalah tempat penjualan motor terbesar di seluruh
					Indonesia. Kami memiliki berbagai model.
				</div>
				<div style={margin}>
					Kami berasal dari sebuah desa kecil tak bernama dengan menjualkan
					sebuah motor bekas. Pada tahun 1969, menjual berbagai merk dari kelas
					moge sampai mobek(motor bebek) sekarang kami menjual berbagai motor,
					sampai dengan motor custom
				</div>
				<div style={margin}>
					Kami menjual berbagai jenis motor dari motor classic tahun 90 an
					sampai keluaran baru yaitu motor honda supra
				</div>
			</div>
		</div>
	);
}
