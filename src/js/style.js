	document.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);
	document.querySelector(".main").addEventListener("touchmove",function(a){a.stopPropagation()},!1);
	var l=window.location.hash;
	var clickEvent = (document.ontouchstart!==null) ? 'click' : 'touchstart';
	var bg={
		c:!0,
		click:function(){
			this.c&&($(".main").css("overflow",""),$(".bg").hide(),$(".nav").css("height",""))
		}
	};
	$(l).find("li").addClass("on");
	$(l).siblings().find("li").removeClass("on");
	$("a[href='" + l +"']").addClass("on").parent("li").siblings().find("a").removeClass("on");
	$(".nav li a").on("click",function(){
		bg.c=!0,bg.click(),
		$(this).addClass("on").parent("li").siblings().find("a").removeClass("on");
		var $main=$($(this).attr("href"));
		$main.find("li").addClass("on"),
		$main.siblings().find("li").removeClass("on");
	}),
	$(".main ul li").on("click",function(){
		$(this).toggleClass("on")
	}),
	$(".nav-s").on(clickEvent,function(){
		if (bg.c) {
			$(".main").css("overflow","hidden"),
			$(".nav").css("height","400px"),
			$(".bg").show(),
			bg.c=!1;
		}
		else{
			bg.c=!0;bg.click()
		}
	}),
	$(".bg").on(clickEvent,function(){
		bg.c=!0;bg.click()
	});
