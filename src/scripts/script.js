const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomColorBtn = document.querySelector('.randomColorBtn');
const gradColors = document.querySelector('.getGradientColor');
const bodyBcg = document.querySelector('body');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
const bg4 = document.querySelector('.bg4');
const bg5 = document.querySelector('.bg5');

randomColorBtn.addEventListener('click',getHex);
gradColors.addEventListener('click',getGradientColor);
function getHex (){

    let hexCol = '#';
    let hexCol2 = '#';
    let hexCol3 = '#';
    let hexCol4 = '#';
    let hexCol5 = '#';
    
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol2 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol3 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol4 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol5 +=hexNumbers[random];
      }
    bg1.style.background = hexCol;
    bg2.style.background = hexCol2;
    bg3.style.background = hexCol3;
    bg4.style.background = hexCol4;
    bg5.style.background = hexCol5;
    bg1.innerHTML = hexCol;
    bg2.innerHTML = hexCol2;
    bg3.innerHTML = hexCol3;
    bg4.innerHTML = hexCol4;
    bg5.innerHTML = hexCol5;
  }

 function getGradientColor() {
    let randDegree = Math.floor(Math.random() * 365) + 1 ;
    let randDegree2 = Math.floor(Math.random() * 365) + 1 ;
    let randDegree3 = Math.floor(Math.random() * 365) + 1 ;
    let randDegree4 = Math.floor(Math.random() * 365) + 1 ;
    let randDegree5 = Math.floor(Math.random() * 365) + 1 ;
    let randPercentage = Math.floor(Math.random() * 10) + 1;
    let randPercentage2 = Math.floor(Math.random() * 10) + 1;
    let randPercentage3 = Math.floor(Math.random() * 10) + 1;
    let randPercentage4 = Math.floor(Math.random() * 10) + 3;
    let randPercentage5 = Math.floor(Math.random() * 10) + 3;
    console.log(randDegree, randDegree2,randDegree3, randDegree4)
    let hexCol1 = '#';
    let hexCol2 = '#';
    let hexCol3 = '#';
    let hexCol4 = '#';
    let hexCol5 = '#';
    let hexCol6 = '#';
    let hexCol7 = '#';
    let hexCol8 = '#';
    let hexCol9 = '#';
    let hexCol10 = '#';
    
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol1 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol2 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol3 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol4 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol5 +=hexNumbers[random];
      }
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol6 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
      let random = Math.floor(Math.random()*hexNumbers.length)
      hexCol7 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol8 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol9 +=hexNumbers[random];
    }
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol10 +=hexNumbers[random];
      }
      bg1.style.backgroundImage = 'linear-gradient('+randDegree+'deg,'+ ' ' + hexCol1 + ' ' + randPercentage+'%' + ',' + hexCol6 + ' ' + '74%)'
      bg2.style.backgroundImage = 'linear-gradient('+randDegree2+'deg,'+ ' ' + hexCol2 + ' ' + randPercentage2+'%' + ',' + hexCol7 + ' ' +'74%)'
      bg3.style.backgroundImage = 'linear-gradient('+randDegree3+'deg,'+ ' ' + hexCol3 + ' ' + randPercentage3+'%' + ',' + hexCol8 + ' ' + '74%)'
      bg4.style.backgroundImage = 'linear-gradient('+randDegree4+'deg,'+ ' ' + hexCol4 + ' ' + randPercentage4+'%' + ',' + hexCol9 + ' ' + '74%)'
      bg5.style.backgroundImage = 'linear-gradient('+randDegree5+'deg,'+ ' ' + hexCol5 + ' ' + randPercentage5+'%' + ',' + hexCol10 + ' ' + '74%)'
      // console.log(hexCol);
      bg1.innerHTML = hexCol1 + ' -> ' + hexCol6;
      bg2.innerHTML = hexCol2 + ' -> ' + hexCol7;
      bg3.innerHTML = hexCol3 + ' -> ' + hexCol8;
      bg4.innerHTML = hexCol4 + ' -> ' + hexCol9;
      bg5.innerHTML = hexCol5 + ' -> ' + hexCol10;

 }