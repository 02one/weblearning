// $(document).ready(function() {
// 	$(window).on("load",function(){
// 		imgLocation();
//         var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]};
//         window.onscroll = function(){
//             if (scrollside()) {
//                 $.each(dataImg.data,function(index, value) {
//                     var box = $("<div>").addClass('box').appendTo(".container");
//                     var image = $("<div>").addClass('image').appendTo(box);
//                     console.log(value);
//                     $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(image);
//                 });
//                 imgLocation();
//             }
//         };
// 	});
// });
$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var image = $("<div>").addClass("image").appendTo(box);
                   console.log("./img/"+$(value).attr("src"));
                    $("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(image);
                    console.log(value);
                });
                imgLocation();
            }
        };
    });
});
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);//最后一张图片的位置
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    //documentHeight + scrollHeight 为当前滚动的高度
    return ( lastboxHeight < (documentHeight + scrollHeight) ) ? true : false;
}
function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
		// console.log(index + "====" + value);
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
			// console.log(boxArr);
		}else{
			var minboxHeight = Math.min.apply(null,boxArr);//apply用法及技巧需掌握！
			// console.log(minboxHeight);
			var minboxIndex = $.inArray(minboxHeight, boxArr);
			// console.log(minboxIndex);
			$(value).css({
				"position" : "absolute",
				"top" : minboxHeight,
				"left" : box.eq(minboxIndex).position().left
			});
            boxArr[minboxIndex] += box.eq(index).height(); 
		}
	});
}
