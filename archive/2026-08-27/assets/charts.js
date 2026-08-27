// assets/charts.js - 全球主要指数表现对比
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var chartEl = document.getElementById('chart-global');
  if (!chartEl) return;
  var chart = echarts.init(chartEl, null, { renderer: 'svg' });

  var dates = ['08-20', '08-21', '08-24', '08-25', '08-26'];
  // Rebased to 100 at 08-20
  var dow = [100, 100.08, 100.25, 100.12, 99.79];
  var nasdaq = [100, 100.26, 100.18, 100.10, 99.92];
  var sp500 = [100, 100.15, 100.12, 100.05, 99.98];
  var hsi = [100, 101.21, 99.92, 99.90, 100.46];
  var hstech = [100, 101.40, 99.61, 99.51, 100.33];

  chart.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      backgroundColor: '#1b263b',
      borderColor: rule,
      textStyle: { color: ink, fontSize: 12 }
    },
    legend: {
      data: ['道琼斯', '纳斯达克', '标普500', '恒生指数', '恒生科技'],
      bottom: 0,
      textStyle: { color: muted, fontSize: 11 },
      itemWidth: 16, itemHeight: 8
    },
    grid: { left: '3%', right: '4%', top: '3%', bottom: '12%', containLabel: true },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false },
      axisLabel: { color: muted, fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      name: '基准化(08-20=100)',
      nameTextStyle: { color: muted, fontSize: 10 },
      axisLabel: { color: muted, fontSize: 10 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      min: 99.4
    },
    color: [up, accent, muted, '#2a9d8f', '#f4a261'],
    series: [
      { name: '道琼斯', type: 'line', data: dow, smooth: true, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 5 },
      { name: '纳斯达克', type: 'line', data: nasdaq, smooth: true, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 5 },
      { name: '标普500', type: 'line', data: sp500, smooth: true, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 5 },
      { name: '恒生指数', type: 'line', data: hsi, smooth: true, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 5 },
      { name: '恒生科技', type: 'line', data: hstech, smooth: true, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 5 }
    ]
  });

  window.addEventListener('resize', function() { chart.resize(); });
})();