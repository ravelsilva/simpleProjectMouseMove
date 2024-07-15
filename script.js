const svg = document.querySelector("svg");
const body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
  //Adiciona o evento de movimento do mouse
  console.log(e.offsetX); //Verifica em que local horizontal está o mouse
  console.log("");
  console.log(e.offsetY); //Verifica em que local vertical está o mouse
  const xPos = e.offsetX; //Cria constante para a posição vertical do mouse
  const yPos = e.offsetY; //Cria constante para a posição horizontal do mouse

  svg.style.left = xPos + "px"; //Left do SVG = xPos do JS
  svg.style.top = yPos + "px"; //Top do SVG = yPos do JS
});
