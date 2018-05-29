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
    })


})