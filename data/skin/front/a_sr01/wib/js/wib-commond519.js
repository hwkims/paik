function jh_btn(){
    $(document).on('mouseenter','.j-btn-animation',function(e){
		var parentOffset = $(this).offset(),
            overX = e.pageX - parentOffset.left,
            overY = e.pageY - parentOffset.top;
        $(this).find('.j-overlay').css({top:overY, left:overX});
    });

    $(document).on('mouseout','.j-btn-animation', function(e){
        var parentOffset = $(this).offset(),
            overX = e.pageX - parentOffset.left,
            overY = e.pageY - parentOffset.top;
        $(this).find('.j-overlay').css({top:overY, left:overX});
    });

	$(".go-top").click(function(){
		$("html, body").animate({
			scrollTop : 0
		}, 700);
	});
}
$(function(){
	jh_btn();

	var wave1 = $("#wave-footer").wavify({
		height: 50,
		bones: 8,
		amplitude: 35,
		color: "#FD834F",
		speed: -0.2
	});


	$("header").mouseenter(function(){
		$(this).addClass("hover");
	});
	$("header").mouseleave(function(){
		$(this).removeClass("hover");
	});


	var headerLi = $("header .inner .menu > ul > li").mouseenter(function(){
		$(this).addClass("on");
		$(this).find(" > ul").stop().fadeIn();
	});
	headerLi.mouseleave(function(){
		$(this).removeClass("on");
		$(this).find(" > ul").stop().fadeOut();
	});

	
	// 상단 띠배너
	if ($.cookie('topBanner') == undefined) {
		$(".top-banner").show();
		$("#wrap").addClass("banner-on");
	}
	else if ($.cookie('topBanner') == '1'){
		$(".top-banner").hide();
		$("#wrap").removeClass("banner-on");
	}        
	else if ($.cookie('topBanner') == '0'){
		$(".top-banner").show();		
		$("#wrap").addClass("banner-on");
	}        
	$("header .top-banner a.close").click(function() {
		$(".top-banner").hide();
		$("#wrap").removeClass("banner-on");
		$.cookie('topBanner', '1', {
			expires: 1,
			path: '/'
		});
	});

	// 검색영역
	// 전체 메뉴 여닫기
	$(".search-area-open").click(function(){
		$(".search-area")[0].style="display:block;background-color: rgb(255, 255, 255);";
		$(".search-area").animate({top: "0"  }, 1000, 'swing');
	});
	$(".search-area-close").click(function(){
		$(".search-area")[0].style="display:none";
		$(".search-area").animate({top: "0"  }, 0, 'swing');
		$(".search-area").animate({top: "-300"  }, 1000, 'swing');
	});


	// SCROLL HEADER FIX
	$(window).on("load scroll", function(){
		if ( $( document ).scrollTop() > 80 ) {
			$( "header" ).addClass( "scroll-active" );
			$("#quick-menu").addClass("scroll-active");
		}
		else {
			$( "header" ).removeClass( "scroll-active" );
			$("#quick-menu").removeClass("scroll-active");
		}

		var winhigh = $(window).height();
		var dohigh = $(document).height();
		var last_po = dohigh - winhigh
		var position = $(window).scrollTop();
		if ( position > last_po)
		{
			$("#quick-menu").addClass("scroll-footer");
		} else{
			$("#quick-menu").removeClass("scroll-footer");
		}
	});
});