<template>
  <div :id="id" style="width:100%;height:232px"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: (new Date()).getTime()
    }
  },
  data () {
    return {
      myChart: null
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
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      var currentIndex = -1
      const option = {
        title: {
          text: '全国教学名师趋势分析',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          left: 'center'
        },
        color: ['#29a8ff', '#E93CA7'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '21%',
          left: '8%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        legend: {
          top: 20,
          textStyle: {
            color: '#fff'
          },
          data: ['国家级教学名师', '省级教学名师']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#29A8FF'
              }
            },
            data: ['2017', '2018', '2019']
          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 700,
            position: 'left',
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#29A8FF'
              }
            },
            splitLine: false
          },
          {
            type: 'value',
            max: 7000,
            position: 'right',
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#29A8FF'
              }
            },
            splitLine: false
          }
        ],
        series: [
          {
            name: '国家级教学名师',
            type: 'bar',
            barWidth: 20,
            data: [450, 490, 700],
            itemStyle: {
              normal: {
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#28a4fa' },
                      { offset: 0.5, color: '#1c68a5' },
                      { offset: 1, color: '#0c1936' }
                    ]
                  )
                }
              }
            }
          },
          {
            name: '省级教学名师',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 1,
            data: [4500, 5900, 8000],
            itemStyle: {
              normal: {
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#e73ca6' }, // 柱图渐变色
                      { offset: 0.5, color: '#82296f' }, // 柱图渐变色
                      { offset: 1, color: '#0c1936' } // 柱图渐变色
                    ]
                  )
                }
              }
            }
          }
        ]
      }
      this.myChart.setOption(option)
      setInterval(() => {
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        this.myChart.setOption(option)
        // 高亮当前图形
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        // 显示 tooltip
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }, 1200)
    }
  }
}
</script>

<style>
</style>
