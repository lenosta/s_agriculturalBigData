var date1 = "2016-11-01";
var date2 = "2016-11-30"
$(document).ready(function () {
    charts1(0)    //可追溯农产品生产销售指数
    charts2(0)    //主要农产品追溯信息D级异常占比预警
    charts3(0)    //山东农产品区域销售结构
    charts4("郑州", "蔬菜");   //销售区域郑州农产品销售量占比
    charts5(0)    //农产品质量安全监测预警
    creatList("农药残留","蔬菜");//
    var cmap = showMap('china',"蔬菜");  //地图初始化
});

function startpick(dp) {
    var type = $("#typeval").html();
    date1 = dp.cal.getNewDateStr();
    console.log(dp.cal.getNewDateStr())
    if (type == "蔬菜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        charts1(0);
        charts2(0);
        charts3(0);
        charts4("郑州", "蔬菜");
        charts5(0);
        creatList("农药残留","蔬菜");
        var cmap = showMap('china',"蔬菜");
    }
    ;
    if (type == "禽畜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        charts1(1);
        charts2(1);
        charts3(1);
        charts4("郑州", "禽畜");
        charts5(1);
        creatList("瘦肉精","禽畜");
        var cmap = showMap('china',"禽畜");
    }
    ;

};

function endpick(dp) {
    var type = $("#typeval").html();
    date2 = dp.cal.getNewDateStr();
    if (type == "蔬菜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        charts1(0);
        charts2(0);
        charts3(0);
        charts4("郑州", "蔬菜");
        charts5(0);
        var cmap = showMap('china',"蔬菜");
    }
    ;
    if (type == "禽畜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        console.log(200);
        charts1(1);
        charts2(1);
        charts3(1);
        charts4("郑州", "禽畜");
        charts5(1);
        var cmap = showMap('china',"禽畜");
    }
    ;

};

function select1(data) {
    var type = data;
    if (type == "蔬菜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        charts1(0);
        charts2(0);
        charts3(0);
        charts4("郑州", "蔬菜");
        charts5(0);
        creatList("农药残留","蔬菜");
        var cmap = showMap('china',"蔬菜");
    }
    ;
    if (type == "禽畜" && date1 == "2016-11-01" && date2 == "2016-11-30") {
        charts1(1);
        charts2(1);
        charts3(1);
        charts4("郑州", "禽畜");
        charts5(1);
        creatList("瘦肉精","禽畜");
        var cmap = showMap('china',"禽畜");
    }
    ;

}


function charts1(num) {

    var Vegetables = [
        {
            nameArr: ["大白菜", "黄瓜", "菜豆", "甘蓝", "萝卜", "大蒜"],
            dataArr: [0.35, -0.05, 0.25, 0.08, 0.15, 0.12]
        }
    ]
    var livestock = [
        {
            nameArr: ["猪肉", "鸡蛋", "白条鸡", "羊肉", "牛肉", "牛奶", "肉鸭", "鸡蛋"],
            dataArr: [0.08, 0.15, -0.17, 0.05, 0.1, 0.18, -0.04, 0.13]
        }
    ];

    if (num == 0) {
        var _charts1 = charts.init({
            id: 818,
            container: "chart1",
            option: {
                yAxis: [{
                    interval: 0.5,
                    max: 0.5,
                    min: -0.5,

                }],
                xAxis: [{
                    data: Vegetables[0].nameArr

                }],
                series: [{
                    data: Vegetables[0].dataArr
                }
                ],
            }
        });
    }
    ;
    if (num == 1) {
        var _charts1 = charts.init({
            id: 818,
            container: "chart1",
            option: {
                yAxis: [{
                    interval: 0.5,
                    max: 0.5,
                    min: -0.5,

                }],
                xAxis: [{
                    data: livestock[0].nameArr

                }],
                series: [{
                    data: livestock[0].dataArr
                }
                ],
            }
        });
    }
    ;
};

function charts2(num) {
    $("#areaName").html("郑州");
    var Vegetables = [
        {
            name: "大白菜",
            data: [0.15, 0.2, 0.12, 0.328]
        },
        {
            name: "黄瓜",
            data: [0.12, 0.13, 0.09, 0.148]
        },
        {
            name: "菜豆",
            data: [0.23, 0.02, 0.22, 0.118]
        },
        {
            name: "甘蓝",
            data: [0.08, 0.34, 0.29, 0.038]
        },
        {
            name: "萝卜",
            data: [0.05, 0.09, 0.24, 0.038]
        },
        {
            name: "大蒜",
            data: [0.18, 0.16, 0.39, 0.118]
        }
    ]
    var livestock = [
        {
            name: "猪肉",
            data: [0.18, 0.08, 0.07, 0.238]
        },
        {
            name: "鸡蛋",
            data: [0.15, 0.05, 0.14, 0.188]
        },
        {
            name: "白条鸡",
            data: [0.26, 0.18, 0.11, 0.338]
        },
        {
            name: "羊肉",
            data: [0.11, 0.25, 0.22, 0.06]
        },
        {
            name: "牛肉",
            data: [0.08, 0.2, 0.33, 0.06]
        },
        {
            name: "牛奶",
            data: [0.21, 0.35, 0.32, 0.19]
        }
    ];
    if (num == 0) {
        var legendArr = [];
        var seriesArr = [];
        Vegetables.forEach(function (item) {
            legendArr.push(item.name);
            var seriesobj = {
                name: item.name,
                data: item.data
            };
            seriesArr.push(seriesobj);
        });
        var option = {
            legend: {
                data: legendArr
            },
            series: seriesArr
        };
        var _charts2 = charts.init({
            id: 819,
            container: "chart2",
            option: option
        });
    }
    ;
    if (num == 1) {
        var legendArr = [];
        var seriesArr = [];
        livestock.forEach(function (item) {
            legendArr.push(item.name);
            var seriesobj = {
                name: item.name,
                data: item.data
            };
            seriesArr.push(seriesobj);
        });
        var option = {
            legend: {
                data: legendArr
            },
            series: seriesArr
        };
        var _charts2 = charts.init({
            id: 819,
            container: "chart2",
            option: option
        });
    }

};

function charts3(num) {
    if (num == 0) {
        var _charts3 = charts.init({
            id: 821,
            container: "chart3",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 300, name: '南京'},
                        {value: 300, name: '北京'},
                        {value: 400, name: '上海'},
                        {value: 200, name: '郑州'},
                        {value: 100, name: '无锡'},
                        {value: 240, name: '天津'},
                        {value: 500, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts3.on('click', function (params) {
            console.log(params)
            var name = params.name;
            var typeName = params.seriesName;
            $("#areaName").html(name);
            charts4(name, typeName);

        });

    }
    ;
    if (num == 1) {
        var _charts3 = charts.init({
            id: 821,
            container: "chart3",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 300, name: '南京'},
                        {value: 400, name: '北京'},
                        {value: 300, name: '上海'},
                        {value: 200, name: '郑州'},
                        {value: 400, name: '无锡'},
                        {value: 240, name: '天津'},
                        {value: 500, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts3.on('click', function (params) {
            console.log(params)
            var name = params.name;
            var typeName = params.seriesName;
            $("#areaName").html(name);
            charts4(name, typeName);

        });
    }


};

function charts4(name, typeName) {
    if (name == "郑州" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 800, name: '白菜'},
                        {value: 400, name: '黄瓜'},
                        {value: 200, name: '菜豆'},
                        {value: 200, name: '甘蓝'},
                        {value: 400, name: '萝卜'},
                        {value: 40, name: '大蒜'},
                        {value: 100, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "郑州" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 900, name: '猪肉'},
                        {value: 300, name: '鸡蛋'},
                        {value: 200, name: '白条鸡'},
                        {value: 200, name: '羊肉'},
                        {value: 400, name: '牛肉'},
                        {value: 400, name: '鸡蛋'},
                        {value: 100, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;


    if (name == "北京" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 200, name: '猪肉'},
                        {value: 100, name: '鸡蛋'},
                        {value: 400, name: '白条鸡'},
                        {value: 200, name: '羊肉'},
                        {value: 400, name: '牛肉'},
                        {value: 400, name: '鸡蛋'},
                        {value: 200, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;


    if (name == "北京" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 200, name: '白菜'},
                        {value: 400, name: '黄瓜'},
                        {value: 200, name: '菜豆'},
                        {value: 200, name: '甘蓝'},
                        {value: 400, name: '萝卜'},
                        {value: 40, name: '大蒜'},
                        {value: 50, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name != "北京" && name != "郑州" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 100, name: '猪肉'},
                        {value: 200, name: '鸡蛋'},
                        {value: 300, name: '白条鸡'},
                        {value: 400, name: '羊肉'},
                        {value: 500, name: '牛肉'},
                        {value: 600, name: '鸡蛋'},
                        {value: 200, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;
    if (name != "北京" && name != "郑州" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 600, name: '白菜'},
                        {value: 500, name: '黄瓜'},
                        {value: 400, name: '菜豆'},
                        {value: 300, name: '甘蓝'},
                        {value: 300, name: '萝卜'},
                        {value: 200, name: '大蒜'},
                        {value: 50, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;
};

function charts5(num) {
    if (num == 0) {
        var _charts5 = charts.init({
            id: 823,
            container: "chart5",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 1, name: '微生物'},
                        {value: 1, name: '重金属污染'},
                        {value: 5, name: '有害无机物'},
                        {value: 25, name: '农药残留'},
                        {value: 10, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts5.on('click', function (params) {
            var itemName = params.name;
            var typeName = params.seriesName;
            creatList(itemName, typeName); // 创建列表
        });
    }
    ;

    if (num == 1) {
        var _charts5 = charts.init({
            id: 823,
            container: "chart5",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 6, name: '瘦肉精'},
                        {value: 5, name: '饲料添加剂'},
                        {value: 1, name: '兽药残留'},
                        {value: 1, name: '病死畜禽产品'},
                        {value: 1, name: '三聚氰胺'},
                        {value: 3, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts5.on('click', function (params) {
            var itemName = params.name;
            var typeName = params.seriesName;
            creatList(itemName, typeName); // 创建列表
        });
    }
    ;


};


function creatList(itemName, typeName) {
    var Vegetables={
        "农药残留":[
            {
                "批次号":"2016001B",
                "品种":"大蒜",
                "企业":"青岛市城阳蔬菜副食品批发市场",
                "监测日期":"2016/11/1",
                "预警级别":"三级"
            },
            {
                "批次号":"2016003B",
                "品种":"黄瓜",
                "企业":"青岛市城阳蔬菜副食品批发市场",
                "监测日期":"2016/11/2",
                "预警级别":"三级"
            },
            {
                "批次号":"2016004B",
                "品种":"大白菜",
                "企业":"青岛市城阳蔬菜副食品批发市场",
                "监测日期":"2016/11/5",
                "预警级别":"三级"
            }
        ],
        "有害无机物":[
            {
                "批次号":"20160023B",
                "品种":"萝卜",
                "企业":"山东临邑县蔬菜生产基地",
                "监测日期":"2016/11/5",
                "预警级别":"三级"
            },
            {
                "批次号":"2016024B",
                "品种":"黄瓜",
                "企业":"山东临邑县蔬菜生产基地",
                "监测日期":"2016/11/5",
                "预警级别":"三级"
            },
            {
                "批次号":"2016025B",
                "品种":"大白菜",
                "企业":"山东临邑县蔬菜生产基地",
                "监测日期":"2016/11/5",
                "预警级别":"三级"
            }
        ]
    };

    var livestock={
          "瘦肉精":[
              {
                  "批次号":"2016025A",
                  "品种":"猪肉",
                  "企业":"山东济南市综合批发市场",
                  "监测日期":"2016/11/5",
                  "预警级别":"二级"
              },
              {
                  "批次号":"2016026A",
                  "品种":"猪肉",
                  "企业":"济南七里堡综合批发市场",
                  "监测日期":"2016/11/5",
                  "预警级别":"二级"
              },
              {
                  "批次号":"2016027A",
                  "品种":"牛肉",
                  "企业":"山东济南市综合批发市场",
                  "监测日期":"2016/11/5",
                  "预警级别":"二级"
              }
          ],
        "饲料添加剂":[
            {
                "批次号":"2016028A",
                "品种":"鸡肉",
                "企业":"济南七里堡综合批发市场",
                "监测日期":"2016/11/5",
                "预警级别":"二级"
            },
            {
                "批次号":"2016029A",
                "品种":"鸡肉",
                "企业":"济南七里堡综合批发市场",
                "监测日期":"2016/11/5",
                "预警级别":"二级"
            },
            {
                "批次号":"2016044A",
                "品种":"鸡肉",
                "企业":"济南七里堡综合批发市场",
                "监测日期":"2016/11/5",
                "预警级别":"二级"
            }
        ]
    };
    var html="";
    html += "<tr>"
    html += " <th>批次号</th>"
    html += "<th>品种</th>"
    html += "<th>企业</th>"
    html += " <th>检测日期</th>"
    html += "<th class='noborderright'>预警级别</th>"
    html += "    </tr>";
    if(itemName=="农药残留"&&typeName=="蔬菜"){
        $("#listContent").html("");
        Vegetables["农药残留"].forEach(function(item){
            html+=   "<tr>"
            html+=   "  <td>"+item["批次号"]+"</td>"
            html+=   " <td>"+item["品种"]+"</td>"
            html+=  " <td>"+item["企业"]+"</td>"
            html+=  "<td>"+item["监测日期"]+"</td>"
            html+=  "<td class='noborderright'>"+item["预警级别"]+"</td>"
            html+=  "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    };
    if(itemName=="有害无机物"&&typeName=="蔬菜"){
        $("#listContent").html("");
        Vegetables["有害无机物"].forEach(function(item){
            html+=   "<tr>"
            html+=   "  <td>"+item["批次号"]+"</td>"
            html+=   " <td>"+item["品种"]+"</td>"
            html+=  " <td>"+item["企业"]+"</td>"
            html+=  "<td>"+item["监测日期"]+"</td>"
            html+=  "<td class='noborderright'>"+item["预警级别"]+"</td>"
            html+=  "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    };

    if(itemName=="饲料添加剂"&&typeName=="禽畜"){
        $("#listContent").html("");
        livestock["饲料添加剂"].forEach(function(item){
            html+=   "<tr>"
            html+=   "  <td>"+item["批次号"]+"</td>"
            html+=   " <td>"+item["品种"]+"</td>"
            html+=  " <td>"+item["企业"]+"</td>"
            html+=  "<td>"+item["监测日期"]+"</td>"
            html+=  "<td class='noborderright'>"+item["预警级别"]+"</td>"
            html+=  "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    };

    if(itemName=="瘦肉精"&&typeName=="禽畜"){
        $("#listContent").html("");
         livestock["瘦肉精"].forEach(function(item){
            html+=   "<tr>"
            html+=   "  <td>"+item["批次号"]+"</td>"
            html+=   " <td>"+item["品种"]+"</td>"
            html+=  " <td>"+item["企业"]+"</td>"
            html+=  "<td>"+item["监测日期"]+"</td>"
            html+=  "<td class='noborderright'>"+item["预警级别"]+"</td>"
            html+=  "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    }

    var winH = $(window).height();
    var module6H = $(".module6").height();
    if(winH <= 600 + module6H){
        $("body").height(520 + module6H);
    }else{
        $("body").height(winH - 80);
    }
}



var VegetablesData = {
    points: [{                          //第一条线路开始
        "name": "山东省青岛市城阳蔬菜水产品批发市场",
        "log": "120.385339",
        "lat": "36.306948",
        "icon": {
            url: '../images/icon_1.png',
            width: 50,
            height: 50
        }
    },
        {
            "name": "沧州 ",
            "log": "116.863806",
            "lat": "38.297615",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "天津",
            "log": "117.210813",
            "lat": "39.14393",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "北京",
            "log": "116.395645",
            "lat": "39.929986",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "郑州",
            "log": "113.649644",
            "lat": "28.213478",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "重庆",
            "log": "106.530635",
            "lat": "29.544606",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "成都",
            "log": "104.067923",
            "lat": "30.679943",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "大连",
            "log": "104.067923",
            "lat": "30.679943",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "沈阳",
            "log": "123.432791",
            "lat": "41.808645",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "乌鲁木齐北园春农产品中心批发市场",
            "log": "87.557026",
            "lat": "43.820729",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
    ],
    lines: [{
        className: 'line1',   //第一条
        source: {
            "log": "120.385339",
            "lat": "36.306948"
        },
        target: {
            "log": "116.863806",
            "lat": "38.297615"
        }
    },
        {
            className: 'line1',
            source: {
                "log": "116.863806",
                "lat": "38.297615"
            },
            target: {
                "log": "117.210813",
                "lat": "39.14393"
            }
        },
        {
            className: 'line1',
            source: {
                "log": "117.210813",
                "lat": "39.14393"
            },
            target: {
                "log": "116.395645",
                "lat": "39.929986"
            }
        },{
            className: 'line1',   // 第二条
            source: {
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "log": "113.649644",
                "lat": "28.213478"
            }
        },
        {
            className: 'line1',
            source: {
                "log": "113.649644",
                "lat": "28.213478"
            },
            target: {
                "log": "106.530635",
                "lat": "29.544606"
            }
        },
        {
            className: 'line1',
            source: {
                "log": "106.530635",
                "lat": "29.544606"
            },
            target: {
                "log": "104.067923",
                "lat": "30.679943"
            }
        },{
            className: 'line1',   // 第三条
            source: {
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "log": "104.067923",
                "lat": "30.679943"
            }
        },{
            className: 'line1',
            source: {
                "log": "104.067923",
                "lat": "30.679943"
            },
            target: {
                "log": "123.432791",
                "lat": "41.808645",
            }
        },
        {
            className: 'line1',
            source: {
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "log": "87.557026",
                "lat": "43.820729"
            }
        }

    ]
};


var  livestockData= {
    points: [{
        "name": "济南维尔康肉类水产品发市场",
        "log": "117.024967",
        "lat": "36.682785",
        "icon": {
            url: '../images/icon_1.png',
            width: 50,
            height: 50
        }
    },{
        "name": "重庆观音桥市场",
        "log": "106.530635",
        "lat": "29.544606",
        "icon": {
            url: '../images/icon_2.png',
            width: 50,
            height: 50
        }
    },
        {
            "name": "陕西西部欣桥农产品物流中心",
            "log": "108.849099",
            "lat": "34.254847",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "南京",
            "log": "118.778074",
            "lat": "32.057236",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "上海",
            "log": "118.778074",
            "lat": "31.057236",
            "icon": {
                url: '../images/icon_2.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "杭州",
            "log": "120.219375",
            "lat": "30.259244",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {
            "name": "乌鲁木齐北园春农产品中心批发市场",
            "log": "87.557026",
            "lat": "43.820729",
            "icon": {
                url: '../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
    ],
    lines: [{
        className: 'line1',
        source: {
            "log": "117.024967",
            "lat": "36.682785"
        },
        target: {
            "log": "106.530635",
            "lat": "29.544606"
        }
    },
        {
            className: 'line1',
            source: {
                "log": "106.530635",
                "lat": "29.544606"
            },
            target: {
                "log": "108.849099",
                "lat": "34.254847"
            }
        },
        {
            className: 'line1',   //第二条线
            source: {
                "log": "117.024967",
                "lat": "36.682785"
            },
            target: {
                "log": "118.778074",
                "lat": "32.057236"
            }
        },
        {
            className: 'line1',
            source: {
                "log": "118.778074",
                "lat": "32.057236"
            },
            target: {
                "log": "118.778074",
                "lat": "31.057236"
            }
        },
        {
            className: 'line1',
            source: {
                "log": "117.024967",
                "lat": "36.682785"
            },
            target: {
                "log": "87.557026",
                "lat": "43.820729"
            }
        }
    ]
};

function clickHandle(event, data) {
    if (data._type == 'area') {
        showMap(data.properties.name, false);
    }

}
commonLib.CMap.config.baseDir = '../geoJson/'
function mouseOverHandle(event, data) {
    // if (data._type == 'point') {
    //     var rect = event.target.getBoundingClientRect();
    //     var $tip = $('#map_popOver');
    //     if (!$tip.length) {
    //         $tip = $('<div id="map_popOver">');
    //         $('#map').append($tip);
    //     }
    //     $tip.html(popOver(data));
    //     var offset = $('#map svg').offset();
    //     $tip.css({
    //         left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
    //         top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
    //         display: 'block'
    //     });
    // }
}

function mouseOutHandle(event, data) {
    if (!$(event.toElement).is('#map_popOver')) {
        $('#map_popOver').css({
            display: 'none'
        });
    }
}

function popOver(param) {
    //var star = '';
    //for (var i = 0, len = param.star; i < len; i++) {
    //    star += '★';
    //}
    //return '<h4>' + (param.title) + '</h4>' +
    //    '<p><span class="import">' + (param.core) + '</span><span>信用评分</span></p>' +
    //    '<p><span class="star">' + star + '</span><span>信用等级</span></p>'
}

function showMap(name, type) {
    if(type=="蔬菜"){
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: VegetablesData,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            name: name
        });
    };

    if(type=="禽畜"){
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: livestockData,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            name: name
        });
    }

    return map;
}

//var cmap = showMap('china', name);
