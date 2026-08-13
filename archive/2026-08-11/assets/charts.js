(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart: Industry Performance ---
  var chartIndustry = echarts.init(document.getElementById('chart-industry'), null, { renderer: 'svg' });
  chartIndustry.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(13, 27, 42, 0.95)',
      borderColor: rule,
      textStyle: { color: ink },
      formatter: function(params) {
        var p = params[0];
        var color = p.value >= 0 ? up : down;
        return p.name + '<br/>涨跌幅: <span style="color:' + color + ';font-weight:bold;">' + (p.value > 0 ? '+' : '') + p.value + '%</span>';
      }
    },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '3%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['电力设备', '医药生物', '非银金融', '银行', '通信设备', '半导体', '电子', '煤炭'],
      axisLabel: { color: ink },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: [
        { value: -1.70, itemStyle: { color: down } },
        { value: -1.06, itemStyle: { color: down } },
        { value: -1.08, itemStyle: { color: down } },
        { value: 0.35, itemStyle: { color: up } },
        { value: 1.49, itemStyle: { color: up } },
        { value: 1.42, itemStyle: { color: up } },
        { value: 1.62, itemStyle: { color: up } },
        { value: 4.42, itemStyle: { color: up } }
      ],
      barWidth: '60%',
      label: {
        show: true,
        position: 'right',
        color: ink,
        formatter: function(p) { return (p.value > 0 ? '+' : '') + p.value + '%'; }
      }
    }]
  });
  window.addEventListener('resize', function() { chartIndustry.resize(); });

  // --- Chart: Global Index 5-day ---
  var chartGlobal = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });
  chartGlobal.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(13, 27, 42, 0.95)',
      borderColor: rule,
      textStyle: { color: ink }
    },
    legend: {
      data: ['上证指数', '深证成指', '创业板指', '恒生指数', '标普500'],
      textStyle: { color: muted },
      bottom: 0
    },
    grid: { left: '3%', right: '4%', bottom: '12%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['7月30日', '7月31日', '8月3日', '8月4日', '8月5日', '8月6日'],
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: '上证指数',
        type: 'line',
        data: [-0.62, 0.72, -0.59, 0.33, 1.47, 0.57],
        smooth: true,
        lineStyle: { color: '#e63946', width: 2 },
        itemStyle: { color: '#e63946' },
        symbol: 'circle',
        symbolSize: 6
      },
      {
        name: '深证成指',
        type: 'line',
        data: [-2.73, 2.21, -0.96, 3.25, 1.86, -0.24],
        smooth: true,
        lineStyle: { color: '#f4a261', width: 2 },
        itemStyle: { color: '#f4a261' },
        symbol: 'circle',
        symbolSize: 6
      },
      {
        name: '创业板指',
        type: 'line',
        data: [-3.97, 3.06, -1.24, 5.65, 1.32, -0.55],
        smooth: true,
        lineStyle: { color: '#d4af37', width: 2 },
        itemStyle: { color: '#d4af37' },
        symbol: 'circle',
        symbolSize: 6
      },
      {
        name: '恒生指数',
        type: 'line',
        data: [null, 0.10, 0.48, -0.60, 0.24, -1.49],
        smooth: true,
        lineStyle: { color: '#2a9d8f', width: 2 },
        itemStyle: { color: '#2a9d8f' },
        symbol: 'circle',
        symbolSize: 6
      },
      {
        name: '标普500',
        type: 'line',
        data: [1.66, 0.70, 1.48, 1.79, -0.17, -0.18],
        smooth: true,
        lineStyle: { color: '#778da9', width: 2 },
        itemStyle: { color: '#778da9' },
        symbol: 'circle',
        symbolSize: 6
      }
    ]
  });
  window.addEventListener('resize', function() { chartGlobal.resize(); });
})();
