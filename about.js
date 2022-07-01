console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been successfully submitted.");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function compliment(event) {
	event.preventDefault();

	alert("You are full of potential!");
}

let picture = document.querySelector("img");
picture.addEventListener("mouseover", compliment)