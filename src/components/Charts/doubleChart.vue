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
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
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
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#29A8FF'
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
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#29A8FF'
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
                    { offset: 0, color: '#279ced' },
                    { offset: 0.5, color: '#2079bb' },
                    { offset: 1, color: '#0d1932' }
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
                    { offset: 0, color: '#b7338c' },
                    { offset: 0.5, color: '#af3187' },
                    { offset: 1, color: '#2d1941' }
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
