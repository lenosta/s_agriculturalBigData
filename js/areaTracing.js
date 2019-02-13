$(document).ready(function () {
    var winH = $(window).height();
    var module6H = $(".module6").height();

    //if(winH <= 600 + module6H){
    //    $("body").height(520 + module6H);
    //}else{
    //    $("body").height(winH - 80);
    //};
    $("body").height(winH - 80);
    $("body").height(1000);
    $(".leftBar li").removeClass("active").eq(3).addClass("active");
    $(".headerR_l").hide();
    var _charts1 = charts.init({
        id: 851, container: "chart1", option: {}
    });
    refurbishChart();


});

function selectTime(dp) {
    var dateStr = dp.cal.getNewDateStr();
    refurbishChart()
};

function selectArea(areaName){
    if(areaName=="全国"){
        mapChina("china");
    };
    if(areaName=="山东"){
        mapChina("山东");
    };

}

function refurbishChart() {
    var _charts2 = charts.init({
        id: 861, container: "chart2", option: {}
    });
    var _charts3 = charts.init({
        id: 847, container: "chart3", option: {
            series: [{
                data: [
                    {value: 0.15, name: '粮油'},
                    {value: 0.25, name: '蔬菜'},
                    {value: 0.23, name: '果品'},
                    {value: 0.14, name: '水产品'},
                    {value: 0.2, name: '畜禽'},
                    {value: 0.03, name: '其他'}

                ]
            }]
        }
    });
    var _charts4 = charts.init({
        id: 848, container: "chart4", option: {
            series: [{
                data: [
                    {value: 0.11, name: '大学食堂'},
                    {value: 0.14, name: '饭店'},
                    {value: 0.19, name: '加工企业'},
                    {value: 0.06, name: '企业单位'},
                    {value: 0.29, name: '商超'},
                    {value: 0.04, name: '政府采购'},
                    {value: 0.17, name: '其他'}

                ]
            }]
        }
    });
    var _charts5 = charts.init({
        id: 849, container: "chart5", option: {
            series: [
                {
                    data: [
                        {
                            value: 15000,
                            name: '商超'
                        },
                        {
                            value: 75000,
                            name: '农贸市场'
                        },
                        {
                            value: 7500,
                            name: '生鲜电商'
                        },
                        {
                            value: 12000,
                            name: '其他'
                        }
                    ]
                }
            ]
        }
    });
    mapChina("china")


    _charts3.on("click", function (param) {
        var name = param.name;
        $("#pz").text(name);

        if (name === "蔬菜") {
            charts.init({
                id: 848, container: "chart4", option: {
                    series: [{
                        data: [
                            {value: 0.12, name: '大学食堂'},
                            {value: 0.15, name: '饭店'},
                            {value: 0.2, name: '加工企业'},
                            {value: 0.05, name: '企业单位'},
                            {value: 0.3, name: '商超'},
                            {value: 0.03, name: '政府采购'},
                            {value: 0.15, name: '其他'}

                        ]
                    }]
                }
            });
        }
        else {
            charts.init({
                id: 848, container: "chart4", option: {
                    series: [{
                        data: [
                            {value: 0.11, name: '大学食堂'},
                            {value: 0.14, name: '饭店'},
                            {value: 0.19, name: '加工企业'},
                            {value: 0.06, name: '企业单位'},
                            {value: 0.29, name: '商超'},
                            {value: 0.04, name: '政府采购'},
                            {value: 0.17, name: '其他'}
                        ]
                    }]
                }
            });
        }
    })
}


//中间地图初始化
function mapChina(areaName) {
    function randomData() {
        var rd = Math.round(Math.random() * 5);
        return rd == 0 ? 1 : rd;
    }

    var data = {
        points: [
            {
                "title": "济南维尔康肉类水产品发市场",
                "log": "117.024967",
                "lat": "36.682785",
                cp: '肉类',
                mj: 500,
                zhzs: 90,
                jccs: 10,

                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            }, {
                "title": "山东省青岛市城阳蔬菜水产品批发市场",
                "log": "120.385339",
                "lat": "36.306948",
                cp: '果蔬',
                mj: 400,
                zhzs: 80,
                jccs: 8,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "乌鲁木齐北园春农产品中心批发市场",
                "log": "87.557026",
                "lat": "43.820729",
                cp: '果蔬',
                mj: 100,
                zhzs: 70,
                jccs: 4,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "北京市新发地农产品批发市场 ",
                "log": "116.349205",
                "lat": "39.817909",
                cp: '综合',
                mj: 600,
                zhzs: 80,
                jccs: 50,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "东莞市信立实业有限公司 ",
                "log": "113.80231",
                "lat": "22.94144",
                cp: '肉类',
                mj: 100,
                zhzs: 60,
                jccs: 2,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "陕西西部欣桥农产品物流中心",
                "log": "108.849099",
                "lat": "34.254847",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "北京市新发地农产品批发市场",
                "log": "116.349205",
                "lat": "39.817909",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "南京农副产品物流中心",
                "log": "118.891685",
                "lat": "31.994928",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "河南万邦国际农产品物流股份有限公司",
                "log": "113.952166",
                "lat": "34.697818",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                sf: '河南',
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "红星实业集团有限公司红星农副产品大市场",
                "log": "129.251919",
                "lat": "48.29802",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "武汉白沙洲农副产品大市场",
                "log": "114.274088",
                "lat": "30.470888",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "江苏凌家塘农副产品批发市场",
                "log": "119.908601",
                "lat": "31.7749",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "长沙马王堆农产品股份有限公司",
                "log": "113.041076",
                "lat": "28.201874",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "两湖绿谷农产品交易物流中心",
                "log": "116.48062",
                "lat": "40.030092",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "北京锦绣大地农副产品批发市场",
                "log": "116.234823",
                "lat": "39.933787",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "重庆观音桥市场",
                "log": "106.530635",
                "lat": "29.544606",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "苏州市南环桥市场",
                "log": "120.653816",
                "lat": "31.287201",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "南昌深圳农产品中心批发市场",
                "log": "115.937754",
                "lat": "28.61416",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "深圳市海吉星国际农产品物流管理有限公司",
                "log": "114.165023",
                "lat": "22.653428",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "哈尔滨哈达农副产品股份有限公司",
                "log": "126.62534",
                "lat": "45.685485",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "上海浦南农副产品批发市场",
                "log": "121.325014",
                "lat": "30.962852",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "沈阳副食集团",
                "log": "123.43455",
                "lat": "41.815709",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "内蒙古食全食美股份有限公司",
                "log": "116.423502",
                "lat": "39.782158",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "无锡天鹏菜篮子工程有限公司",
                "log": "120.320644",
                "lat": "31.598895",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "陕西西部欣桥农产品物流中心",
                "log": "108.849099",
                "lat": "34.254847",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "陕西农产品批发市场",
                "log": "108.849099",
                "lat": "34.254847",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "成都农产品中心批发市场",
                "log": "104.027936",
                "lat": "30.571478",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "深圳市福田农产品批发市场",
                "log": "114.041929",
                "lat": "22.568357",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "河北唐山市金匙荷花坑市场",
                "log": "118.224496",
                "lat": "39.624413",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "东莞市江南市场",
                "log": "113.763434",
                "lat": "23.043024",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "北京八里桥农产品中心批发市场",
                "log": "116.648598",
                "lat": "39.920765",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "广东省汕头市农副产品批发中心市场",
                "log": "116.732041",
                "lat": "23.421591",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "乌鲁木齐北园春农产品中心批发市场",
                "log": "87.557026",
                "lat": "43.820729",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            },
            {
                "title": "柳州市柳邕农副产品批发市场",
                "log": "109.399011",
                "lat": "24.291562",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
                "icon": {
                    url: '../images/icon_1.png',
                    width: 50,
                    height: 50,
                    hoverUrl: '../images/icon_2.png'
                }
            }
        ]
    };
if(areaName=="山东"){
    data={};
}
    function clickHandle(event, data) {

        if (data._type == 'area') {
            if(!data.properties.childNum){return;};
            shownextMap(data.properties.name, true);

        }
        if (data._type == 'point') {
           // if (data.sf == '河南') {
                var _charts3 = charts.init({
                    id: 847, container: "chart3", option: {
                        series: [{
                            data: [
                                {value: 0.15, name: '粮油'},
                                {value: 0.25, name: '蔬菜'},
                                {value: 0.23, name: '果品'},
                                {value: 0.14, name: '水产品'},
                                {value: 0.2, name: '畜禽'},
                                {value: 0.03, name: '其他'}

                            ]
                        }]
                    }
                });
            _charts3.on("click", function (param) {
                var name = param.name;
                $("#pz").text(name);

                if (name === "蔬菜") {
                    charts.init({
                        id: 848, container: "chart4", option: {
                            series: [{
                                data: [
                                    {value: 0.12, name: '大学食堂'},
                                    {value: 0.15, name: '饭店'},
                                    {value: 0.2, name: '加工企业'},
                                    {value: 0.05, name: '企业单位'},
                                    {value: 0.3, name: '商超'},
                                    {value: 0.03, name: '政府采购'},
                                    {value: 0.15, name: '其他'}

                                ]
                            }]
                        }
                    });
                }
                else {
                    charts.init({
                        id: 848, container: "chart4", option: {
                            series: [{
                                data: [
                                    {value: 0.11, name: '大学食堂'},
                                    {value: 0.14, name: '饭店'},
                                    {value: 0.19, name: '加工企业'},
                                    {value: 0.06, name: '企业单位'},
                                    {value: 0.29, name: '商超'},
                                    {value: 0.04, name: '政府采购'},
                                    {value: 0.17, name: '其他'}
                                ]
                            }]
                        }
                    });
                }
            });
                var _charts4 = charts.init({
                    id: 848, container: "chart4", option: {
                        series: [{
                            data: [
                                {value: 0.11, name: '大学食堂'},
                                {value: 0.14, name: '饭店'},
                                {value: 0.19, name: '加工企业'},
                                {value: 0.06, name: '企业单位'},
                                {value: 0.29, name: '商超'},
                                {value: 0.04, name: '政府采购'},
                                {value: 0.17, name: '其他'}

                            ]
                        }]
                    }
                });
            }
        //}


    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
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
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
    }

    function popOver(param) {
        return '<h4>' + (param.title) + '</h4>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, isDrill) {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: data,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });
        return map;
    }


    function shownextMap(name, isDrill) {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: {},
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });
        return map;
    }

    var cmap = showMap(areaName, true);
}

