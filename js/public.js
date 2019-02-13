/**
 * Created by ly on 2016/12/26.
 */

$(function(){

    $(".simSel").hover(function(){
        $(this).find(".simSelHide").stop().slideDown(100);
    },function(){
        $(this).find(".simSelHide").stop().slideUp(100);
    })
    $(".moduleTitMore").hover(function(){
        $(this).find(".simSelHide").stop().slideDown(100);
    },function(){
        $(this).find(".simSelHide").stop().slideUp(100);
    })   
    $(document).on("click",".simSelHide li",function(){
         var selOption = $(this).text();
         //console.log(selOption);
        $(this).parent("ul").stop().slideUp(100).siblings("span").text(selOption);
    })

})



var argiObj = {
    link:function(href){        
        window.location.href = href;
    }
}


$(function(){
    //下来复选框的点击
        $('.simSelLayer .selList li').on('click',function(e){
            $(this).toggleClass('active');
            return false;
        });
       
        $("#selectAll").click(function(){
            if($(this).prop("checked")){
                $(".simLevelSel .selList li").addClass('active');
            }else{
                $(".simLevelSel .selList li").removeClass('active');
            }
        });
        $("#selectAll2").click(function(){
            if($(this).prop("checked")){
                $(".simAllSel .selList li").addClass('active');
            }else{
                $(".simAllSel .selList li").removeClass('active');
            }
        });
        $(".simSelChecked").hover(function(){
            $(this).addClass('active');
        },function(){
            $(this).removeClass('active');
        });
        $(".selHeader .button").on('click',function(){
            $('.simSelChecked').removeClass('active');
            return false;
        });

})