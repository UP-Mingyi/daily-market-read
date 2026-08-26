(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart: Global Index Comparison ---
  var chart1 = echarts.init(document.getElementById('chart-global-index'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      backgroundColor: bg2,
      borderColor: rule,
      textStyle: { color: ink, fontSize: 12 },
      formatter: function(params) {
        var s = '<strong>' + params[0].axisValue + '</strong><br/>';
        params.forEach(function(p) {
          var v = p.value.toFixed(2);
          var color = v >= 0 ? up : down;
          s += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + p.color + ';margin-right:6px;"></span>';
          s += p.seriesName + ': <span style="color:' + color + ';font-weight:600">' + (v >= 0 ? '+' : '') + v + '%</span><br/>';
        });
        return s;
      }
    },
    legend: {
      data: ['道琼斯', '纳斯达克', '标普500', '恒生指数', 'A股'],
      bottom: 0,
      textStyle: { color: muted, fontSize: 11 }
    },
    grid: {
      top: 20,
      right: 30,
      bottom: 40,
      left: 50
    },
    xAxis: {
      type: 'category',
      data: ['8/18', '8/19', '8/20', '8/21', '8/25'],
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false },
      axisLabel: { color: muted, fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' }
    },
    color: [accent, up, down, '#f4a261', '#778da9'],
    series: [
      {
        name: '道琼斯',
        type: 'line',
        data: [-0.22, 0.22, -1.32, 0.98, 0.30],
        lineStyle: { width: 2 },
        symbol: 'circle',
        symbolSize: 6,
        smooth: true
      },
      {
        name: '纳斯达克',
        type: 'line',
        data: [-1.33, 0.16, -1.00, 0.43, 0.66],
        lineStyle: { width: 2 },
        symbol: 'circle',
        symbolSize: 6,
        smooth: true
      },
      {
        name: '标普500',
        type: 'line',
        data: [-0.69, 0.21, -0.87, 0.43, 0.32],
        lineStyle: { width: 2 },
        symbol: 'circle',
        symbolSize: 6,
        smooth: true
      },
      {
        name: '恒生指数',
        type: 'line',
        data: [0.03, -0.11, -0.15, 0.08, -0.02],
        lineStyle: { width: 2 },
        symbol: 'circle',
        symbolSize: 6,
        smooth: true
      },
      {
        name: 'A股',
        type: 'line',
        data: [0.11, -1.74, 0.46, 0.27, 0.32],
        lineStyle: { width: 2, type: 'dashed' },
        symbol: 'diamond',
        symbolSize: 8,
        smooth: true
      }
    ]
  });

  window.addEventListener('resize', function() { chart1.resize(); });
})();