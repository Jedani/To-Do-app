let light = document.getElementById("logo");
let body = document.body;

light.onclick = () => {
	if (body.classList == "dark") {
		body.classList.replace("dark", "light");
	} else if (body.classList == "light") {
		body.classList.replace("light", "dark");
	}
};
