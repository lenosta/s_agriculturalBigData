/**
 * Created by ly on 2017/1/13.
 */

$(function(){
    $("#reenCx").click(function(){
        //var opt = {value:Math.round(Math.random())+80};
        var dashboard = d3Charts.chart()
        // 背景设置
            .width('100%')
            .height(115)
            .backgroundColor('100%')
            // 中心数值文字设置
            .centerTextValue('88')
            .centerTextValueColor('yellow')
            .centerTextValueFontSize(40)
            // 中心箭头线设置
            // 中心文本文字设置
            .centerTextTitle('优')
            .centerTextTitleColor('yellow')
            .centerTextTitleFontSize(30)
            .centerArrowLineX1(75)
            .centerArrowLineX2(75)
            // 内轨轨道设置
            .orbitColorIn('#ccc')
            .scaleColor('#4b6692')
        $(".d3-dashboard").children("svg").remove();
        d3.select('.d3-dashboard').call(dashboard);


        charts.init({id:836,container:"grade-model",option:{
            series: [
                {
                    data: [
                        {
                            value: [80, 62, 64, 68, 79, 71],
                            name: '全部'
                        }
                    ]
                }
            ]

        }});

        charts.init({id:835,container:"renchengqu",option:{
            series : [
                {
                    data:[
                        {
                            value:120,
                            name:'A级企业'
                        },
                        {
                            value:245,
                            name:'B级企业'
                        },
                        {
                            value:405,
                            name:'C级企业'
                        },
                        {
                            value:380,
                            name:'D级企业'
                        }

                    ]

                }
            ]
        }});

        var htmlqy;
        $("#dsjqy").html("");
        var htmlqy = '<div class="rencheng-row">'+
                '<div>'+
                '<span>A级企业：</span>'+
                '<span>120家</span>'+
                '</div>'+
                '<div>'+
                '<span>B级企业：</span>'+
                '<span>245家</span>'+
                '</div>'+
                '</div>'+
                '<div class="rencheng-row">'+
                '<div>'+
                '<span>C级企业：</span>'+
                '<span>405家</span>'+
                '</div>'+
                '<div>'+
                '<span>D级企业：</span>'+
                '<span>380家</span>'+
                '</div>'+
                '</div>';
        $("#dsjqy").html(htmlqy);

        $("#qyzs").html("1150");

    })
})
