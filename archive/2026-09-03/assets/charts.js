(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart 1: 主要指数9月2日涨跌幅 ---
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
        { value: -0.97, itemStyle: { color: down } },
        { value: -1.88, itemStyle: { color: down } },
        { value: -2.39, itemStyle: { color: down } },
        { value: -1.82, itemStyle: { color: down } },
        { value: 2.50, itemStyle: { color: up } }
      ],
      barMaxWidth: 42,
      label: { show: true, position: 'top', formatter: '{c}%', color: ink, fontSize: 11, fontWeight: 700 }
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: 全球主要指数9月2日涨跌幅对比 ---
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
      data: ['北证50', '恒生指数', '标普500', '道琼斯', '纳斯达克'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 2.50, itemStyle: { color: up } },
        { value: -0.07, itemStyle: { color: down } },
        { value: 0.46, itemStyle: { color: up } },
        { value: 0.56, itemStyle: { color: up } },
        { value: 0.45, itemStyle: { color: up } }
      ],
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      barMaxWidth: 24
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: 涨停预期个股主力净额（9月2日，万元） ---
  var chart3 = echarts.init(document.getElementById('chart-sector-heat'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink }, axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      name: '主力净额(万元)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['磁谷科技', '鸿合科技', '成都银行', '正川股份', '宁波银行', '博硕科技', '桐昆股份', '中石科技', '浪潮信息'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 1315.29, itemStyle: { color: accent } },
        { value: 1521.92, itemStyle: { color: accent } },
        { value: 1728.47, itemStyle: { color: accent } },
        { value: 2122.25, itemStyle: { color: accent } },
        { value: 4072.98, itemStyle: { color: accent } },
        { value: 4453.79, itemStyle: { color: accent } },
        { value: 5610.39, itemStyle: { color: accent } },
        { value: 6259.80, itemStyle: { color: accent } },
        { value: 9604.82, itemStyle: { color: accent } }
      ],
      label: { show: true, position: 'right', formatter: '{c}万', color: ink, fontSize: 11 },
      barMaxWidth: 20
    }]
  });
  window.addEventListener('resize', function() { chart3.resize(); });
})();