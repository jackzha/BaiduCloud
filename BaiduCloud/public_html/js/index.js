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
	
	//


});
