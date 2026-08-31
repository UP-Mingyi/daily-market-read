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

  // --- Chart 1: Global Index Comparison ---
  var chart1 = echarts.init(document.getElementById('chart-global-index'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['恒生科技', '恒生指数', '纳斯达克', '标普500', '道琼斯', '上证指数', '深证成指'],
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: -0.52, itemStyle: { color: down } },
        { value: 0.07, itemStyle: { color: up } },
        { value: -0.52, itemStyle: { color: down } },
        { value: -0.25, itemStyle: { color: down } },
        { value: -0.02, itemStyle: { color: down } },
        { value: -0.21, itemStyle: { color: down } },
        { value: -0.35, itemStyle: { color: down } }
      ],
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      barMaxWidth: 24
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: A-Share Weekly Trend ---
  var chart2 = echarts.init(document.getElementById('chart-weekly-trend'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '5%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['8/24 周一', '8/25 周二', '8/26 周三', '8/27 周四', '8/28 周五'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: [{
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    }, {
      type: 'value',
      name: '成交额(万亿)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { show: false }
    }],
    series: [{
      name: '涨跌幅',
      type: 'bar',
      data: [
        { value: -0.88, itemStyle: { color: down } },
        { value: 0.32, itemStyle: { color: up } },
        { value: 0.58, itemStyle: { color: up } },
        { value: 1.48, itemStyle: { color: up } },
        { value: -0.21, itemStyle: { color: down } }
      ],
      barMaxWidth: 32,
      label: { show: true, position: 'top', formatter: '{c}%', color: ink, fontSize: 11 }
    }, {
      name: '成交额',
      type: 'line',
      yAxisIndex: 1,
      data: [2.02, 1.84, 1.82, 2.14, 2.12],
      smooth: true,
      lineStyle: { color: accent, width: 2 },
      itemStyle: { color: accent },
      symbol: 'circle',
      symbolSize: 6,
      label: { show: true, formatter: '{c}万亿', color: accent, fontSize: 10 }
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: Sector Heat ---
  var chart3 = echarts.init(document.getElementById('chart-sector-heat'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: '3%', right: '10%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['农林牧渔', '化工', 'AI硬件', '消费', '医药', '黄金', '房地产', '半导体'],
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
        { value: 14, itemStyle: { color: accent } },
        { value: 7, itemStyle: { color: accent + 'cc' } },
        { value: 7, itemStyle: { color: accent + '99' } },
        { value: 7, itemStyle: { color: accent + '66' } },
        { value: 4, itemStyle: { color: accent2 } },
        { value: 2, itemStyle: { color: accent2 + 'cc' } },
        { value: 2, itemStyle: { color: accent2 + '99' } },
        { value: 5, itemStyle: { color: accent2 + '66' } }
      ],
      barMaxWidth: 36,
      label: { show: true, position: 'top', color: ink, fontSize: 12, fontWeight: 700 }
    }]
  });
  window.addEventListener('resize', function() { chart3.resize(); });
})();