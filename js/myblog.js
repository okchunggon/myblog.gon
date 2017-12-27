$(document).ready(function(){

	console.log('documnet standby!');
	// 마우스 올렸을 때 : console.log 출력
	$(".menuLv1").click(function(){
		var id = $(this).attr('id');
		alert("id :" + id);
	});
});