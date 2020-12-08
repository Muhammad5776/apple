function imgSlider (anything){
  document.querySelector('.boxTwo-img').src = anything;
}
function cricleChangeColor(color){
  const circle = document.querySelector ('.boxTwo-img');
  circle.style.background = color;
}
function changeTitleColor (color){
  const boxOneTitle = document.querySelector ('.boxOne-title');
  boxOneTitle.style.color = color;
}
function changeSubtitleColor (color ){
  const boxOneSubtitle = document.querySelector ('.boxOne-subtitle');
  boxOneSubtitle.style.color = color;
}
function changeButtonColor (color ){
  const boxOneBtn = document.querySelector ('.boxOne-btn');
  boxOneBtn.style.border.color = color;
}