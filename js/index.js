window.onload = function(){
	var wrapper = document.querySelector('.wrapper'),
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
		var pageX = e.clientX,
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