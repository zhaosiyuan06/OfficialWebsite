/**
 * Created by Administrator on 2017/7/13.
 */
$(function () {
//   导航栏
    $('.header_box span').on('mouseenter mouseleave', function (e) {
        $(this).find('ul').slideToggle()
        e.preventDefault();
    })
    //主营业务
    // $('.con1').on("mouseenter", function(){
    //     $(this).find('.con_box2').slideDown()
    // })
    // $('.con1').on("mouseleave", function(){
    //     $(this).find('.con_box2').slideUp()
    // })

$(".video_zhezhao img").on("click",function(){
    $(".video_zhezhao").css("display","none")
    $(".videoplay_Box video")[0].pause()
})
    $(".shop_box  .shop_module .col-md-8  .zhe img").on("click",function(){
        $(".video_zhezhao").css("display","block")
        var dataSrc=$(this).attr("data-src");
        $(".videoplay_Box video").attr("src",dataSrc)
        $(".videoplay_Box video")[0].play()
    })

//版本选项
    $(".sale_sec_box .col-md-8 span").on("click",function(){
        $(this).addClass("spans").siblings().removeClass("spans");
    })
    setInterval(function () {
        setInterScroll()
    }, 500)
    function setInterScroll(){
        //监听鼠标滚动，设置导航栏背景色
        $(window).scroll(function() {
            var s =$(window).scrollTop();
            if (s>=50) {//782是导航条离页面顶部的距离（px）
                $(".top_box").addClass("position_top")
            }
            else{
                $('.top_box').removeClass('position_top');
            }
        })
    }

//    软件与服务
//     function xuan(TabBox,lis){
//         $(TabBox).on("mouseenter",function(){
//             var index =$(this).index();
//             $(lis).removeClass("active")
//             $(lis).eq(index).addClass("active").siblings().removeClass("active");
//         })
//         // $(TabBox).on("mouseleave",function(){
//         //     var index =$(this).index();
//         //     $(lis).eq(index).removeClass("active")
//         // })
//     }
//     xuan(".first li",".second ul")
//     xuan(".second ul li",".third ul")


    // $(".first li").on("mouseenter",function(){
    //     $(this).children(".second").addClass("active").siblings().removeClass("active");
    // })
})
