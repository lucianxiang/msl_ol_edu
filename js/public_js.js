$(document).ready(function () {
    /*返回顶部*/
    function gotoTop(minHeight){
        $("#gotoTop").hide();
        /*   $("#gotoTop").on("click",function () {
               alert(111)
               console.log(111)
           });*/
        // 定义点击返回顶部图标后向上滚动的动画
        $("#gotoTop").click(
            function(){
                // $('html,body').animate({scrollTop:'0px'},'slow');
                $(".page_container").animate({scrollTop:'0px'},'slow');
            });

        // 获取页面的最小高度，无传入值则默认为600像素
        minHeight? minHeight = minHeight:minHeight = 600;

        // 为窗口的scroll事件绑定处理函数
        $(".page_container").scroll(function(){

            // 获取窗口的滚动条的垂直滚动距离
            var s = $(".page_container").scrollTop();

            // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
            if( s > minHeight){
                $("#gotoTop").fadeIn(500);
            }else{
                $("#gotoTop").fadeOut(500);
            };
        });
    };
    /*导航菜单功能*/
    /*进入页面默认关闭遮罩和菜单*/
    $(".page_nav_menu_shadow").hide();
    $(".page_nav_menu").hide();
    function click_nav(){

        $(".nav_toggle").on("click",function () {
            $(".page_nav_menu_shadow").show();
            $(".page_nav_menu").show();
        });
        $(".page_nav_menu_shadow").on("click",function () {
            $(".page_nav_menu_shadow").hide();
            $(".page_nav_menu").hide();
        });
    }
    /*运行*/
    gotoTop();
    click_nav();
});