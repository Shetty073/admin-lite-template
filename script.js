// Side navbar logic
const hamburger = document.querySelector(".toggle-btn");
const toggler = document.querySelector("#icon");

hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  toggler.classList.toggle("bx-chevrons-right");
  toggler.classList.toggle("bx-chevrons-left");
});

// Load theme from sessionStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = sessionStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});

// Theme toggle
document.querySelector("#switch-theme-button").addEventListener("click", function (e) {
  e.preventDefault();

  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  sessionStorage.setItem("theme", newTheme);

  const themeBtnIcon = document.querySelector("#switch-theme-button i");
  const themeBtnText = document.querySelector("#switch-theme-button span");
  
  if (newTheme === "dark") {
    themeBtnIcon.classList.replace("bx-moon", "bx-sun");
    themeBtnText.textContent = "Light Mode";
  } else {
    themeBtnIcon.classList.replace("bx-sun", "bx-moon");
    themeBtnText.textContent = "Dark Theme";
  }
});

// chart js code
new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: "#3e95cd",
        data: [133, 221, 783, 2478]
      }, {
        label: "Europe",
        backgroundColor: "#8e5ea2",
        data: [408, 547, 675, 734]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Population growth (millions)'
    }
  }
});
