const navigation = {
    button: document.querySelector(".navigation__burger"),
    bars: document.querySelectorAll(".bars"),
    background: document.querySelector(".navigation__background"),
    options: document.querySelector(".navigation__options"),
    optionsItems: document.querySelectorAll(".navigation__options li")
}

navigation.button.addEventListener("click", () => {
  // Change to 'X'
  navigation.bars[0].classList.toggle("bars-toggled--top");
  navigation.bars[1].classList.toggle("bars-toggled--middle");
  navigation.bars[2].classList.toggle("bars-toggled--bottom");
  navigation.button.classList.toggle("navigation__burger--active");

  // Show
  navigation.background.classList.toggle("navigation__background--active");
  navigation.options.classList.toggle("navigation__options--active");
});


navigation.optionsItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Change to burger
    navigation.bars[0].classList.remove("bars-toggled--top");
    navigation.bars[1].classList.remove("bars-toggled--middle");
    navigation.bars[2].classList.remove("bars-toggled--bottom");
    navigation.button.classList.remove("navigation__burger--active");

    // Hide
    navigation.background.classList.remove("navigation__background--active");
    navigation.options.classList.remove("navigation__options--active");
  });
});
