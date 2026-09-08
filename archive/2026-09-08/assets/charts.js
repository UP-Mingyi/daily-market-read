(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg3 = style.getPropertyValue('--bg3').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();
  var warn = style.getPropertyValue('--warn').trim();

  // --- Chart 1: 9/7 概念板块领涨/领跌 ---
  var chart1 = echarts.init(document.getElementById('chart-concept'), null, { renderer: 'svg' });
  var conceptNames = ['共封装光学(CPO)', 'F5G概念', 'PCB概念', 'PET铜箔', '转基因', '铜缆高速连接', '兵装重组', '数字货币', '跨境支付(CIPS)', '互联网保险', '黄金概念', '期货概念'];
  var conceptVals = [5.59, 4.31, 4.23, 3.94, 3.87, 3.81, -1.52, -1.17, -1.05, -0.93, -0.88, -0.86];
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 60, right: 40, top: 20, bottom: 80 },
    xAxis: {
      type: 'category',
      data: conceptNames,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 10, interval: 0, rotate: 35 }
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
      data: conceptVals.map(function(v) {
        return { value: v, itemStyle: { color: v >= 0 ? up : down } };
      }),
      barWidth: '52%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 10,
        formatter: function(p) { return p.value >= 0 ? '+' + p.value + '%' : p.value + '%'; }
      }
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: 最近交易日全球指数对比 ---
  var chart2 = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });
  var indices = ['创业板指', '中证500', '沪深300', '上证指数', '恒生指数', '标普500*', '纳斯达克*', '道琼斯*'];
  var vals = [3.41, 1.06, 0.59, 0.07, -0.93, -0.38, -0.29, -0.51];
  chart2.setOption({
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
  window.addEventListener('resize', function() { chart2.resize(); });
})();
