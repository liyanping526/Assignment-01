
function setup(){
	img = loadImage("sky1.png");
}
function draw(){
	image(img, 0, 0, img.width/2, img.height/2);
}
/*
	get the answer to the first question
*/

// get the user submit button
// const q1Btn = document.getElementById('qOneBtn');

// // when the user clicks, read their answer
// q1Btn.onclick = function() {
// 	const answer = document.getElementById('scary').value;

// 	if (answer == "Clowns") {
// 		document.body.style.backgroundImage = "url(clowns.png)"

// 	} else if (answer == "Heights") {
// 		document.body.style.backgroundImage = "url(heights.jpg)"

// 	} else if (answer == "Spiders") {
// 		document.body.style.backgroundImage = "url(spiders.jpg)"

// 	} else if (answer == "Demons") {
// 		document.body.style.backgroundImage = "url(demons.jpg)"

// 	} else if(answer == "Cats") {
// 		document.body.style.backgroundImage = "url(cat.jpg)"

// 	} 
	
// };
const q2Btn = document.getElementById('qTwoBtn');

// when the user clicks, read their answer
q2Btn.onclick = function() {
	const answer = document.getElementById('spiders').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(spiders.jpg)"

	} else if (answer == "No") {
		document.getElementById('qThree').style.display = "block"
		document.getElementById('qTwo').style.display = "none"
		
	} 
	
};
const q3Btn = document.getElementById('qThreeBtn');

// when the user clicks, read their answer
q3Btn.onclick = function() {
	const answer = document.getElementById('Clowns').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(clowns.png)"

	} else if (answer == "No") {
		document.getElementById('qFour').style.display = "block"
		document.getElementById('qThree').style.display = "none"
	} 
	
};
const q4Btn = document.getElementById('qFourBtn');

// when the user clicks, read their answer
q4Btn.onclick = function() {
	const answer = document.getElementById('Heights').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(heights.jpg)"

	} else if (answer == "No") {
		document.getElementById('qFive').style.display = "block"
		document.getElementById('qFour').style.display = "none"

	} 
	
};
const q5Btn = document.getElementById('qFiveBtn');

// when the user clicks, read their answer
q5Btn.onclick = function() {
	const answer = document.getElementById('Demons').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(demons.jpg)"

	} else if (answer == "No") {
		document.getElementById('qSix').style.display = "block"
		document.getElementById('qFive').style.display = "none"
	} 
	
};
const q6Btn = document.getElementById('qSixBtn');

// when the user clicks, read their answer
q6Btn.onclick = function() {
	const answer = document.getElementById('Cats').value;
	
	const message = document.createElement("p");
	document.body.appendChild(message);

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(cat.jpg)"

	} else if (answer == "No") {
		message.textContent = "What is your favorite animal?";
		document.getElementById('qSix').style.display = "none"

	} 
	
};
























