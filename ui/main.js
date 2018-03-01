console.log('Loaded!');
alert('Hello Welcome To My WEBAPP');

//change the txext
var element =document.getElementById('main-text')
;
element.innerHTML ="New Value";

//mmove image

var img = document.getElementById('abc');
var marginLeft =0;
function moveRight(){
      marginLeft=marginLeft +1;
      img.style.marginLeft =marginLeft +"px";
}
img.onclick =function () {
    var interval =setInterval(moveRight,50);
};