<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:305px;"></div>
    </a-spin>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null,
      loading: false,
      data: {
        bksrs: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        zrjsbl: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        cryxzc: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        xss: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        ssbs: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        zxjxjf: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        zxsbl: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        bkzyzs: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        },
        sjbksyjf: {
          xAxis: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          data: [13, 17, 16, 18, 19, 21, 23]
        }
      }
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
          text: this.title,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '14%',
          left: '14%',
          right: '10%',
          bottom: '14%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            data: this.data[this.id].xAxis,
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
              // rotate: 35, // 字体倾斜
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
        series: [{
          name: this.title,
          type: 'bar',
          barWidth: 20,
          data: this.data[this.id].data,
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
        }]
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
      }, 3000)
    }
  }
}
</script>
