// assets/charts.js
// 盘前必读 2026-08-20 — ECharts 图表

(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: 全球主要指数对比 ---
  var chartGlobal = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });

  var categories = ['上证指数', '深证成指', '创业板指', '道琼斯', '标普500', '纳斯达克', '恒生指数', '恒生科技', '英国富时', '德国DAX', 'COMEX黄金'];
  var values = [-2.40, -5.01, -6.26, 0.22, 0.21, 0.16, 0.09, -1.21, 0.14, -0.14, 3.62];

  chartGlobal.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var p = params[0];
        return p.name + '<br/>涨跌幅：<b>' + (p.value >= 0 ? '+' : '') + p.value.toFixed(2) + '%</b>';
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: '6%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: {
        color: muted,
        fontSize: 11,
        rotate: 30
      },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '涨跌幅 (%)',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLabel: {
        color: muted,
        fontSize: 11,
        formatter: function(v) { return (v >= 0 ? '+' : '') + v + '%'; }
      },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: values.map(function(v) {
        return {
          value: v,
          itemStyle: {
            color: v >= 0 ? up : down,
            borderRadius: [4, 4, 0, 0]
          }
        };
      }),
      barWidth: '50%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 10,
        formatter: function(p) { return (p.value >= 0 ? '+' : '') + p.value.toFixed(2) + '%'; }
      }
    }]
  });

  window.addEventListener('resize', function() { chartGlobal.resize(); });
})();