$(function(){
	$(".item_photo_slide .slider_goods_nav li").eq(0).addClass("on");
	$(".item_photo_slide .slider_goods_nav li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
	});


	$(window).on("load scroll", function(){
		var goodsTabOffset = $(".item_goods_tab").offset().top - 80;
		if ( $( document ).scrollTop() > goodsTabOffset ) {
			$(".item_goods_tab").addClass("fixed");
		}
		else {
			$(".item_goods_tab").removeClass("fixed");
		}
	});
	$(".item_goods_tab li a").click(function(){
		var naviPosition = $(this).attr("data-class");
		var move = $(naviPosition).offset().top - 136;
		$("html,body").stop().animate({"scrollTop":move});
	});


	$(window).on("load scroll", function(){	
		var goods_sec = $(".item_goods_sec").offset().top - 149;
		
		var go01off = $(".go01").offset().top - 150;
		var go02off = 0;
		try{
			go02off = $(".go02").offset().top - 150;
		}catch(e){
			go02off = 0;
		}
		var go03off = $(".go03").offset().top - 150;
		var go04off = $(".go04").offset().top - 150;
		var go05off = $(".go05").offset().top - 150;

		var footer_sec = $("#footer_wrap").offset().top - 510;
		
		var $position = $(window).scrollTop();
		/*
		if($position<1158){
			$position = 1160;
		}
		*/

		if ($position > go01off)
		{	
			$(".item_goods_tab li").eq(0).addClass("on").siblings("li").removeClass("on");
			$(".item_goods_tab > ul").removeAttr("class");
		}
		
		if ($position > go02off && go02off>go01off)
		{	
			$(".item_goods_tab li").eq(1).addClass("on").siblings("li").removeClass("on");
			$(".item_goods_tab > ul").removeAttr("class");
			$(".item_goods_tab > ul").addClass("left20");
		}
		
		if ($position > go03off)
		{	
			$(".item_goods_tab li").eq(2).addClass("on").siblings("li").removeClass("on");
			$(".item_goods_tab > ul").removeAttr("class");
			$(".item_goods_tab > ul").addClass("left40");
		}
		if ($position > go04off)
		{	
			$(".item_goods_tab li").eq(3).addClass("on").siblings("li").removeClass("on");
			$(".item_goods_tab > ul").removeAttr("class");
			$(".item_goods_tab > ul").addClass("left60");
		}
		if ($position > go05off)
		{	
			$(".item_goods_tab li").eq(4).addClass("on").siblings("li").removeClass("on");
			$(".item_goods_tab > ul").removeAttr("class");
			$(".item_goods_tab > ul").addClass("left80");
		}		
	});

});

