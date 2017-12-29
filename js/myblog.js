$(document).ready(function(){

	console.log('documnet standby!');
	// 마우스 올렸을 때 : console.log 출력
	$(".menuLv1").click(function(){
		var id = $(this).attr('id');
		alert("id :" + id);
	});

	$(".resume").on("click",function(){
				/* 다른 사이트로 이동 */
				// $(location).attr('href',"http://www.naver.com");
				// location.href = "http://www.naver.com";
				/* 다른 파일(html)로 이동 */
				location.href = "./myBlog.resume.html";
			});
		$(".mainLogo").on("click",function(){
				/* 다른 사이트로 이동 */
				// $(location).attr('href',"http://www.naver.com");
				// location.href = "http://www.naver.com";
				/* 다른 파일(html)로 이동 */
				location.href = "./myBlog.html";
			});
});