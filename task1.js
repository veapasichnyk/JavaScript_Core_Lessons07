function fillListItems() {
	let elements = document.querySelectorAll("li");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "some text " + (i + 1);
	}

    let numberOfItems = elements.length;
	alert ("Було заповнено " + numberOfItems + " елементів списку!");
}

