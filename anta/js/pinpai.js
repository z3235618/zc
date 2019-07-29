$(function() {
	var de = 0;
	var time"";
	function datatime(){
		time= setInterval(function(){
			de -= 1920;
			if(de >= -3840) {
				$(".sec1").animate({
					"left": "" + de + ""
				});
			} else {
				$(".sec1").animate({
					"left": "0"
				});
				de = 0;
			}
		},1000);
	}
});