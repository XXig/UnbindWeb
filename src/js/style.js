				var l=window.location.hash;
				$(l).find("li").addClass("on"),
				$(l).siblings().find("li").removeClass("on");
				$("a[href='" + l +"']").addClass("on").parent("li").siblings().find("a").removeClass("on");
				$(".nav li a").click(function(){
					$(this).addClass("on").parent("li").siblings().find("a").removeClass("on");
					var $main=$($(this).attr("href"));
					$main.find("li").addClass("on"),
					$main.siblings().find("li").removeClass("on");
				})
				$(".main ul li").click(function(){
					$(this).toggleClass("on")
				})
				
				$(".btn a").click(function(){
					var a=$(".main ul").find("li.on>a");
					for (var i = 0; i < a.length; i++) {
						(function(m){
							var item = a[m],  
							$item = $(item);
							setTimeout(function(){
								console.log(item.href);
								// item.click()
								// window.open(item.href);
								// $item.trigger("click")
								$item.parent("li").addClass("on")
							},m*1000)
						})(i)
					}
				})