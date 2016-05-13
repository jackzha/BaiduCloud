//index.js
$(function(){

	//分享
	var hideBox = $("#hide_box");
	var shareFile = $("#share_list li");
	var clear = $("#content .content_top .clear");
	var cancel = $("#hide_box button.cancel");

	shareFile.click( function() {
		clear.hide(0,function(){
			hideBox.show("slow");
		});
	});

	cancel.click( function() {
		hideBox.hide("fast",function() {
			clear.show();
		});
	});

	//点赞
	var zan = $("#list .list_bottom a.zan");
	var add = $("#list .list_bottom>div>span");
	
	zan.each(function(index,domEle) {
		$(this).click( function() {
			var textValue = $(this).text();
			if( textValue == "赞" ){
				$(add[index]).html("+1").animate({
					"opacity" : 1
				}).animate({
					"top" : "-15px"
				},200).animate({
					"opacity" : 0
				});
				$(this).html("<i></i>已赞+1");
			}else{
				$(add[index]).html("-1").animate({
					"opacity" : 1
				},100).animate({
					"top" : "-6px"
				}).animate({
					"opacity" : 0
				});
				$(this).html("<i></i>赞");
			};
		});
	});
	
	//评论
	var comment = $("#list li .list_bottom div a.comment");
	var commentBox = $("#list li .comment_box");
	var onAndOff = true;

	comment.each(function(index,domEle) {
		$(this).click(function() {
			if( onAndOff ) {
				$(commentBox[index]).show("slow",function() {
					onAndOff = false;
				});
			}else{
				$(commentBox[index]).hide(0,function() {
					onAndOff = true;
				});
				
			};
		});
	});

	//订阅
	var subscribe = $("#guess .order .people>div a.button");
	var subText = $("#guess .order .people>div a.button span");
	var em = $("#guess .order .people>div a.button em");
	subscribe.each(function(index,domEle) {
		$(this).click(function() {
			var state = $(subText[index]).text();
			if( state == "订阅" ){
				$(subText[index]).html("已订阅");
				$(this).mouseover(function() {
					$(this).css({
						"background-color" : "#FBFBFB",
						"color" : "#666666"
					});
					$(subText[index]).html("取消");
				});
				$(this).mouseout(function() {
					$(subText[index]).html("已订阅");
				});
			}else if( state == "取消" ){
				$("#cancelSubBox").show();
			}else{

			}
		});
	});
	$("#cancelSubBox .cel_btn").click(function() {
		$("#cancelSubBox").hide();
	});

});
