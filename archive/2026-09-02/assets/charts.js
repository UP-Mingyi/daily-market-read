(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart 1: 主要指数9月1日涨跌幅 ---
  var chart1 = echarts.init(document.getElementById('chart-index-trend'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink }, axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '5%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['上证指数', '深证成指', '创业板指', '科创50', '北证50'],
      axisLabel: { color: ink, fontSize: 11, fontWeight: 600 },
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
    series: [{
      type: 'bar',
      data: [
        { value: -0.16, itemStyle: { color: down } },
        { value: -1.02, itemStyle: { color: down } },
        { value: -1.32, itemStyle: { color: down } },
        { value: -2.19, itemStyle: { color: down } },
        { value: 1.34, itemStyle: { color: up } }
      ],
      barMaxWidth: 42,
      label: { show: true, position: 'top', formatter: '{c}%', color: ink, fontSize: 11, fontWeight: 700 }
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: 全球主要指数9月1日涨跌幅对比 ---
  var chart2 = echarts.init(document.getElementById('chart-global-index'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink }, axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['北证50', '上证指数', '深证成指', '恒生指数', '标普500', '道琼斯', '纳斯达克'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 1.34, itemStyle: { color: up } },
        { value: -0.16, itemStyle: { color: down } },
        { value: -1.02, itemStyle: { color: down } },
        { value: -0.93, itemStyle: { color: down } },
        { value: -0.71, itemStyle: { color: down } },
        { value: -0.79, itemStyle: { color: down } },
        { value: -1.03, itemStyle: { color: down } }
      ],
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      barMaxWidth: 24
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: 9月1日热点板块涨跌幅分布 ---
  var chart3 = echarts.init(document.getElementById('chart-sector-heat'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink }, axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['电子化学品', 'HBM', 'PCB', 'MLCC', 'CPO', '供销社系', '离境退税', '水产', '科技助农', '农业种植', '转基因'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: -4.00, itemStyle: { color: down } },
        { value: -3.46, itemStyle: { color: down } },
        { value: -3.24, itemStyle: { color: down } },
        { value: -3.04, itemStyle: { color: down } },
        { value: -2.98, itemStyle: { color: down } },
        { value: 3.98, itemStyle: { color: up } },
        { value: 4.33, itemStyle: { color: up } },
        { value: 4.82, itemStyle: { color: up } },
        { value: 5.59, itemStyle: { color: up } },
        { value: 7.17, itemStyle: { color: accent } },
        { value: 8.52, itemStyle: { color: accent } }
      ],
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      barMaxWidth: 20
    }]
  });
  window.addEventListener('resize', function() { chart3.resize(); });
})();