$(document).ready(function() {
	judgeClick();
	refreshNews('推荐');
});


// 更新新闻列表
function refreshNews(type){

	// console.log(type);
	var lists =$("article ul");
	lists.empty();
	$.ajax({
		url:"./server/news.php",
		type:'get',
		data:{newsType:type},
		datatype:'json',
		success:function(data){
			// console.log(data);			
			data.forEach(function(element, index,array) {
				// console.log(element.newsimg);
				var list = $("<li></li>").addClass('news-list').prependTo(lists);
				var newsImg = $("<div></div>").addClass('image').appendTo(list);
				var img = $("<img>").attr('src',element.newsimg).appendTo(newsImg);
				var newsContent = $("<div></div>").addClass('info').appendTo(list);
				var span = $('<span></span>').html(element.newstitle).appendTo(newsContent);
				var p = $('<p></p>').html(element.newstime).appendTo(newsContent);
			});
						
		}
	});
}
// 导航条科目被点击
function judgeClick(){

	$("#recomment").click(function(event) {
		event.preventDefault();
		refreshNews('推荐');
		$("nav ul li").removeClass('light');
		$("#recomment").addClass('light');
	});
	$("#many").click(function(event) {
		event.preventDefault();
		refreshNews('百家');
		$("nav ul li").removeClass('light');
		$("#many").addClass('light');
	});
	$("#local").click(function(event) {
		event.preventDefault();
		refreshNews('本地');
		$("nav ul li").removeClass('light');
		$("#local").addClass('light');
	});
	$("#picture").click(function(event) {
		event.preventDefault();
		refreshNews('图片');
		$("nav ul li").removeClass('light');
		$("#picture").addClass('light');
	});
	$("#amusement").click(function(event) {
		event.preventDefault();
		refreshNews('娱乐');
		$("nav ul li").removeClass('light');
		$("#amusement").addClass('light');
	});
}
