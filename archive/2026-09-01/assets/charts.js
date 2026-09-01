(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart 1: 三大指数近6个交易日涨跌幅走势 ---
  var chart1 = echarts.init(document.getElementById('chart-index-trend'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: { data: ['上证指数', '深证成指', '创业板指'], textStyle: { color: muted }, top: 0 },
    grid: { left: '3%', right: '5%', bottom: '3%', top: '14%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['8/24', '8/25', '8/26', '8/27', '8/28', '8/31'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [
      { name: '上证指数', type: 'line', data: [-0.59, 0.19, 0.59, 1.13, -0.11, 0.86], smooth: true, lineStyle: { color: accent, width: 2 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 6 },
      { name: '深证成指', type: 'line', data: [-2.13, -0.35, 0.69, 1.50, -0.68, 0.44], smooth: true, lineStyle: { color: up, width: 2 }, itemStyle: { color: up }, symbol: 'circle', symbolSize: 6 },
      { name: '创业板指', type: 'line', data: [-3.21, -1.00, 0.51, 1.71, -1.41, 0.42], smooth: true, lineStyle: { color: down, width: 2 }, itemStyle: { color: down }, symbol: 'circle', symbolSize: 6 }
    ]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: 全球主要指数周一涨跌幅对比 ---
  var chart2 = echarts.init(document.getElementById('chart-global-index'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['上证指数', '深证成指', '恒生科技', '恒生指数', '纳斯达克', '标普500', '道琼斯'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 0.86, itemStyle: { color: up } },
        { value: 0.44, itemStyle: { color: up } },
        { value: 0.32, itemStyle: { color: up } },
        { value: -0.07, itemStyle: { color: down } },
        { value: -0.12, itemStyle: { color: down } },
        { value: -0.33, itemStyle: { color: down } },
        { value: -0.70, itemStyle: { color: down } }
      ],
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      barMaxWidth: 24
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: 周一涨停股连板高度分布 ---
  var chart3 = echarts.init(document.getElementById('chart-sector-heat'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '10%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['2连板', '3连板', '4连板', '5连板'],
      axisLabel: { color: ink, fontSize: 11, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: '涨停家数',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 10, itemStyle: { color: accent } },
        { value: 4, itemStyle: { color: accent + 'cc' } },
        { value: 1, itemStyle: { color: accent + '99' } },
        { value: 2, itemStyle: { color: accent + '66' } }
      ],
      barMaxWidth: 40,
      label: { show: true, position: 'top', color: ink, fontSize: 12, fontWeight: 700 }
    }]
  });
  window.addEventListener('resize', function() { chart3.resize(); });
})();