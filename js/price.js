/**
 * Created by 79326 on 2017/1/13.
 */
$(function(){
    /*var winH = $(window).height();
    if(winH <= 760){
        $(".contMap").height(480);
    }else{
        $(".contMap").height(winH - 280);
    }*/

    var cmap = showMap('china', 1);

    $(".moduleTitMore2 li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".mapChina").click(function(){
        var cmap = showMap('china', 1);
    });
    $(".mapShandong").click(function(){
        showMap("山东",2);
    });
    var prmodule1Cont = charts.init({id:857,container:"prmodule1Cont",option:{
        series: [
            {
                name:'实际平均价格',
                type:'line',
                symbolSize:8,
                data:[7.17,7.4,7.5,7.6,7.5,7.7]

            },
            {
                data:[, , , , ,7.7,7.8]
            }
        ]
    }});
    var prmodule2Cont = charts.init({id:862,container:"prmodule2Cont",option:{}});
    var prmodule3Cont = charts.init({id:858,container:"prmodule3Cont",option:{
        series: {

            data:[60,65,70,75,80,85,90,95]
        }
    }});




    var prmodule4Cont = charts.init({id:859,container:"prmodule4Cont",option:{

        xAxis: {
            data : ['黑鱼','丝瓜','羊肉','油麦菜','带鱼','牛肉','西兰花']
        },


        series: {
            itemStyle: {
                emphasis: {
                    barBorderColor: 'rgba(255, 0, 0,.6)',
                    color: 'rgba(255, 0, 0,.6)'
                }
            },
            data: [6,5,3, 3, 3,  2,1]
        }
    }});
    var prmodule5Cont = charts.init({id:860,container:"prmodule5Cont",option:{
        series: [{
            name:'价格季节波动趋势',
            type:'line',
            smooth: true,
            symbolSize:0,
            data:[0.412,0.16,-0.09,-0.24,-0.15,-0.09,-0.06,-0.06,-0.04,-0.01,0.05,0.13],
        }]

    }});

});

var data = {
    points: [
        {
            "title": "济南维尔康肉类水产品发市场",
            "sf": "山东",
            "log": "117.024967",
            "lat": "36.682785",
            sp1: '大蒜',
            sp1zf: 'zhang',
            sp1zfz: 5,
            sp2: '大白菜',
            sp2zf: 'die',
            sp2zfz: 4,
            sp3: '大虾',
            sp3zf: 'zhang',
            sp3zfz: 3,
            "icon": {
                url: '../images/icon_cd.png',
                hoverUrl:'../images/icon_cd.png',
                width: 40,
                height: 40
            }
        }
        , {
            "title": "山东寿光农产品物流园",
            "sf": "山东",
            "log": "120.505397",
            "lat": "37.635375",
            sp1: '韭菜',
            sp1zf: 'zhang',
            sp1zfz: 7,
            sp2: '黄瓜',
            sp2zf: 'zhang',
            sp2zfz: 5,
            sp3: '尖椒',
            sp3zf: 'zhang',
            sp3zfz: 3.5,
            "icon": {
                url: '../images/icon_cd.png',
                hoverUrl:'../images/icon_cd.png',
                width: 40,
                height: 40
            }
        }
        , {
            "title": "山东省威海市水产品批发市场",
            "sf": "山东",
            "log": "118.721782",
            "lat": "36.898567",
            sp1: '黑鱼',
            sp1zf: 'zhang',
            sp1zfz: 8,
            sp2: '河蟹',
            sp2zf: 'die',
            sp2zfz: 4.6,
            sp3: '鲫鱼',
            sp3zf: 'die',
            sp3zfz: 3,
            "icon": {
                url: '../images/icon_cd.png',
                hoverUrl:'../images/icon_cd.png',
                width: 40,
                height: 40
            }
        }
        , {
            "title": "山东匡山农产品综合交易市场",
            "sf": "山东",
            "log": "116.271021",
            "lat": "35.077685",
            sp1: '西葫芦',
            sp1zf: 'zhang',
            sp1zfz: 20.2,
            sp2: '猪肉',
            sp2zf: 'zhang',
            sp2zfz: 5.6,
            sp3: '土豆',
            sp3zf: 'die',
            sp3zfz: 4,
            "icon": {
                url: '../images/icon_yj.png',
                hoverUrl:'../images/icon_yj.png',
                width: 120,
                height: 120
            }
        }
        , {
            "title": "山东章丘刁镇蔬菜批发市场",
            "sf": "山东",
            "log": "117.515619",
            "lat": "36.889361",
            sp1: '黄瓜',
            sp1zf: 'zhang',
            sp1zfz: 11,
            sp2: '白条鸡',
            sp2zf: 'die',
            sp2zfz: 4.5,
            sp3: '尖椒',
            sp3zf: 'zhang',
            sp3zfz: 3.5,
            "icon": {
                url: '../images/icon_cd.png',
                hoverUrl:'../images/icon_cd.png',
                width: 40,
                height: 40
            }
        }
        , {
            "title": "山东滨州市滨城区(六街)鲁北无公害蔬菜批发",
            "sf": "山东",
            "log": "118.035077",
            "lat": "37.37459",
            sp1: '韭菜',
            sp1zf: 'zhang',
            sp1zfz: 7,
            sp2: '黄瓜',
            sp2zf: 'zhang',
            sp2zfz: 5,
            sp3: '尖椒',
            sp3zf: 'zhang',
            sp3zfz: 3.5,
            "icon": {
                url: '../images/icon_xd.png',
                hoverUrl:'../images/icon_xd.png',
                width: 40,
                height: 40
            }
        }
    ]
};

function dataOther() {
    var prmodule1Cont = charts.init({id:857,container:"prmodule1Cont",option:{}});
    var prmodule2Cont = charts.init({id:862,container:"prmodule2Cont",option:{}});
    var prmodule3Cont = charts.init({id:858,container:"prmodule3Cont",option:{}});
    var prmodule4Cont = charts.init({id:859,container:"prmodule4Cont",option:{}});
    var prmodule5Cont = charts.init({id:860,container:"prmodule5Cont",option:{}});
}



function clickHandle(event, data, cmap) {
    if (data._type == 'area') {
        var level = cmap.option.level + 1;
        showMap(data.properties.name, level);
    }
    if (data._type == 'point') {
        if (data.sf == '山东') {
            showMap(data.sf,2);
        }
    }

};


function mouseOverHandle(event, data) {
    if (data._type == 'point') {
//console.log(data);
        var rect = event.target.getBoundingClientRect();
        var $tip = $('#map_popOver');
        if (!$tip.length) {
            $tip = $('<div id="map_popOver">');
            $('#map').append($tip);
        }
        $tip.html(popOver(data));
        var offset = $('#map svg').offset();
        $tip.css({
            left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
            top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
            display: 'block'
        });

    }
};


function mouseOutHandle(event, data) {
    if (!$(event.toElement).is('#map_popOver')) {
        $('#map_popOver').css({
            display: 'none'
        });
    }
};



function popOver(param) {
    return '<h4>' + (param.title) + '</h4>' +
        '<div class="fbtit">价格涨跌幅：</div>' +
        '<p class="' + (param.sp1zf) + '"><span class="prpbiaoqian1">' + (param.sp1zfz) + '%</span><span class="prpbiaoqian2">' + (param.sp1) + '<i></i></span></p>' +
        '<p class="' + (param.sp2zf) + '"><span class="prpbiaoqian1">' + (param.sp2zfz) + '%</span><span class="prpbiaoqian2">' + (param.sp2) + '<i></i></span></p>' +
        '<p class="' + (param.sp3zf) + '"><span class="prpbiaoqian1">' + (param.sp3zfz) + '%</span><span class="prpbiaoqian2">' + (param.sp3) + '<i></i></span></p>'
}

commonLib.CMap.config.baseDir = '../geoJson/'

function showMap(name, level) {
    if(level>2){data={}};
    var map = new commonLib.CMap({
        dom: document.getElementById('map'),
        data: data,
        mouseOutHandle: mouseOutHandle,
        mouseOverHandle: mouseOverHandle,
        clickHandle: level <= 2 ? clickHandle : null,
        name: name,
        // areaColor: function(d) {
        //   console.log(d);
        //   return '#f00'
        // },
        level: level == undefined ? 1 : level
    });
    return map;
};


function changeChart857(el)
{
	switch(el)
	{
	case "丝瓜":
	  charts.init({id:857,container:"prmodule1Cont",option:{
        series: [
            {
                name:'实际平均价格',
                type:'line',
                symbolSize:8,
                data:[7.17,7.4,7.5,7.6,7.5,7.7]

            },
            {
                data:[, , , , ,7.7,7.8]
            }
        ]
   	 }});
	  break;
	case "带鱼":
	 charts.init({id:857,container:"prmodule1Cont",option:{
        series: [
            {
                name:'实际平均价格',
                type:'line',
                symbolSize:8,
                data:[9,9.2,9.4,9.6,9.7,9.8]

            },
            {
                data:[, , , , ,9.8,10]
            }
        ]
   	 }});
	  break;
	case "牛肉":
		charts.init({id:857,container:"prmodule1Cont",option:{
        series: [
            {
                name:'实际平均价格',
                type:'line',
                symbolSize:8,
                data:[46,47.4,48.8,50.3,50.8,52.3]

            },
            {
                data:[, , , , ,52.3,54.4]
            }
        ]
   	 }});
	break;
	default:
	  
	}
}


function changeChart859(el){
	switch(el)
	{
	case "涨":
	  charts.init({id:859,container:"prmodule4Cont",option:{
         
          xAxis: {        
                data : ['黑鱼','丝瓜','羊肉','油麦菜','带鱼','牛肉','西兰花']                
          },


         series: {
         		itemStyle: {           
                    emphasis: {
                        barBorderColor: 'rgba(255, 0, 0,.6)',
                        color: 'rgba(255, 0, 0,.6)'
                    }
                },
           
                data: [6,5,3, 3, 3,  2,1]
         }
    }});
	  break;
	case "跌":
	 charts.init({id:859,container:"prmodule4Cont",option:{
         
          xAxis: {        
                data : ['猪肉','土豆','尖椒','白条鸡','扇贝']                
          },


         series: {
         		itemStyle: {           
                    emphasis: {
                        barBorderColor: 'rgba(0, 255, 0,.6)',
                        color: 'rgba(0, 255, 0,.6)'
                    }
                },
           
                data: [-5,-4,-3, -3,-2]
         }
    }});
	  break;

	default:
	  
	}
}



function changeChart860(el)
{
	switch(el)
	{
	case "油麦菜":
	  charts.init({id:860,container:"prmodule5Cont",option:{
          series: [{          
            data:[0.412,0.16,-0.09,-0.24,-0.15,-0.09,-0.06,-0.06,-0.04,-0.01,0.05,0.13],
        }]

    }});
	  break;
	case "带鱼":
	 charts.init({id:860,container:"prmodule5Cont",option:{
          series: [{           
            data:[-0.0027,0.008,-0.0027,-0.014,-0.0027,0.03,0.008,-0.014,-0.0027,0.008,-0.0027,-0.013],
        }]

    }});
	  break;
	case "白条鸡":
		charts.init({id:860,container:"prmodule5Cont",option:{
          series: [{            
            data:[0.1,0.14,0.1,0.014,-0.07,-0.028,-0.028,0.05,0.014,-0.15,-0.07,-0.07],
        }]

    }});
	break;
	default:
	  
	}
}


function changeChart862(el)
{
	switch(el)
	{
	case "丝瓜":
	  charts.init({id:862,container:"prmodule2Cont",option:{
         series: [
            {            
                data: [
                   
                ],           
            },
            {           
                data: [
                    {
                        name : '青岛抚顺路蔬菜副食品批发市场 ', 
                        value: [5.66, 6.7]
                    },
                    {
                        name : '山东宁阳县白马蔬菜批发市场 ', 
                        value: [3.09, 17.94]
                    }
                ]
            },
            {               
                data: [
                    {
                        name : '山东青岛市沧口蔬菜副食品批发市场', value: [-7.64, -28.02]
                    }                   
                ]
            },
            {
                data: [ 
                    {
                        name : '山东济南市堤口果品批发市场', value: [10.1, -10.5]
                    },
                    {
                        name : '山东章丘刁镇蔬菜批发市场', value: [1.67, -9.16]
                    },
                    {
                        name : '山东青岛莱西东庄头蔬菜批发', value: [3.29, -1.45]
                    },
                    {
                        name : '山东临邑县临南蔬菜大市场', value: [9.34, -10.91]
                    },
                    {
                        name : '山东宁津县东崔蔬菜市场合作社', value: [2.86, -1.48]
                    }
                ]
            }
        ]
        }})
	  break;
	case "带鱼":
	 	charts.init({id:862,container:"prmodule2Cont",option:{
         series: [
            {            
                data: [
                   
                ],           
            },
            {           
                data: [
                    {
                        name : '青岛抚顺路蔬菜副食品批发市场 ', 
                        value: [5.66, 6.7]
                    },
                    {
                        name : '山东宁阳县白马蔬菜批发市场 ', 
                        value: [3.09, 17.94]
                    }
                ]
            },
            {               
                data: [
                    {
                        name : '山东青岛市沧口蔬菜副食品批发市场', value: [-7.64, -28.02]
                    }                   
                ]
            },
            {
                data: [ 
                    {
                        name : '山东济南市堤口果品批发市场', value: [10.1, -10.5]
                    },
                    {
                        name : '山东章丘刁镇蔬菜批发市场', value: [1.67, -9.16]
                    },
                    {
                        name : '山东青岛莱西东庄头蔬菜批发', value: [3.29, -1.45]
                    },
                    {
                        name : '山东临邑县临南蔬菜大市场', value: [9.34, -10.91]
                    },
                    {
                        name : '山东宁津县东崔蔬菜市场合作社', value: [2.86, -1.48]
                    }
                ]
            }
        ]
        }})
	  break;
	case "牛肉":
		charts.init({id:862,container:"prmodule2Cont",option:{
         series: [
            {            
                data: [
                   
                ],           
            },
            {           
                data: [
                    {
                        name : '青岛抚顺路蔬菜副食品批发市场 ', 
                        value: [5.66, 6.7]
                    },
                    {
                        name : '山东宁阳县白马蔬菜批发市场 ', 
                        value: [3.09, 17.94]
                    }
                ]
            },
            {               
                data: [
                    {
                        name : '山东青岛市沧口蔬菜副食品批发市场', value: [-7.64, -28.02]
                    }                   
                ]
            },
            {
                data: [ 
                    {
                        name : '山东济南市堤口果品批发市场', value: [10.1, -10.5]
                    },
                    {
                        name : '山东章丘刁镇蔬菜批发市场', value: [1.67, -9.16]
                    },
                    {
                        name : '山东青岛莱西东庄头蔬菜批发', value: [3.29, -1.45]
                    },
                    {
                        name : '山东临邑县临南蔬菜大市场', value: [9.34, -10.91]
                    },
                    {
                        name : '山东宁津县东崔蔬菜市场合作社', value: [2.86, -1.48]
                    }
                ]
            }
        ]
        }})
	break;
	default:
	  charts.init({id:862,container:"prmodule2Cont",option:{
         series: [
            {            
                data: [
                   
                ],           
            },
            {           
                data: [
                    {
                        name : '青岛抚顺路蔬菜副食品批发市场 ', 
                        value: [5.66, 6.7]
                    },
                    {
                        name : '山东宁阳县白马蔬菜批发市场 ', 
                        value: [3.09, 17.94]
                    }
                ]
            },
            {               
                data: [
                    {
                        name : '山东青岛市沧口蔬菜副食品批发市场', value: [-7.64, -28.02]
                    }                   
                ]
            },
            {
                data: [ 
                    {
                        name : '山东济南市堤口果品批发市场', value: [10.1, -10.5]
                    },
                    {
                        name : '山东章丘刁镇蔬菜批发市场', value: [1.67, -9.16]
                    },
                    {
                        name : '山东青岛莱西东庄头蔬菜批发', value: [3.29, -1.45]
                    },
                    {
                        name : '山东临邑县临南蔬菜大市场', value: [9.34, -10.91]
                    },
                    {
                        name : '山东宁津县东崔蔬菜市场合作社', value: [2.86, -1.48]
                    }
                ]
            }
        ]
        }})
	}
}

function selectTime(){
	changeData();
}


function changeData(){
	changeChart857('丝瓜');
	changeChart859('涨');
	changeChart860('油麦菜');
	changeChart862();
	charts.init({id:858,container:"prmodule3Cont",option:{
            series: {
           
                data:[60,65,70,75,80,85,90,95]
             }
    }});
}

