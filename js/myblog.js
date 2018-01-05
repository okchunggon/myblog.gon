$(document).ready(function(){

	$.ajax({
		type:"GET",
		url :"http://localhost:8080/privateBlog/sample/getMenuList.do",
		dataType: "jsonp",
		error : function(data){
			alert("수신 실패");
		},
		success: function(data){
			console.log(data);
			
		
			for(var i=0; i<4; i++){
				/*console.log('data.menuList['+i+'],BM_NAME : '+ data.menuList[i].BM_NAME);
				console.log('data.menuList['+i+'],BM_LEV : '+ data.menuList[i].BM_LEV);
				console.log('data.menuList['+i+'],BM_STEP : '+ data.menuList[i].BM_STEP);
				console.log('data.menuList['+i+'],ROWNUM : '+ data.menuList[i].ROWNUM);
				console.log('data.menuList['+i+'],BM_REF : '+ data.menuList[i].BM_REF);
				console.log('data.menuList['+i+'],BM_ISDEL : '+ data.menuList[i].BM_ISDEL);
				console.log('data.menuList['+i+'],BM_IDNUM : '+ data.menuList[i].BM_IDNUM);*/
				$(".menu").append('<li><a href="#" id="'+data.menuList[i].BM_IDNUM+'">'+data.menuList[i].BM_NAME+'</a></li>');
			}
			
		}
	});
	// 클릭 가능하게끔
	$(".menu a").click(function(){
		var id = $(this).attr('id');
		console.log("id : " +id);
	});

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