<template>
  <div :id="id" style="width:100%;"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: (new Date()).getTime()
    },
    globalSize: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / 2 + 'px'
    this.loadDom()
  },
  watch: {
    globalSize (val) {
      document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / 2 + 'px'
      this.resize()
    }
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
          text: '全省教学名师',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 0,
          left: 10
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
          itemWidth: 18,
          itemHeight: 4, // 修改icon图形大小
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
                      { offset: 0, color: '#68E0CF' },
                      { offset: 1, color: '#209CFF' }
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
                      { offset: 0, color: '#AE2CF1' },
                      { offset: 1, color: '#7876FF' }
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
      }, this.globalTimes)
    }
  }
}
</script>

<style>
</style>
