// function findWeather() {
//   var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
//   $.getScript(cityUrl, function(script, textStatus, jqXHR) {
//     var citytq = remote_ip_info.city ;// 获取城市
//     var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
//     $.ajax({
//       url : url,
//       dataType : "script",
//       scriptCharset : "gbk",
//       success : function(data) {
//         var _w = window.SWther.w[citytq][0];
//         var _f= _w.f1+"_0.png";
//         if(new Date().getHours() > 17){
//            _f= _w.f2+"_1.png";        
//         }
//         var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" +_f
//         + "' />";
//         var tq = citytq + " " + img + " " + _w.s1 + " " + _w.t1 + "℃～" + _w.t2 + "℃ " + _w.d1 + _w.p1 + "级";
          
//         $('#weather').html(tq);
//       }
//     });
//   });
// }
  
// findWeather();

//天气报道
function findWeather() {
  var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
  $.getScript(cityUrl, function(script, textStatus, jqXHR) {
    var citytq = remote_ip_info.city ;// 获取城市
    var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
    $.ajax({
      url : url,
      dataType : "script",
      scriptCharset : "gbk",
      success : function(data) {
        var _w = window.SWther.w[citytq][0];
        var _f = _w.f1 + "_0.png";
        if(new Date().getHours() > 17){
           _f = _w.f2 + "_1.png";        
        }
        var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" +_f
        + "' />";
        var tq = citytq + "  " + img + "  " + _w.s1 + "  " + _w.t1 + "℃～" + _w.t2 + "℃ ";
          
        $('#weather').html(tq);
      }
    });
  });
}
//下拉菜单实现
function dropdownUp(){
  var image = $(".more-items");
  var subject = $(".setting");
  var timeoutid;
  // console.log(image);
  $(".more-items").hover(function(){
    var ulNode = $(".moreItemsMenu");
      ulNode.toggle("fast");
  });
  $(".setting").hover(function(){
    var ulNode1 = $(".setting-menu");
    // console.log(ulNode1);
      ulNode1.toggle("fast");

    
  })
  //换肤下拉
  $(".changeTheme").click(function() {
    $(".bkgroundcolor").slideToggle();
  });
  $(".slideU").click(function() {
    $(".bkgroundcolor").slideToggle();

  });

}
//标签切换
function tabPage(){
  //小页面标签切换
  $(".navigation div [tablabel]").each(function(index) {
      var node = $(this);
      $(this).click(function(){
        $("div.show").removeClass("show");
        $("div.tabBackground").removeClass("tabBackground");
        node.addClass("tabBackground");
        $(".nav-artical [page]").eq(index).addClass("show");
      })
  });
  //换肤页面标签
  $(".themeSelect [labelTab]").each(function(index){
    var label = $(this);
    $(this).click(function() {
      // console.log('test');
        $(".themeSelect ul li span").removeClass('show');
        $(".themeSelect ul li span").eq(index).addClass("show");
        $(".imgSelect [themeTarget]").removeClass("show");
         $(".imgSelect [themeTarget]").eq(index).addClass("show");
    });
  })
}
//鼠标划过触发
function mseover(){
  $(".video1").hover(function(){
    $(".video1 i:nth-child(1)").toggle("fast");
    $(".video1 i:nth-child(2)").toggle("fast");
  });
  $(".video2").hover(function(){
    $(".video2 i:nth-child(1)").toggle("fast");
    $(".video2 i:nth-child(2)").toggle("fast");
  });
  $(".tool-icon").hover(function(){
    $(".tool-icon1").toggle(0);
    $(".tool-icon2").toggle(0);
  });
  $(".web").hover(function(){
    $(".select").toggle(0);
  });
  //换肤变化效果
  $(".imgTheme1 ul li").each(function(index) {
    
    $(this).mouseenter(function(){
      switch(index) {
        case 0:
          $(".previewContainer").css({
            background: 'url(images/ms1.jpg)'
          });
          break;
        case 1:
          $(".previewContainer").css({
            background: 'url(images/ms2.jpg)'
          });
          break;
        case 2:
          $(".previewContainer").css({
            background: 'url(images/ms3.jpg)'
          });
          break;
        case 3:
          $(".previewContainer").css({
            background: 'url(images/ms4.jpg)'
          });
          break;
        case 4:
          $(".previewContainer").css({
            background: 'url(images/ms5.jpg)'
          });
          break;  
        case 5:
          $(".previewContainer").css({
            background: 'url(images/ms6.jpg)'
          });
          break;
        break;
      }
      
    }).mouseout(function(event) {
      $(".previewContainer").css({
            background: '#fff'
          });
    }); 
    
    $(this).click(function(){
      switch(index) {
        case 0:
          $("body").css({
            background: '#FFF68F'
          });
          break;
        case 1:
          $("body").css({
            background: ' #FFEFDB'
          });
          break;
        case 2:
          $("body").css({
            background: ' #FFC0CB'
          });
          break;
        case 3:
          $("body").css({
            background: ' #FAEBD7'
          });
          break;
        case 4:
          $("body").css({
            background: ' #EEE8CD'
          });
          break;
        case 5:
          $("body").css({
            background: ' #EED5D2'
          });
          break;
          
          break;
      }
    });    
  });
  $(".imgTheme2 ul li").each(function(index) {
    
    $(this).mouseenter(function(){
      switch(index) {
        case 0:
          $(".previewContainer").css({
            background: 'url(images/ms1.jpg)'
          });
          break;
        case 1:
          $(".previewContainer").css({
            background: 'url(images/ms2.jpg)'
          });
          break;
        case 2:
          $(".previewContainer").css({
            background: 'url(images/ms3.jpg)'
          });
          break;
        case 3:
          $(".previewContainer").css({
            background: 'url(images/ms4.jpg)'
          });
          break;
        case 4:
          $(".previewContainer").css({
            background: 'url(images/ms5.jpg)'
          });
          break;  
        case 5:
          $(".previewContainer").css({
            background: 'url(images/ms6.jpg)'
          });
          break;
        break;
      }
      
    }).mouseout(function(event) {
      $(".previewContainer").css({
            background: '#fff'
          });
    }); 
      
    $(this).click(function(){
      switch(index) {
        case 0:
          $("body").css({
            background: '#FFF68F'
          });
          break;
        case 1:
          $("body").css({
            background: ' #FFEFDB'
          });
          break;
        case 2:
          $("body").css({
            background: ' #FFC0CB'
          });
          break;
        case 3:
          $("body").css({
            background: ' #FAEBD7'
          });
          break;
        case 4:
          $("body").css({
            background: ' #EEE8CD'
          });
          break;
        case 5:
          $("body").css({
            background: ' #EED5D2'
          });
          break;
          
          break;
      }
    });    
  });
}



$(document).ready(function() {
    findWeather();
    dropdownUp();
    tabPage();
    mseover();
  });

