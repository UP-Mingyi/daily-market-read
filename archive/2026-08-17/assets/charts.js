// assets/charts.js - 盘前必读 市场温度计图表
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg = style.getPropertyValue('--bg').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var up = style.getPropertyValue('--up').trim();
  var down = style.getPropertyValue('--down').trim();

  // --- 市场情绪温度计 ---
  var gaugeEl = document.getElementById('chart-gauge');
  if (gaugeEl) {
    var gauge = echarts.init(gaugeEl, null, { renderer: 'svg' });
    gauge.setOption({
      animation: false,
      series: [{
        type: 'gauge',
        startAngle: 210,
        endAngle: -30,
        center: ['50%', '65%'],
        radius: '90%',
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
            color: [
              [0.2, down],
              [0.4, accent2],
              [0.6, accent],
              [0.8, up],
              [1, '#e63946']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '60%',
          width: 8,
          offsetCenter: [0, '-10%'],
          itemStyle: {
            color: accent
          }
        },
        axisTick: {
          length: 10,
          lineStyle: { color: 'auto', width: 1.5 }
        },
        splitLine: {
          length: 22,
          lineStyle: { color: 'auto', width: 3 }
        },
        axisLabel: {
          color: muted,
          fontSize: 10,
          distance: 20,
          formatter: function(v) {
            if (v === 0) return '冰点';
            if (v === 25) return '偏冷';
            if (v === 50) return '中性';
            if (v === 75) return '偏热';
            if (v === 100) return '过热';
            return '';
          }
        },
        title: {
          offsetCenter: [0, '42%'],
          fontSize: 13,
          color: muted
        },
        detail: {
          valueAnimation: false,
          fontSize: 32,
          fontWeight: 'bold',
          color: accent,
          offsetCenter: [0, '72%'],
          formatter: '{value}°C'
        },
        data: [{ value: 58, name: '温和偏暖' }]
      }]
    });
    window.addEventListener('resize', function() { gauge.resize(); });
  }
})();