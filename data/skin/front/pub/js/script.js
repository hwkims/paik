$(document).ready(function() {
	// 상단 헤더 GNB
	$("header .gnb_wrap .gnb").mouseenter(function() {
		$(".lnb_bg").stop(false,true).fadeIn(100);
		$(".lnb").stop(false,true).fadeIn(100);
	});

	$("header .gnb_wrap .gnb").mouseleave(function() {
		$(".lnb").stop(false,true).fadeOut(300);
		$(".lnb_bg").stop(false, true).fadeOut(300);
	});

	// 상단검색
	$("#btnSearchTop").click(function(){
		$(".search_top_box").addClass("on");
		$(".search_top_box #search_form").val("");
		$(".search_top_box #search_form").focus();
		//$(".dn").css("display", "block");
	});

	$(".search_top_box .btn_close").click(function(){
		$(".search_top_box").removeClass("on");
		$(".dn").css("display", "none");
	});

	$(window).scroll(function() {
		if(0 < $(window).scrollTop()){
			$("header").addClass("bg on");
			// 메인 페이지 최상단용 BG
			$("header.main_header .lnb_bg").css({height:0});
		}else{
			$("header").removeClass("bg on");
			// 메인 페이지 최상단용 BG
			$("header.main_header .lnb_bg").css({height:"432px"});
		}
	});

	// 하단 푸터 패밀리 사이트
	$(".family_site").click(function() {
		const list = $(this).find("ul");
		list.addClass("on");
		list.stop(false, true).fadeIn(600);
		list.stop(false, true).animate({height: "285px"});
	});
	$(".family_site").mouseleave(function() {
		const list = $(this).find("ul");
		list.removeClass("on");
		list.stop(false, true).fadeOut(100, function() {
			$(this).css({height: 0});
		});
	});
});

// body_fix
var pos_t = 0;
function body_fix(val)
{
	if(val == true)
	{
		pos_t = $(window).scrollTop();
		$("body").css("top", pos_t * -1 );
		$("body").css("position", "fixed");
	}else{
		$("body").css("position", "static");
		$(window).scrollTop(pos_t);
	}
}

// twolength
function twolength(n) {
	return (n < 10 ? '0' : '') + n
}