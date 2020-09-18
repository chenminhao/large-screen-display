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
      loading: false,
      option: null,
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
      var currentIndex = -1
      this.option = {
        title: {
          text: '辅导员与心理咨询师数量历年趋势分析',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        color: ['#29a8ff', '#E93CA7'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['辅导员', '心里咨询人员'],
          right: 10,
          top: 30,
          icon: 'roundRect',
          itemWidth: 18,
          itemHeight: 4, // 修改icon图形大小
          textStyle: {
            color: '#fff',
            fontSize: 10
          }
        },
        grid: {
          top: 60,
          left: '14%',
          right: '4%',
          bottom: '14%',
          containLabel: false
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['2017', '2018', '2019'],
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
              fontSize: 12,
              color: '#d0d0d0',
              show: true,
              interval: 0,
              textStyle: {
                color: '#fff',
                margin: 12
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
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
            name: '辅导员',
            type: 'bar',
            barWidth: 20,
            data: [100, 100, 100],
            itemStyle: {
              normal: {
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#28a4fa' }, // 柱图渐变色
                      { offset: 0.5, color: '#1c68a5' }, // 柱图渐变色
                      { offset: 1, color: '#0c1936' } // 柱图渐变色
                    ]
                  )
                }
              }
            }
          },
          {
            name: '心里咨询人员',
            type: 'bar',
            barWidth: 20,
            data: [20, 20, 200],
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
      this.myChart.clear()
      this.myChart.setOption(this.option)
      setInterval(() => {
        var dataLen = this.option.series[0].data.length
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        this.myChart.setOption(this.option)
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
