<template>
  <div :id="id" style="width:100%;height:262px;"></div>
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
      // var currentIndex = -1
      const option = {
        title: {
          text: '历年各学科门类专业教师数据',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            controlStyle: false,
            bottom: 0,
            label: {
              color: '#fff'
            },
            data: ['2017', '2018', '2019']
          },
          xAxis: {
            'type': 'category',
            data: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学'],
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
          },
          yAxis: {
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
            splitLine: {
              show: false
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
              color: '#fff'
            }
          },
          series: [{
            type: 'bar',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1f79ff'
              }, {
                offset: 1,
                color: '#54c5ff'
              }])
            }
          }
          ]
        },
        options: [{
          xAxis: [{
            'type': 'category',
            'axisLabel': {
              'interval': 0
            },
            data: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学']
          }],
          series: [{
            data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
          }
          ]
        },
        {
          xAxis: [{
            'type': 'category',
            'axisLabel': {
              'interval': 0
            },
            data: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学'],
            splitLine: {
              show: false
            }
          }],
          series: [{
            data: [1, 12, 3, 4, 5, 1, 12, 3, 4, 5, 1, 12]
          }
          ]
        }, {
          xAxis: [{
            'type': 'category',
            'axisLabel': {
              'interval': 0
            },
            data: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学'],
            splitLine: {
              show: false
            }
          }],
          series: [{
            data: [1, 2, 9, 4, 1, 2, 9, 4, 1, 2, 9, 4]
          }
          ]
        }

        ]

      }
      this.myChart.setOption(option)
      // setInterval(() => {
      //   var dataLen = option.series[0].data.length
      //   // 取消之前高亮的图形
      //   this.myChart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   currentIndex = (currentIndex + 1) % dataLen
      //   this.myChart.setOption(option)
      //   // 高亮当前图形
      //   this.myChart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   // 显示 tooltip
      //   this.myChart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      // }, 1200)
    }
  }
}
</script>

<style>
</style>
