window.onload = function(){
	let wrapper = document.querySelector('.wrapper'),
		layerOne = document.querySelector('.layer-1'),
		layerTwo = document.querySelector('.layer-2');
		layerFour = document.querySelector('.layer-4');
		layerFive = document.querySelector('.layer-5');
		layerThree = document.querySelector('.layer-3');
		layerSix = document.querySelector('.layer-6');
		layerSeven = document.querySelector('.layer-7');
		layerEight = document.querySelector('.layer-8');
		layerNine = document.querySelector('.layer-9');

	wrapper.addEventListener('mousemove',function(e){
		let pageX = e.clientX,
			pageY = e.clientY;
		layerOne.style.webkitTransform = 'translateX(' + pageX/-750 + '%) translateY(' + pageY/-120 + '%)';
  		layerOne.style.transform = 'translateX(' + pageX/-750 + '%) translateY(' + pageY/-120 + '%)';
  		layerTwo.style.webkitTransform = 'translateX(' + pageX/-4500 + '%) translateY(' + pageY/-4500 + '%)';
  		layerTwo.style.transform = 'translateX(' + pageX/-4500 + '%) translateY(' + pageY/-4500 + '%)';
		layerFour.style.webkitTransform = 'translateX(' + pageX/-1700 + '%) translateY(' + pageY/-450 + '%)';
  		layerFour.style.transform = 'translateX(' + pageX/-1700 + '%) translateY(' + pageY/-450 + '%)';
		layerFive.style.webkitTransform = 'translateX(' + pageX/-3000 + '%) translateY(' + pageY/-950 + '%)';
  		layerFive.style.transform = 'translateX(' + pageX/-3000 + '%) translateY(' + pageY/-950 + '%)';
		layerThree.style.webkitTransform = 'translateX(' + pageX/-3500 + '%) translateY(' + pageY/-1500 + '%)';
  		layerThree.style.transform = 'translateX(' + pageX/-3500 + '%) translateY(' + pageY/-1500 + '%)';
		layerSix.style.webkitTransform = 'translateX(' + pageX/-1000 + '%) translateY(' + pageY/-750 + '%)';
  		layerSix.style.transform = 'translateX(' + pageX/-1000 + '%) translateY(' + pageY/-750 + '%)';
		layerSeven.style.webkitTransform = 'translateX(' + pageX/-2200 + '%) translateY(' + pageY/-750 + '%)';
  		layerSeven.style.transform = 'translateX(' + pageX/-2200 + '%) translateY(' + pageY/-750 + '%)';
		layerEight.style.webkitTransform = 'translateX(' + pageX/-2100 + '%) translateY(' + pageY/-750 + '%)';
  		layerEight.style.transform = 'translateX(' + pageX/-2100 + '%) translateY(' + pageY/-750 + '%)';
		layerNine.style.webkitTransform = 'translateX(' + pageX/-1000 + '%) translateY(' + pageY/-750 + '%)';
  		layerNine.style.transform = 'translateX(' + pageX/-1000 + '%) translateY(' + pageY/-750 + '%)';
		wrapper.style = 'background-position:'+ pageX/-200 +'px center';
	});
}


function LoopAnimate() {
  // Add animation class to star after 5 secons
  setTimeout(function() {
    document.getElementById("mr_star").className += " animate";
  }, 9000);
  // remove animation class after 9seconds
  setTimeout(function() {
    let star = document.getElementById("mr_star"),
      starCont = document.getElementById("star-cont");

    star.className = " star"; 
    randomMargin(); //add random margin
  }, 5000);

}
// Call LoopAnimate every 15seconds
LoopAnimate();
window.setInterval(function() {
 LoopAnimate();

}, 9000);

//function to add a random margin
function randomMargin() {
  let num = Math.floor(Math.random() * 181) - 100,
    starCont = document.getElementById("star-cont"),
    starContMargin = getComputedStyle(starCont).getPropertyValue("margin-left");
  num += "%";

  starCont.style.marginLeft = num;
  console.log(num);
}