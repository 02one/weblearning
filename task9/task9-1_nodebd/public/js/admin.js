// 打开页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
	var r = /ab/gi;
	var s = 'abfdaabc'
	r.lastIndex = 3;
	console.log(r.exec(s));
	console.log(s.match(r));
	console.log('a,  b,c, d'.split(/ *,/));

	refreshNews();
	newsSubmit();
	newsDelete();
	newsEdit();
});


//更新新闻列表
function refreshNews(){
	var newstable = $('#newsTable tbody');
	newstable.empty();
	$.ajax({
		type:'get',
		url:'/bd-news',
		data:{newsType:0},
		datatype:'json',
		success:function(data){
			data.forEach( function(element, index) {
				var table = $("table tbody");
				var td_id = $("<td></td>").html(element.id);
				var td_type = $("<td></td>").html(element.newstype);
				var td_topic = $("<td></td>").html(element.newstitle);
				var td_img = $("<td></td>").html(element.newsimg);
				var td_time = $("<td></td>").html(element.newstime);
				// var td_deleted = $("<td></td>").html(element.newsdeleted);
				var td_ctrl = $("<td>");
				var btn_edit = $("<button></button>").addClass('btn btn-primary btn-sm').html("编辑");
				var btn_del = $("<button></button>").addClass('btn btn-danger btn-sm').html("删除");
				td_ctrl.append(btn_edit,btn_del);
				var tRow = $("<tr>");
				tRow.append(td_id,td_type,td_topic,td_img,td_time,td_ctrl);
				table.append(tRow);
			});
		}
	});
}
// 添加新闻
function newsSubmit(){
	var btnSub = $("#btnSub");
	$("#btnSub").click(function(event) {
		event.preventDefault();//当点击提交按钮时阻止对表单的提交

		if ($("#newsType").val()=="" || $("#newsTopic").val()=="" || $("#newsImg").val()=="" || $("#newsDate").val()=="") {
			if ($("#newsType").val()=="") {
				 $("#newsType").parent().addClass('has-error');
			}else {
				$("#newsType").parent().removeClass('has-error');
			}
			if ($("#newsTopic").val()=="") {
				 $("#newsTopic").parent().addClass('has-error');
			}else {
				$("#newsTopic").parent().removeClass('has-error');
			}
			if ($("#newsImg").val()=="") {
				$("#newsImg").parent().addClass('has-error');
			}else {
				$("#newsImg").parent().removeClass('has-error');
			}
			if ($("#newsDate").val()=="") {
				$("#newsDate").parent().addClass('has-error');
			}else {
				$("#newsDate").parent().removeClass('has-error');
			}
		}else{
			var jsonNews = {
				newsType:$("#newsType").val(),
				newsTopic:$("#newsTopic").val(),
				newsImg:$("#newsImg").val(),
				newsDate:$("#newsDate").val()
			};
			$.ajax({
				url:'./server/insert.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					refreshNews();
				}
			});
		}
	});
}
// 删除新闻
function newsDelete(){
	var deleteID = null;
	$("#newsTable").on('click','.btn-danger',function(e){
		$("#deleteModel").modal('show');
		deleteID = $(this).parent().prevAll().eq(4).html();
		console.log(deleteID);
	});
	$("#ensure").click(function(event) {

		console.log(deleteID+'test');
		if (deleteID) {
			$("#deleteModel").modal('hide');
			
			$.ajax({
				url:'./server/deleteNews.php',
				type:'post',
				data:{newsid:deleteID},
				success:function(data){
					console.log(data);
					console.log("删除成功");
					refreshNews();
				}
			});
			deleteID = 0;
		}

	});

}
// 编辑新闻
function newsEdit(){
	var editID = null;
	$("#newsTable").on('click','.btn-primary',function(e){
		$("#editModel").modal('show');
		editID = $(this).parent().prevAll().eq(4).html();
		$.ajax({
			url:'./server/newsEdit.php',
			type:'get',
			datatype:'json',
			data:{newsid:editID},
			success:function(data){
				data.forEach( function(element, index) {
					console.log(element.newstime);
					$("#eNewsType").val(element.newstype);
					$("#eNewsTopic").val(element.newstitle);
					$("#eNewsImg").val(element.newsimg);
					var etime = element.newstime.split(' ')[0];
					$("#eNewsDate").val(etime);
				})	
			}
		});
		
	});
	$("#edit").click(function(event) {
		// 完整性验证
		if ($("#eNewsType").val()=="" || $("#eNewsTopic").val()=="" || $("#eNewsImg").val()=="" || $("#eNewsDate").val()=="") {
			if ($("#eNewsType").val()=="") {
				 $("#eNewsType").parent().addClass('has-error');
			}else {
				$("#eNewsType").parent().removeClass('has-error');
			}
			if ($("#eNewsTopic").val()=="") {
				 $("#eNewsTopic").parent().addClass('has-error');
			}else {
				$("#eNewsTopic").parent().removeClass('has-error');
			}
			if ($("#eNewsImg").val()=="") {
				$("#eNewsImg").parent().addClass('has-error');
			}else {
				$("#eNewsImg").parent().removeClass('has-error');
			}
			if ($("#eNewsDate").val()=="") {
				$("#eNewsDate").parent().addClass('has-error');
			}else {
				$("#eNewsDate").parent().removeClass('has-error');
			}
		}else{
			$("#editModel").modal('hide');
			var jsonNews = {
				newsId:editID,
				newsType:$("#eNewsType").val(),
				newsTopic:$("#eNewsTopic").val(),
				newsImg:$("#eNewsImg").val(),
				newsDate:$("#eNewsDate").val()
			};
			$.ajax({
				url:'./server/ensureEdit.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					refreshNews();
				}
			});

		}
		
	});
	editID = 0;
}