var page=function(){function e(){return{pageInit:function(){c.findWeather(),c.changeTheme.dropdownMenu(),c.changeTheme.themeSelect(),c.changeTheme.themeView(),c.itemsDropdown(),o.subjectChange(),o.myFocus(),o.video(),o.tool()}}}var n,c={findWeather:function(){$.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(e,n,c){var o=remote_ip_info.city,s="http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city="+o+"&day=0&dfc=3";$.ajax({url:s,dataType:"script",scriptCharset:"gbk",success:function(e){var n=window.SWther.w[o][0],c=n.f1+"_0.png";(new Date).getHours()>17&&(c=n.f2+"_1.png");var s="<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/"+c+"' />",a=o+"  "+s+"  "+n.s1+"  "+n.t1+"℃～"+n.t2+"℃ ";$("#weather").html(a)}})})},changeTheme:{dropdownMenu:function(){$(".changeTheme").click(function(){$(".bkgroundcolor").slideToggle()}),$(".slideU").click(function(){$(".bkgroundcolor").slideToggle()})},themeSelect:function(){$(".themeSelect [labelTab]").each(function(e){$(this);$(this).click(function(){$(".themeSelect ul li span").removeClass("show"),$(".themeSelect ul li span").eq(e).addClass("show"),$(".imgSelect [themeTarget]").removeClass("show"),$(".imgSelect [themeTarget]").eq(e).addClass("show")})})},themeView:function(){$(".imgTheme1 ul li").each(function(e){$(this).mouseenter(function(){switch(e){case 0:$(".previewContainer").css({background:"url(images/ms1.jpg)"});break;case 1:$(".previewContainer").css({background:"url(images/ms2.jpg)"});break;case 2:$(".previewContainer").css({background:"url(images/ms3.jpg)"});break;case 3:$(".previewContainer").css({background:"url(images/ms4.jpg)"});break;case 4:$(".previewContainer").css({background:"url(images/ms5.jpg)"});break;case 5:$(".previewContainer").css({background:"url(images/ms6.jpg)"})}}).mouseout(function(e){$(".previewContainer").css({background:"#fff"})}),$(this).click(function(){switch(e){case 0:$("body").css({background:"#FFF68F"});break;case 1:$("body").css({background:" #FFEFDB"});break;case 2:$("body").css({background:" #FFC0CB"});break;case 3:$("body").css({background:" #FAEBD7"});break;case 4:$("body").css({background:" #EEE8CD"});break;case 5:$("body").css({background:" #EED5D2"})}})}),$(".imgTheme2 ul li").each(function(e){$(this).mouseenter(function(){switch(e){case 0:$(".previewContainer").css({background:"url(images/ms1.jpg)"});break;case 1:$(".previewContainer").css({background:"url(images/ms2.jpg)"});break;case 2:$(".previewContainer").css({background:"url(images/ms3.jpg)"});break;case 3:$(".previewContainer").css({background:"url(images/ms4.jpg)"});break;case 4:$(".previewContainer").css({background:"url(images/ms5.jpg)"});break;case 5:$(".previewContainer").css({background:"url(images/ms6.jpg)"})}}).mouseout(function(e){$(".previewContainer").css({background:"#fff"})}),$(this).click(function(){switch(e){case 0:$("body").css({background:"#FFF68F"});break;case 1:$("body").css({background:" #FFEFDB"});break;case 2:$("body").css({background:" #FFC0CB"});break;case 3:$("body").css({background:" #FAEBD7"});break;case 4:$("body").css({background:" #EEE8CD"});break;case 5:$("body").css({background:" #EED5D2"})}})})}},itemsDropdown:function(){$(".more-items"),$(".setting");$(".more-items").hover(function(){$(".moreItemsMenu").toggle("fast")}),$(".setting").hover(function(){$(".setting-menu").toggle("fast")})}},o={subjectChange:function(){$(".navigation div [tablabel]").each(function(e){var n=$(this);$(this).click(function(){$("div.show").removeClass("show"),$("div.tabBackground").removeClass("tabBackground"),n.addClass("tabBackground"),$(".nav-artical [page]").eq(e).addClass("show")})})},myFocus:function(){$(".web").hover(function(){$(".select").toggle(0)})},video:function(){$(".video1").hover(function(){$(".video1 i:nth-child(1)").toggle("fast"),$(".video1 i:nth-child(2)").toggle("fast")}),$(".video2").hover(function(){$(".video2 i:nth-child(1)").toggle("fast"),$(".video2 i:nth-child(2)").toggle("fast")})},tool:function(){$(".tool-icon").hover(function(){$(".tool-icon1").toggle(0),$(".tool-icon2").toggle(0)})}};return{getInstance:function(){return n||(n=e()),n}}}();page.getInstance().pageInit();