/**
 * Created by 建利 on 2017/9/21.
 */
$(function(){
    //手机轮播
    $(".shouji_right").click(function(){
        $(".shouji_pic ul").animate({"margin-left":-1170})
    });
    $(".shouji_left").click(function(){
        $(".shouji_pic ul").animate({"margin-left":0})
    });


    //导航栏
    $(".list li").hover(function(){
        $(this).children("div").stop().slideToggle()
    });

    //轮播图
    $(".list_min li").click(function(){
        var i=$(this).index();
        s=i;
        $(".list1 li").eq(i).fadeIn().siblings().hide();
        $(this).addClass("dian").siblings().removeClass("dian")
    });
    var s=0;
    $(".banner_left").click(
        function(){
            if(s==0){s=4}
            s=s-1;
            $(".list1 li").eq(s).fadeIn().siblings().hide();
            $(".list_min li").eq(s).addClass("dian").siblings().removeClass("dian");
        }
    );
    $(".banner_right").click(
        function(){
            s=s+1;
            if(s==4){s=0}
            $(".list1 li").eq(s).fadeIn().siblings().hide();
            $(".list_min li").eq(s).addClass("dian").siblings().removeClass("dian");
        }
    );
    setInterval(function(){
        s=s+1;
        if(s==4){s=0}
        $(".list1 li").eq(s).fadeIn().siblings().hide();
        $(".list_min>li").eq(s).addClass("dian").siblings().removeClass("dian")
    },3000);

    //二级菜单
    $(".nav>ul>li").hover(function(){
        $(this).children("div").stop().toggle();
    });

    //主体头部
    $(".main_top_left li").hover(function(){
        $(this).addClass("bian").siblings().removeClass("bian")
    });

    //热门产品
    $(".chanpin li").hover(function(){
        $(this).find(".goumai1").show()
    },function(){
        $(this).find(".goumai1").hide()
    });


    //浏览器滚动
    $(window).scroll(
        function(){
            //垂直滚动条滚动的距离
            var a=$(window).scrollTop();

            console.log(a)
            //判断滚动条滚动的距离
            if(a>=140){
                $(".top_div").show();
            }else if(a<140){
                $(".top_div").hide();
            }
            if(a>=140&&a<=700){
                $(".main_top1_left").removeClass("fixed2").addClass("fixed1");
            }
            if(a<140){
                $(".main_top1_left").removeClass("fixed2").removeClass("fixed1");
            }
            if(a>700){
                $(".main_top1_left").removeClass("fixed1").addClass("fixed2")
            }
        }
    );
    $(".main_top1_left li").click(function(){
        var img=$(this).children("img").attr("src");
        $(".pic").attr("src",img);
        $(this).addClass("biankuang").siblings().removeClass("biankuang")
    });


    $(".taocan li").click(function(){
        var tc=$(this).index();
        $(".pack div").eq(tc).show().siblings().hide();
        $(this).addClass("biankuang").siblings().removeClass("biankuang")
    });


    $(".baozhang").click(function() {
        $(this).toggleClass("biankuang");
    });


    $(".taocan li:not(2)").click(function(){
        $("#huabei").hide();
    });
    $(".taocan li:last").click(function(){
        $("#huabei").show();
    });

    $(".deta_top li").click(function(){
        var xq=$(this).index();
        $(".box>div").eq(xq).show().siblings().hide()
    })





});
