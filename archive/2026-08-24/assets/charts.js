// assets/charts.js
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart: 全球指数一周对比 ---
  var chartGlobal = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });
  chartGlobal.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['道琼斯', '纳斯达克', '标普500', '恒生指数', '恒生科技', '沪指', '创业板指'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted },
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 0.98, itemStyle: { color: up } },
        { value: 0.43, itemStyle: { color: up } },
        { value: 0.43, itemStyle: { color: up } },
        { value: 1.21, itemStyle: { color: up } },
        { value: 1.40, itemStyle: { color: up } },
        { value: 0.04, itemStyle: { color: up } },
        { value: 1.43, itemStyle: { color: up } }
      ],
      barWidth: '50%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 11,
        formatter: function(p) { return (p.value >= 0 ? '+' : '') + p.value.toFixed(2) + '%'; }
      }
    }]
  });

  window.addEventListener('resize', function() { chartGlobal.resize(); });
})();