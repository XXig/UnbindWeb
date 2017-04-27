				var l=window.location.hash;
				$(l).find("li").addClass("on"),
				$(l).siblings().find("li").removeClass("on");
				$("a[href='" + l +"']").addClass("on").parent("li").siblings().find("a").removeClass("on");
				// $(function(){
					$(".main ul a").click(function(){
						// return false;
					})
					$(".nav li a").click(function(){
						$(this).addClass("on").parent("li").siblings().find("a").removeClass("on");
						var $main=$($(this).attr("href"));
						$main.find("li").addClass("on"),
						$main.siblings().find("li").removeClass("on");
					})
					$(".btn").click(function(){
						console.log('test');
						for(var i=0;i<$(l +" li a");i++){
							var hammeraLi = new Hammer($(l +" li a")[i]);
							hammeraLi.trigger("click");
						}
						// setTimeout(function(){
						// 	console.log();
						// },0)
						// $.each(divSelects,function() {
						// 	$(this).click()
						// })
						// $(l +" li a").each(function(){
							// $(this).click()
							// var url=$(this).attr('href');
							// window.location.href=url; 
						// }); 
					})
				// })