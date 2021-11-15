let light = document.getElementById("logo");
let body = document.body;

light.onclick = () => {
	if (body.classList == "dark") {
		body.classList.replace("dark", "light");
	} else if (body.classList == "light") {
		body.classList.replace("light", "dark");
	}
};

const form = document.querySelector(".todoItem");
const submit = document.getElementById("submit");
const clear = document.getElementById("xlogo");
const check = document.getElementById("check");
const input = document.getElementById("createToDo");
const container = document.querySelector(".topTwo");
const containerOne = document.querySelector(".secondContainer");
const list = document.querySelector(".list");

// edit options
let editing = false;

form.addEventListener("submit", function addItem(ev) {
	ev.preventDefault();

	const item = input.value;
	const id = new Date().getTime().toString();
	if (item && !editing) {
		const element = document.createElement("div");
		element.classList.add("topTwo");
		const attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);

		element.innerHTML = `<div class="iconOne">
		<div class="line">
			<a id="check"></a>
		</div>
		</div>
		<div class="content">
			<p class="contentP">${item}</p>
		</div>
		<div class="icon">
			<a id="xlogo"></a>
		</div>`;
		list.appendChild(element);
		containerOne.classList.add("topShow");

		setDefautlt();
	} else if (item && editing) {
		console.log("not true");
	} else {
		console.log("empty");
	}
});

function setDefautlt() {
	input.value = "";
	editing = false;
}
