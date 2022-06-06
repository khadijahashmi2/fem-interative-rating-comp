let ratings = document.querySelectorAll(".num");
let btn = document.getElementById("btn");
let evaluation = document.querySelector(".evaluation");
let thankyou = document.querySelector(".thankyou");
let span = document.getElementById("rating");
let rating;

for (let i = 0; i < ratings.length; i++) {
	ratings[i].addEventListener("click", () => {
		rating = ratings[i].innerHTML;

		for (let i = 0; i < ratings.length; i++) {
			ratings[i].classList.contains("selected");
			ratings[i].classList.remove("selected");
		}

		ratings[i].classList.add("selected");
	});
}

btn.addEventListener("click", () => {
	if (rating) {
		evaluation.style.display = "none";
		thankyou.style.display = "grid";
		span.innerHTML = rating;
	} else {
		alert("Please select a rating");
	}
});
