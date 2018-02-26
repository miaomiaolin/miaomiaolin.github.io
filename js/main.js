;$(function(){

	'use strict';

	var sidebar=$('#sidebar'),
		mask=$('.mask'),
		backButton=$('.back-to-top'),
		sidebar_trigger=$('#sidebar_trigger');

	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());//返回负的侧栏宽度，更灵活，便于修改
	}

	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
	backButton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})

	$(window).on('scroll',function(){
		if ($(window).scrollTop() > $(window).height()) {//页面滚动高度大于屏幕高度
			backButton.fadeIn();
		} else {
			backButton.fadeOut();
		}
	})
	//问题：页面刷新后返回顶部按钮存在，只有滚动才消失
	//$(window).trigger('scroll'）//解决：使页面一开始就触发滚动命令

})