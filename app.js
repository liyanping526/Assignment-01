/*
	get the answer to the first question
*/

// get the user submit button
const q1Btn = document.getElementById('qOneBtn');

// when the user clicks, read their answer
q1Btn.onclick = function() {
	const answer = document.getElementById('scary').value;

	if (answer == "Clowns") {
		document.body.style.backgroundImage = "url(clowns.png)"

	} else if (answer == "Heights") {
		document.body.style.backgroundImage = "url(heights.jpg)"

	} else if (answer == "Spiders") {
		document.body.style.backgroundImage = "url(spides.jpg)"

	} else if (answer == "Demons") {
		document.body.style.backgroundImage = "url(demons.jpg)"

	} else if(answer == "Cats") {
		document.body.style.backgroundImage = "url(cat.jpg)"

	} 
	
};





















