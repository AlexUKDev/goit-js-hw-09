
  const btnStartRef = document.querySelector("button[data-start]");
  const btnStopRef = document.querySelector("button[data-stop]");
  const bodyRef = document.querySelector('body');


  let intervalId = null;

  btnStartRef.addEventListener('click', onStartBtn);
  btnStopRef.addEventListener('click', onStopBtn);

  btnStopRef.setAttribute('disabled','disabled')

  function onStartBtn(){
    btnStartRef.setAttribute('disabled','disabled');
    btnStopRef.removeAttribute('disabled');

    intervalId = setInterval(changeBgColors, 1000);
  
  }

function changeBgColors(){
  let rendomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = rendomColor;
}

  function onStopBtn(){
    btnStopRef.setAttribute('disabled','disabled');
    btnStartRef.removeAttribute('disabled');
    clearInterval(intervalId);
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }