$(function(){

    // 返回顶部图标显示与隐藏
    $(window).scroll(function(){
        if ($(window).scrollTop()>100) {
            $(".go-top").show();
        } else {
            $(".go-top").hide();
        }
    });
    
    // 返回顶部
    $(".go-top").click(function(){
        $("body,html").animate({scrollTop:0},300);
    });

    // Tab切换
    $(".header").on("click",".nav-list li",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // 侧边菜单显示与隐藏
    $(".btn-sidebar").click(function(){
        showSideBar();
    });

    $(".mask").click(function () {
        hideSideBar();
    });

    //显示
    function showSideBar(){
        $(".mask").fadeIn();
        $(".side-bar").animate({right:"0"},300);
    }
    // 隐藏
    function hideSideBar() {
        $(".mask").fadeOut();
        $(".side-bar").animate({right:"-260px"},300);
    }


})