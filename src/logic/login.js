/** @format */

const login = (username, password) => {
	if (username === "admin" && password === "admin") {
		localStorage.setItem("user", username);
		localStorage.setItem("pass", password);
		return true;
	} else return false;
};

const checkUser = () => {
	const user = localStorage.getItem("user");
	const pass = localStorage.getItem("pass");

	if (user === "admin" && pass === "admin") return true;
	else return false;
};

module.exports = {
	login: login,
	checkUser: checkUser,
};
