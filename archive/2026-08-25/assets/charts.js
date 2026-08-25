(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Global Index Comparison ---
  var chartDom = document.getElementById('chart-global');
  if (chartDom) {
    var chart = echarts.init(chartDom, null, { renderer: 'svg' });
    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        backgroundColor: bg2,
        borderColor: rule,
        textStyle: { color: ink, fontSize: 13 }
      },
      legend: {
        data: ['道琼斯', '纳斯达克', '标普500', '恒生指数', '上证指数'],
        bottom: 0,
        textStyle: { color: muted, fontSize: 12 },
        itemGap: 20
      },
      grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '12%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['8/17', '8/18', '8/19', '8/20', '8/21', '8/24'],
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false },
        axisLabel: { color: muted, fontSize: 11 }
      },
      yAxis: {
        type: 'value',
        name: '涨跌幅(%)',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } },
        axisLabel: { color: muted, fontSize: 11,
          formatter: function(v) { return v.toFixed(1) + '%'; }
        }
      },
      series: [
        {
          name: '道琼斯',
          type: 'line',
          data: [null, null, null, null, null, 0.26],
          lineStyle: { color: '#a0c4ff', width: 2 },
          itemStyle: { color: '#a0c4ff' },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          name: '纳斯达克',
          type: 'line',
          data: [-0.32, -1.33, 0.16, -1.00, 0.43, -0.76],
          lineStyle: { color: '#ff6b6b', width: 2 },
          itemStyle: { color: '#ff6b6b' },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          name: '标普500',
          type: 'line',
          data: [-0.52, -0.69, 0.21, -0.87, 0.43, -0.28],
          lineStyle: { color: '#ffa94d', width: 2 },
          itemStyle: { color: '#ffa94d' },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          name: '恒生指数',
          type: 'line',
          data: [null, 0.07, 0.09, 0.80, 1.21, -1.89],
          lineStyle: { color: '#69db7c', width: 2 },
          itemStyle: { color: '#69db7c' },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          name: '上证指数',
          type: 'line',
          data: [null, null, null, null, null, -0.59],
          lineStyle: { color: accent, width: 2.5 },
          itemStyle: { color: accent },
          symbol: 'circle',
          symbolSize: 7
        }
      ]
    });
    window.addEventListener('resize', function() { chart.resize(); });
  }
})();