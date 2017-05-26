function backtop(){
	window.onload = function(){
	var topbtn = document.getElementById("top");
	var timer = null;
	var pagelookheight = document.documentElement.clientHeight;
	
		
	window.onscroll = function(){
		// alert("hello");
		var backtop = document.body.scrollTop;
		if (backtop>= pagelookheight) {
			topbtn.style.display = "block";
		}
		else{
			topbtn.style.display = "none";
		}
	}
	topbtn.onclick = function(){
			// alert("hello");
		timer = setInterval(function(){
			var backtop=document.body.scrollTop;
			var speedtop = backtop/5
			document.body.scrollTop =backtop - speedtop;
			if (backtop==0) {
				clearInterval(timer);
			}
		},30);
	}
}
}

// 搜索按钮
function sBtn(){
	var val = $("#webSearch").val();
	if (val != "") {
		window.location.href = "http://search.jikexueyuan.com/course/?q=" + val;
	}
}

// 鼠标点击事件
function msClick(){
	$(".search-icon").click(function() {
		$(".hideSearch").toggle("400");
	});
	$(".close-icon").click(function() {
		$(".hideSearch").toggle("400");
	});
	//搜索按钮
	$("#searchBtn").click(function(event) {
		sBtn();
	});
	// 搜索框
	$("#webSearch").keyup(function(event) {
		var isFocus = $("#webSearch").is(":focus");
		if (isFocus == true && (event.keyCode == 13 || event.keyCode == 10) ) {
			//把当前值传给sBtn()函数,如何用this指针传递?event.data._this.sBtn()?
			sBtn();
		}
		
	});
	$(".columnSort").click(function() {
		$(".main").css({
			display: 'block'
		});;
		$(".main2").css({
			display: 'none'
		});;
	});
	$(".rowSort").click(function() {
		$(".main").css({
			display: 'none'
		});;
		$(".main2").css({
			display: 'block'
		});;
	});
}

// 鼠标滑过事件
function msOver(){
	//用JS如何实现伪类hover？用jquery里的mouseover或者hover，搭配mouseout时，当鼠标移到
	// 下拉框时会消失

	// $(".sidebarCategory ul li").each(function(index, el) {
	// 	// console.log(index);
	// 	// var node = $(this);
	// 	$(this).mouseenter(function() {
	// 	//鼠标经过不同li，显示不同li底下的不同下拉
	// 		$("[sidebarMenu]").eq(index).show();

	// }).mouseout(function(event) {
	// 	$(".sidebarMenu").hide();

	// 	});
	// 	// console.log(index);

	// });
	// $("[sidebarMenu]").each(function(ind) {
	// 	$(this).mouseover(function() {
	// 		$("[sidebarMenu]").eq(ind).show();
	// 	}).mouseout(function(event) {
	// 	$(".sidebarMenu").hide();
	// 	});
	// });

	
	// $(".main li").each(function(index, el) {
		

	// 	$(this).hover(function(){

	// 		$(".hidePic").eq(index).css({
	// 			opacity: "0.5"
	// 		});
	// 		$(".brief").eq(index).hide();
	// 		$(".detail").eq(index).slideDown();

	// 	} ,function(){
	// 		$(".hidePic").css({
	// 			opacity: '0'
	// 		});
	// 		$(".brief").show();
	// 		$(".detail").eq(index).slideUp();
	// 	})
		

	// });
	
}

$(document).ready(function() {
	backtop();
	msClick();
	msOver();
})