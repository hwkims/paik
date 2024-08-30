
$(window).load(function(){
	sortTxt = $(".pick_list_box .pick_list label.on").text();
	$(".sort-title").text(sortTxt);
	$(".sort-title").click(function(){
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
			$(this).next("ul").stop().fadeOut("fast");
		} else{
			$(this).addClass("on");
			$(this).next("ul").stop().fadeIn("fast");
		}
	});
	$("li.depth1li").each(function(){
		if ($(this).hasClass("on"))
		{
			$(this).find("> ul").stop().slideDown();
		}
	});
});