`use-strict`;
//selecting elements
const icons = Array.from(document.querySelectorAll(`i`));
const iconsText = document.querySelector(`.text--icons`);

//href location

const formatText = function (word) {
  let formatted = word[0].toUpperCase() + word.slice(1);
  return formatted;
};

const iconChanger = function (element) {
  element.forEach(function (curr) {
    curr.addEventListener(`click`, function (e) {
      e.preventDefault();

      curr.classList.add(`forwards`);
      curr.style.left = `5%`;
      curr.style.top = `5%`;
      iconsText.style.visibility = `visible`;

      // curr.style.left = `45%`;
      // curr.style.top = `10%`;
      // iconsText.style.visibility = `hidden`;
    });
  });
};

iconChanger(icons);

//db
iconChanger(icons);
