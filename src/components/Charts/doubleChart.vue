<template>
  <a-spin :spinning="loading">
    <div style="width:100%;height:196px;" :id="id"></div>
  </a-spin>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      xxdm: '',
      from: null,
      to: null,
      loading: false,
      legendData: [],
      seriesData: []
    }
  },
  mounted () {
    this.loadDom()
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.id))
      myChart.clear()
      const option = {
        title: {
          text: '录取文理科最高分和最低分',
          textStyle: {
            color: '#00FFFF',
            fontSize: 14,
            fontweight: 400
          },
          padding: [10, 0, 0, 10],
          left: 'left'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最低分', '最高分'],
          right: 10,
          top: 8,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '20%',
          left: '10%',
          right: '6%',
          bottom: '14%',
          containLabel: false
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['文科', '理科'],
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#01F8FB'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
              color: '#fff'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#01F8FB'
              }
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
              color: '#fff'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '最低分',
            type: 'bar',
            barWidth: 20,
            data: [100, 100],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#02edf0' },
                    { offset: 0.5, color: '#0d9ea0' },
                    { offset: 1, color: '#0c1936' }
                  ]
                )
              }
            }
          },
          {
            name: '最高分',
            type: 'bar',
            barWidth: 20,
            data: [20, 20],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#20ca9c' },
                    { offset: 0.5, color: '#1f886c' },
                    { offset: 1, color: '#0c1936' }
                  ]
                )
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
