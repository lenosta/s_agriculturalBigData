// 10:05 2016/8/12 zhanghong

(function() {

    // 值
    var value = {

        // 标识
        id: 'chart',

        // 宽
        //width: '640',

        // 高
        //height: '480',

        // 参数
        option: {

            // 网络
            grid: {

                left: 0,
                right: 0,
                top: 0,
                bottom: 0

            },

            // 序列
            series: [{

                type: 'graph',
                layout: 'force',
                force: { repulsion: 160 },
                nodes: []

            }]

        }

    };



    // 主函数
    var main = function( /* value */ v) {

        // 渲染（值）
        render_value(v);

        // 渲染（元素）
        render_element(v);

        // 执行（初始化）
        render.chart = echarts.init(render.element);
        render.chart.on('click', handler_click);

        // 执行（渲染）
        render.chart.setOption(value.option, true);

    };

    // 渲染（命名空间）
    var render = function() {

        // ...
        //
        // render.chart
        // render.element
        // render.index

    };

    // 渲染（值）
    var render_value = function( /* value */ v) {

        var $,
            a, b, c, i;

        // 标识
        if ($ = v['id']) value['id'] = $;

        // 宽
        if ($ = v['width']) value['width'] = $;

        // 高
        if ($ = v['height']) value['height'] = $;

        // 点击
        if ($ = v['handlerClick']) value['handlerClick'] = $;

        // 排斥力
        if ($ = v['repulsion']) value['option']['series'][0]['force']['repulsion'] = $;

        // 数据
        value['option']['series'][0]['nodes'] = [];
        if ($ = v['data'])
            for (value['data'] = $, a = value['option']['series'][0]['nodes'], i = 0; b = $[i]; i++) a.push({

                // 标签
                label: { normal: { show: true, formatter: b.name, textStyle: { fontSize: (c = (b.value || 0) * 8 + 12) } }, emphasis: { show: true, formatter: b.name, textStyle: { fontSize: c } } },

                // 图形
                symbol: 'rect',

                // 尺寸
                symbolSize: [((b.value || 0) * 80 + 80), ((b.value || 0) * 15 + 30)],

                // 颜色
                itemStyle: { normal: { color: (b.color || 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',1)'), opacity: '.5' } }

            });

    };

    // 渲染（元素）
    var render_element = function( /* value */ v) {

        var e = render.element = document.getElementById(value['id']);

        // 宽
        e.style.width = value['width'] + 'px';

        // 高
        e.style.height = value['height'] + 'px';

    };

    // 处理程序（点击）
    var handler_click = function( /* event */ e) {

        var $;

        // 删除高亮
        if ($ = value.option.series[0].nodes[render.index]) {

            // 改变层次
            render.chart.dispatchAction({ type: 'downplay', seriesIndex: e.seriesIndex, dataIndex: render.index });

            // 改变透明度
            $.itemStyle.normal.opacity = '.5';

        }

        // 添加高亮
        if ($ = value.option.series[0].nodes[render.index = e.dataIndex]) {

            // 改变层次
            render.chart.dispatchAction({ type: 'highlight', seriesIndex: e.seriesIndex, dataIndex: e.dataIndex });

            // 改变透明度
            $.itemStyle.normal.opacity = '1';

        }

        // 执行（刷新）
        render.chart.setOption(value.option, true);

        // 执行（处理程序）
        value['handlerClick'](value['data'][e.dataIndex]);

    };



    // 接口
    window.bubbleChartWordCloud = main;

}());