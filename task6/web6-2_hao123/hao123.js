// $(function(){
// 			$('.dropdown-toggle').on('click',function(e){
// 				$('.user').toggleClass('open');
// 				e.stopPropagation();
// 			});
// 			$('.dropdown-menu  li').on('click',function(e){
// 				var _this = $(this);
// 				$('.content > p').text(_this.attr('data-value'));
// 				_this.addClass('selected').siblings().removeClass('selected');
// 				$('.content').removeClass('open');
// 				e.stopPropagation();
// 			});
// 			$(document).on('click',function(){
// 				$('.content').removeClass('open');
// 			});

// 		});

var arrTheme = 0;
// 邦定触发事件
var themeChangeBlue = document.getElementById("theme_blue");
var themeChangeOrange = document.getElementById("theme_orange");
var themeChangeDefault = document.getElementById("theme_default");
themeChangeOrange.addEventListener("click" , themeChange , false);
themeChangeBlue.addEventListener("click" , themeChange , false);
themeChangeDefault.addEventListener("click" , themeChange , false);

var strStoreDate = window.localStorage ? localStorage.getItem("themeNum") : 0;
if (strStoreDate == 1) {
	document.body.style.backgroundImage = "url(images/bg1.jpg)";
	document.body.style.backgroundRepeat = "no-repeat";
}else if (strStoreDate == 2) {
	document.body.style.backgroundImage = "url(images/bg2.jpg)";
	document.body.style.backgroundRepeat = "no-repeat";
}else if (strStoreDate == 3){
	document.body.style.backgroundColor = "#FCFCFC";
}
// 更换主题
function themeChange(){
	if ($(this).attr('value') == "theme1") {
		document.body.style.backgroundImage = "url(images/bg1.jpg)";
		document.body.style.backgroundRepeat = "no-repeat";
		arrTheme = 1;
		// temp.style.background = "blue";
	}else if ($(this).attr('value') == "theme2") {
		document.body.style.backgroundImage = "url(images/bg2.jpg)";
		document.body.style.backgroundRepeat = "no-repeat";
		arrTheme = 2;
	}else if ($(this).attr('value') == "default") {
		document.body.style.background = "#FCFCFC";
		arrTheme = 3;
	}
	if (window.localStorage) {
		localStorage.setItem("themeNum", arrTheme);
	}else{
		// cookie.write("themeNum", arrTheme);
	}
}
