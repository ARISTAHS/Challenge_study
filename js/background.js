const images = [
  "01.png",
  "02.png",
  "03.png"
];

const body = document.querySelector('body');

function background(){
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = `url('./img/${chosenImage}')`;
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundSize = 'cover';
}
background();
setInterval(background,5000);


