(function() {
  var style = getComputedStyle(document.documentElement);
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  var chart = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });
  var indices = ['上证指数', '深证成指', '创业板指', '恒生指数', '标普500*', '纳斯达克*', '道琼斯*'];
  var vals = [0.39, 0.25, 0.05, -0.28, -0.58, -0.32, -1.18];
  chart.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 60, right: 40, top: 20, bottom: 45 },
    xAxis: {
      type: 'category',
      data: indices,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 10, interval: 0, rotate: 20 }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅(%)',
      nameTextStyle: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [{
      type: 'bar',
      data: vals.map(function(v) {
        return { value: v, itemStyle: { color: v >= 0 ? up : down } };
      }),
      barWidth: '46%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 10,
        formatter: function(p) { return p.value >= 0 ? '+' + p.value + '%' : p.value + '%'; }
      }
    }]
  });
  window.addEventListener('resize', function() { chart.resize(); });
})();
