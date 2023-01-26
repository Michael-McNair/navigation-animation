const circle = document.querySelector('.circle');
const hitBoxes = document.querySelectorAll('.hit-box');
const container = document.querySelector('.container');

const circlePositions = [
  '20px',
  'calc(25% + 10px)',
  '50%',
  'calc(75% - 10px)',
  'calc(100% - 20px)',
];

hitBoxes.forEach((hitBox, index) => {
  const item = container.children[index];

  if (index === 0) {
    item.children[1].style.opacity = 1;

    item.children[0].style.transform = 'translate(0, -33px)';

    item.children[0].style.zIndex = 1;
  } else {
    item.children[1].style.opacity = 0;

    item.children[0].style.transform = 'translate(0, 0)';
  }
});

hitBoxes.forEach((hitBox) => {
  hitBox.addEventListener('click', (e) => {
    const clickedIndex = Number(hitBox.attributes.name.value);

    circle.style.left = circlePositions[clickedIndex];

    hitBoxes.forEach((hitBox, index) => {
      const item = container.children[index];

      if (index === clickedIndex) {
        item.children[1].style.opacity = 1;

        item.children[0].style.transform = 'translate(0, -33px)';

        item.children[0].style.zIndex = 1;
      } else {
        item.children[1].style.opacity = 0;

        item.children[0].style.transform = 'translate(0, 0)';
      }
    });
  });
});
