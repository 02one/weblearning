
//===========采用单例模式============
// 好处：1，减少对全局空间的污染。通过这种模式，暴露在全局空间的只有page这个变量，不像之前直接就写
//         很多变量或者函数。
//      2，便于合作开发。多人协作完成一个网站，肯定是有很多js文件，这样难免会有重名现象，所以采用
//         单一模式确保变量安全。
//     3，便于维护管理。变量中可以通过功能或者位置划分模块。
var page = (function() {
    var instantiated;
    var top = {
            //天气报道
            findWeather: function() {
                var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
                $.getScript(cityUrl, function(script, textStatus, jqXHR) {
                    var citytq = remote_ip_info.city; // 获取城市
                    var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
                    $.ajax({
                        url: url,
                        dataType: "script",
                        scriptCharset: "gbk",
                        success: function(data) {
                            var _w = window.SWther.w[citytq][0];
                            var _f = _w.f1 + "_0.png";
                            if (new Date().getHours() > 17) {
                                _f = _w.f2 + "_1.png";
                            }
                            var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f + "' />";
                            var tq = citytq + "  " + img + "  " + _w.s1 + "  " + _w.t1 + "℃～" + _w.t2 + "℃ ";

                            $('#weather').html(tq);
                        }
                    });
                });
            },
            // 换肤的实现
            changeTheme: {
                //换肤下拉
                dropdownMenu: function() {

                    $(".changeTheme").click(function() {
                        $(".bkgroundcolor").slideToggle();
                    });
                    $(".slideU").click(function() {
                        $(".bkgroundcolor").slideToggle();

                    });
                },
                //换肤主题页面切换
                themeSelect: function() {

                    $(".themeSelect [labelTab]").each(function(index) {
                        var label = $(this);
                        $(this).click(function() {
                            // console.log('test');
                            $(".themeSelect ul li span").removeClass('show');
                            $(".themeSelect ul li span").eq(index).addClass("show");
                            $(".imgSelect [themeTarget]").removeClass("show");
                            $(".imgSelect [themeTarget]").eq(index).addClass("show");
                        });
                    });
                },
                // 换肤切换效果
                themeView: function() {

                    $(".imgTheme1 ul li").each(function(index) {

                        $(this).mouseenter(function() {
                            switch (index) {
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
                                   
                            }

                        }).mouseout(function(event) {
                            $(".previewContainer").css({
                                background: '#fff'
                            });
                        });

                        $(this).click(function() {
                            switch (index) {
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

                                   
                            }
                        });
                    });
                    $(".imgTheme2 ul li").each(function(index) {

                        $(this).mouseenter(function() {
                            switch (index) {
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
                                    
                            }

                        }).mouseout(function(event) {
                            $(".previewContainer").css({
                                background: '#fff'
                            });
                        });

                        $(this).click(function() {
                            switch (index) {
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

                                    
                            }
                        });
                    });
                }

            },
            // '更多产品'及'设置'的下拉实现
            itemsDropdown: function() {
                var image = $(".more-items");
                var subject = $(".setting");

                $(".more-items").hover(function() {
                    var ulNode = $(".moreItemsMenu");
                    ulNode.toggle("fast");
                });
                $(".setting").hover(function() {
                    var ulNode1 = $(".setting-menu");
                    // console.log(ulNode1);
                    ulNode1.toggle("fast");
                });
            }

        },
        middle = {
        },
        bottom = {
            // '我的关注'，'推荐','导航','视频',等栏目切换
            subjectChange: function() {
                $(".navigation div [tablabel]").each(function(index) {
                    var node = $(this);
                    $(this).click(function() {
                        $("div.show").removeClass("show");
                        $("div.tabBackground").removeClass("tabBackground");
                        node.addClass("tabBackground");
                        $(".nav-artical [page]").eq(index).addClass("show");
                    });
                });
            },
            // '我的关注'栏目
            myFocus: function() {
                // 出现编辑框
                $(".web").hover(function() {
                    $(".select").toggle(0);
                });

            },
            // ‘视频’栏目
            video: function() {
                $(".video1").hover(function() {
                    $(".video1 i:nth-child(1)").toggle("fast");
                    $(".video1 i:nth-child(2)").toggle("fast");
                });
                $(".video2").hover(function() {
                    $(".video2 i:nth-child(1)").toggle("fast");
                    $(".video2 i:nth-child(2)").toggle("fast");
                });

            },
            // 小工具图标
            tool: function() {
                $(".tool-icon").hover(function() {
                    $(".tool-icon1").toggle(0);
                    $(".tool-icon2").toggle(0);
                });
            }
        };

    function init() {
        return {
            pageInit: function() {
                // 头部各组件初始化
                top.findWeather();
                top.changeTheme.dropdownMenu();
                top.changeTheme.themeSelect();
                top.changeTheme.themeView();
                top.itemsDropdown();
                // 底部各组件初始化
                bottom.subjectChange();
                bottom.myFocus();
                bottom.video();
                bottom.tool();
            }

        };

    }
    return {
        getInstance: function() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };

})();

page.getInstance().pageInit();




// ===========普通方法============
//天气报道
// function findWeather() {
//     var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
//     $.getScript(cityUrl, function(script, textStatus, jqXHR) {
//         var citytq = remote_ip_info.city; // 获取城市
//         var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
//         $.ajax({
//             url: url,
//             dataType: "script",
//             scriptCharset: "gbk",
//             success: function(data) {
//                 var _w = window.SWther.w[citytq][0];
//                 var _f = _w.f1 + "_0.png";
//                 if (new Date().getHours() > 17) {
//                     _f = _w.f2 + "_1.png";
//                 }
//                 var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f + "' />";
//                 var tq = citytq + "  " + img + "  " + _w.s1 + "  " + _w.t1 + "℃～" + _w.t2 + "℃ ";

//                 $('#weather').html(tq);
//             }
//         });
//     });
// }
//下拉菜单实现
// function dropdownUp() {
//     var image = $(".more-items");
//     var subject = $(".setting");
//     var timeoutid;
//     // console.log(image);
//     $(".more-items").hover(function() {
//         var ulNode = $(".moreItemsMenu");
//         ulNode.toggle("fast");
//     });
//     $(".setting").hover(function() {
//             var ulNode1 = $(".setting-menu");
//             // console.log(ulNode1);
//             ulNode1.toggle("fast");
//     });
//     //换肤下拉
//     $(".changeTheme").click(function() {
//         $(".bkgroundcolor").slideToggle();
//     });
//     $(".slideU").click(function() {
//         $(".bkgroundcolor").slideToggle();
//     });

// }
//标签切换
// function tabPage() {
//     //'关注'，'推荐','导航','视频',等栏目切换
//     $(".navigation div [tablabel]").each(function(index) {
//         var node = $(this);
//         $(this).click(function() {
//             $("div.show").removeClass("show");
//             $("div.tabBackground").removeClass("tabBackground");
//             node.addClass("tabBackground");
//             $(".nav-artical [page]").eq(index).addClass("show");
//         })
//     });
//     //换肤页面标签
//     $(".themeSelect [labelTab]").each(function(index) {
//         var label = $(this);
//         $(this).click(function() {
//             // console.log('test');
//             $(".themeSelect ul li span").removeClass('show');
//             $(".themeSelect ul li span").eq(index).addClass("show");
//             $(".imgSelect [themeTarget]").removeClass("show");
//             $(".imgSelect [themeTarget]").eq(index).addClass("show");
//         });
//     })
// }
//鼠标划过触发
// function mseover() {
//     $(".video1").hover(function() {
//         $(".video1 i:nth-child(1)").toggle("fast");
//         $(".video1 i:nth-child(2)").toggle("fast");
//     });
//     $(".video2").hover(function() {
//         $(".video2 i:nth-child(1)").toggle("fast");
//         $(".video2 i:nth-child(2)").toggle("fast");
//     });
//     $(".tool-icon").hover(function() {
//         $(".tool-icon1").toggle(0);
//         $(".tool-icon2").toggle(0);
//     });
//     $(".web").hover(function() {
//         $(".select").toggle(0);
//     });
//     //换肤变化效果
//     $(".imgTheme1 ul li").each(function(index) {

//         $(this).mouseenter(function() {
//             switch (index) {
//                 case 0:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms1.jpg)'
//                     });
//                     break;
//                 case 1:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms2.jpg)'
//                     });
//                     break;
//                 case 2:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms3.jpg)'
//                     });
//                     break;
//                 case 3:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms4.jpg)'
//                     });
//                     break;
//                 case 4:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms5.jpg)'
//                     });
//                     break;
//                 case 5:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms6.jpg)'
//                     });
//                     break;
//                     break;
//             }

//         }).mouseout(function(event) {
//             $(".previewContainer").css({
//                 background: '#fff'
//             });
//         });

//         $(this).click(function() {
//             switch (index) {
//                 case 0:
//                     $("body").css({
//                         background: '#FFF68F'
//                     });
//                     break;
//                 case 1:
//                     $("body").css({
//                         background: ' #FFEFDB'
//                     });
//                     break;
//                 case 2:
//                     $("body").css({
//                         background: ' #FFC0CB'
//                     });
//                     break;
//                 case 3:
//                     $("body").css({
//                         background: ' #FAEBD7'
//                     });
//                     break;
//                 case 4:
//                     $("body").css({
//                         background: ' #EEE8CD'
//                     });
//                     break;
//                 case 5:
//                     $("body").css({
//                         background: ' #EED5D2'
//                     });
//                     break;

//                     break;
//             }
//         });
//     });
//     $(".imgTheme2 ul li").each(function(index) {

//         $(this).mouseenter(function() {
//             switch (index) {
//                 case 0:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms1.jpg)'
//                     });
//                     break;
//                 case 1:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms2.jpg)'
//                     });
//                     break;
//                 case 2:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms3.jpg)'
//                     });
//                     break;
//                 case 3:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms4.jpg)'
//                     });
//                     break;
//                 case 4:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms5.jpg)'
//                     });
//                     break;
//                 case 5:
//                     $(".previewContainer").css({
//                         background: 'url(images/ms6.jpg)'
//                     });
//                     break;
//                     break;
//             }

//         }).mouseout(function(event) {
//             $(".previewContainer").css({
//                 background: '#fff'
//             });
//         });

//         $(this).click(function() {
//             switch (index) {
//                 case 0:
//                     $("body").css({
//                         background: '#FFF68F'
//                     });
//                     break;
//                 case 1:
//                     $("body").css({
//                         background: ' #FFEFDB'
//                     });
//                     break;
//                 case 2:
//                     $("body").css({
//                         background: ' #FFC0CB'
//                     });
//                     break;
//                 case 3:
//                     $("body").css({
//                         background: ' #FAEBD7'
//                     });
//                     break;
//                 case 4:
//                     $("body").css({
//                         background: ' #EEE8CD'
//                     });
//                     break;
//                 case 5:
//                     $("body").css({
//                         background: ' #EED5D2'
//                     });
//                     break;

//                     break;
//             }
//         });
//     });
// }

// $(document).ready(function() {
//     findWeather();
//     dropdownUp();
//     tabPage();
//     mseover();
// });
