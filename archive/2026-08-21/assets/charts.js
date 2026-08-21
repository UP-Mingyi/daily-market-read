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
  var bg = style.getPropertyValue('--bg').trim();

  // --- 全球主要指数近5日走势 ---
  var chartGlobal = echarts.init(document.getElementById('chart-global'), null, { renderer: 'svg' });

  var dates = ['8/14', '8/17', '8/18', '8/19', '8/20'];

  // 归一化基点为100
  function normalize(prices) {
    var base = prices[0];
    return prices.map(function(p) { return parseFloat(((p / base) * 100).toFixed(2)); });
  }

  var sh_raw = [3927.18, 3982.65, 3990.30, 3894.42, 3903.72];
  var sz_raw = [14354.31, 14704.27, 14622.50, 13890.15, 13972.78];
  var dj_raw = [53732.41, 53459.78, 53343.40, 53463.05, 52759.21];
  var ix_raw = [26729.16, 26644.91, 26289.71, 26331.09, 26067.17];
  var hsi_raw = [25116.85, 25453.23, 25471.15, 25495.07, 25698.49];

  var option = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      backgroundColor: bg2,
      borderColor: rule,
      textStyle: { color: ink, fontSize: 12 }
    },
    legend: {
      data: ['上证指数', '深证成指', '道琼斯', '纳斯达克', '恒生指数'],
      textStyle: { color: muted, fontSize: 11 },
      bottom: 0
    },
    grid: { left: '8%', right: '6%', top: '8%', bottom: '12%' },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false },
      axisLabel: { color: muted, fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      name: '归一化 (100)',
      nameTextStyle: { color: muted, fontSize: 10 },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11 }
    },
    color: [up, '#d4af37', down, '#f4a261', accent],
    series: [
      {
        name: '上证指数', type: 'line', data: normalize(sh_raw),
        lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6
      },
      {
        name: '深证成指', type: 'line', data: normalize(sz_raw),
        lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6
      },
      {
        name: '道琼斯', type: 'line', data: normalize(dj_raw),
        lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6
      },
      {
        name: '纳斯达克', type: 'line', data: normalize(ix_raw),
        lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6
      },
      {
        name: '恒生指数', type: 'line', data: normalize(hsi_raw),
        lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6
      }
    ]
  };

  chartGlobal.setOption(option);
  window.addEventListener('resize', function() { chartGlobal.resize(); });
})();