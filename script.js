let isDarkTheme = false;
const ref = document.body.style;
const changeVars = ["bg", "pattern", "card-bg", "text", "titles", "toggle"];
const $button = document.getElementById("button");

$button.addEventListener("click", () => {
  $button.classList.toggle("active");
  if (isDarkTheme) {
    changeVars.forEach((element) => {
      ref.setProperty(`--${element}`, `var(--${element}-light)`);
    });
    isDarkTheme = false;
  } else {
    changeVars.forEach((element) => {
      ref.setProperty(`--${element}`, `var(--${element}-dark)`);
    });
    isDarkTheme = true;
  }
});
