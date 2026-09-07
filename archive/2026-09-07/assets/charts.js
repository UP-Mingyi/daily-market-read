(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg3 = style.getPropertyValue('--bg3').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();
  var warn = style.getPropertyValue('--warn').trim();

  // --- Chart 1: Market Breadth (资金流向 + 涨跌家数) ---
  var chart1 = echarts.init(document.getElementById('chart-breadth'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true },
    legend: {
      data: ['资金(亿元)', '家数'],
      textStyle: { color: muted },
      top: 5
    },
    grid: { left: 55, right: 55, top: 45, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['主力净流入', '大单净流入', '中单净流入', '小单净流入'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 }
    },
    yAxis: [
      {
        type: 'value',
        name: '资金(亿元)',
        nameTextStyle: { color: muted },
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      {
        type: 'value',
        name: '家数',
        nameTextStyle: { color: muted },
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '资金(亿元)',
        type: 'bar',
        data: [
          { value: -208.4, itemStyle: { color: down } },
          { value: -94.56, itemStyle: { color: down } },
          { value: 7.03, itemStyle: { color: up } },
          { value: 201.4, itemStyle: { color: up } }
        ],
        barWidth: '40%',
        label: {
          show: true,
          position: 'top',
          color: ink,
          fontSize: 11,
          formatter: function(p) { return p.value + '亿'; }
        }
      },
      {
        name: '家数',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          { value: 2444, name: '上涨', itemStyle: { color: up } },
          { value: 2914, name: '下跌', itemStyle: { color: down } },
          { value: 190, name: '平盘', itemStyle: { color: muted } },
          { value: 0, itemStyle: { color: muted } }
        ],
        barWidth: '40%',
        label: {
          show: true,
          position: 'top',
          color: ink,
          fontSize: 11,
          formatter: function(p) {
            var labels = ['上涨', '下跌', '平盘', ''];
            return p.value > 0 ? labels[p.dataIndex] + ' ' + p.value : '';
          }
        }
      }
    ]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: Global Index Comparison (近三日涨跌幅) ---
  var chart2 = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });
  var indices = ['道琼斯', '纳斯达克', '标普500', '恒生指数', '沪深300', '中证500', '创业板指'];
  var day1 = [0.5592, 0.4523, 0.4603, -0.07312, -1.377, -1.612, -2.392];
  var day2 = [1.176, 1.397, 1.058, -0.3868, 0.1016, 0.3101, 0.008994];
  var day3 = [-0.5064, -0.2899, -0.3757, 1.735, -0.09947, -1.138, -0.7848];

  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    legend: {
      data: ['9/2', '9/3', '9/4'],
      textStyle: { color: muted },
      top: 5
    },
    grid: { left: 60, right: 30, top: 45, bottom: 40 },
    xAxis: {
      type: 'category',
      data: indices,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 10, interval: 0 }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [
      {
        name: '9/2',
        type: 'bar',
        data: day1.map(function(v) { return { value: v, itemStyle: { color: v >= 0 ? up : down } }; }),
        label: { show: false }
      },
      {
        name: '9/3',
        type: 'bar',
        data: day2.map(function(v) { return { value: v, itemStyle: { color: v >= 0 ? up : down, opacity: 0.7 } }; }),
        label: { show: false }
      },
      {
        name: '9/4',
        type: 'bar',
        data: day3.map(function(v) { return { value: v, itemStyle: { color: v >= 0 ? up : down, opacity: 0.5 } }; }),
        label: {
          show: true,
          position: 'top',
          color: ink,
          fontSize: 9,
          formatter: function(p) { return p.value >= 0 ? '+' + p.value + '%' : p.value + '%'; }
        }
      }
    ]
  });
  window.addEventListener('resize', function() { chart2.resize(); });
})();
