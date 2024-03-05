let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.getElementById("theme-toggle");
let svgElements = [].slice.call(document.getElementsByTagName("svg")).filter(element => ![].slice.call(element.classList).includes("social-icon"));

const enableDarkMode = () => {
  document.body.classList.add("dark");
  svgElements.forEach(element => element.querySelector("path").setAttribute("fill", "#fbfbfe"));
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  svgElements.forEach(element => element.querySelector("path").setAttribute("fill", "#010104"));
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
