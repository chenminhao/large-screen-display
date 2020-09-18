<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;"></div>
    </a-spin>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    globalSize: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null,
      xxdm: '',
      from: null,
      to: null,
      loading: false
    }
  },
  watch: {
    globalSize (val) {
      document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (475 / 230) + 'px'
      this.resize()
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (475 / 230) + 'px'
    this.loadDom()
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      var xAxis = ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学']
      var data = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390]
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      const option = {
        title: {
          text: '专业布局 ',
          top: 12,
          left: 12,
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontweight: 400
          }
        },
        color: ['#E93CA7', '#29A8FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: 20,
          right: 20,
          icon: 'roundRect',
          itemWidth: 18,
          itemHeight: 4, // 修改icon图形大小
          textStyle: {
            color: '#fff'
          },
          data: ['高校布点数', '专业布点数']
        },
        grid: {
          top: '20%',
          left: '6%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
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
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#29A8FF'
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed', // 虚线
                color: '#233e64'
              }
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '专业布点数',
            type: 'bar',
            barWidth: 20,
            data: data,
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
            name: '高校布点数',
            type: 'line',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#E33AA3'
              }
            },
            data: data
          }
        ]
      }
      this.myChart.setOption(option)
      var currentIndex = -1
      setInterval(() => {
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        // if (currentIndex + 1 === dataLen) {
        //   this.newIndex = this.newIndex % 3 + 1
        // }
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
