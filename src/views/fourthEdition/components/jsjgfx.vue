<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:228px;"></div>
    </a-spin>
  </div>
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
      myChart: null,
      loading: false
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
      var xAxis = ['教育部创新团', '黄大年式教学团队', 'NSFC创新研究群体', '科技部重点领域创新团队', '国家级教学团队', '省级高层次研究团队', '省部级教学团队']
      var data = [683, 137, 364, 98, 796, 5211, 5234]
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      var currentIndex = -1
      const option = {
        title: {
          text: '全国高层次教学团队情况',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '20%',
          left: '14%',
          right: '12%',
          bottom: '40%',
          containLabel: false
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
              rotate: 35, // 字体倾斜
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
            type: 'value',
            max: 6000
          }
        ],
        series: [
          {
            name: '全国高层次教学团队情况',
            type: 'bar',
            barWidth: 20,
            data: data,
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
                },
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#fff',
                    fontSize: 10
                  }
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
