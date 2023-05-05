const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

btnOne.addEventListener("click", getMarried);
btnTwo.addEventListener("click", moveToCity)

function getMarried() {
  image.setAttribute("src", "./images/choice-1.jpg");
  text.innerHTML = "Yes, they would get married in the next year";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}
function moveToCity(){
	image.setAttribute("src", "/images/choice-2.jpg");
  text.innerHTML = "No, they would move to the city";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}
