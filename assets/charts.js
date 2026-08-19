(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--down').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- Chart: Global Market Comparison ---
  var chartEl = document.getElementById('chart-global');
  if (chartEl) {
    var chart = echarts.init(chartEl, null, { renderer: 'svg' });

    var categories = ['上证指数', '深证成指', '创业板指', '沪深300', '道琼斯', '纳斯达克', '标普500', '恒生指数', '恒生科技'];
    var values = [0.19, -0.56, -0.92, -0.32, -0.22, -1.33, -0.69, 0.07, -0.90];

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        appendToBody: true,
        formatter: function(params) {
          var v = params[0].value;
          return params[0].name + '<br/>涨跌幅: <b style="color:' + (v >= 0 ? up : down) + '">' + (v >= 0 ? '+' : '') + v.toFixed(2) + '%</b>';
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: categories,
        axisLabel: { color: muted, fontSize: 11, rotate: 30 },
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        name: '涨跌幅 (%)',
        nameTextStyle: { color: muted, fontSize: 11 },
        axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' },
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

    window.addEventListener('resize', function() { chart.resize(); });
  }
})();