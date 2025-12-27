const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  counter.value = count;
});

decrease.addEventListener("click", () => {
  count--;
  counter.value = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.value = count;
});

//Change color based on value
function updateColor() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
updateColor();
increase.addEventListener("click", updateColor);
decrease.addEventListener("click", updateColor);
reset.addEventListener("click", updateColor);

// mode toggle
const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  darkMode.style.display = "none";
  lightMode.style.display = "inline-block";
});

lightMode.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  lightMode.style.display = "none";
  darkMode.style.display = "inline-block";
});

//show the correct icon
if (document.body.classList.contains("dark-mode")) {
  darkMode.style.display = "none";
  lightMode.style.display = "inline-block";
} else {
  lightMode.style.display = "none";
  darkMode.style.display = "inline-block";
}
