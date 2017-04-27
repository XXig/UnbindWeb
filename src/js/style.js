// document.addEventListener('touchmove', function (event) {
// 	event.preventDefault();
// }, false);
// $(window).on('scroll.elasticity',function(e) {
// 	e.preventDefault();
// }).on('touchmove.elasticity',function(e) {
// 	e.preventDefault();
// });
$(window).on('resize', function() {
	document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
});
$(".box ul li").on("click",function(){
	window.location.href = "http://t.cn/" + $(this).attr("url");
})
var loader = new resLoader({
	resources : [
	'../images/loading.png',
	'../images/arrow.png',
	'../images/bg.jpg'
	],
	onProgress : function(current, total){
		var percent = Math.round(current/total*100);
		$('.load span').text(percent+"%");
	},
	onComplete : function(total){
		$('.load').addClass("fadeOut").remove();
		$('.start').show().addClass("fadeIn");
		$('.box ul').show().addClass("fadeIn");
	}
}); 
function g(t) {
	return parseInt(t, 10) + "deg"
}
window.addEventListener("deviceorientation",
	function(ev) {
		var e = ev.gamma;
		if (e) {
			$(".box ul").css("transform", "rotateY("+ g(.35 * e) + ")")
		};
	},true);