<template>
  <a-spin :spinning="loading">
    <div :id="id"></div>
  </a-spin>
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
      loading: false,
      option: null,
      timer: null
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (485 / 221) + 'px'
    this.loadDom()
  },
  watch: {
    globalSize (val) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.resize()
      }, 500)
    }
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.id))
      this.option = {
        title: {
          text: '全国学科结构',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['2017', '2018', '2019'],
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
          left: '10%',
          right: '6%',
          bottom: '10%',
          containLabel: false
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
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
              interval: 0,
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
            name: '2017',
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
            barGap: '0%',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#FFB696' }, // 柱图渐变色
                    { offset: 0.5, color: '#fe9a96' }, // 柱图渐变色
                    { offset: 1, color: '#FF7A95' } // 柱图渐变色
                  ]
                )
              }
            }
          },
          {
            name: '2018',
            type: 'bar',
            barGap: '0%',
            data: [1, 12, 3, 4, 5, 1, 12, 3, 4, 5, 1, 12],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#AE2CF1' }, // 柱图渐变色
                    { offset: 0.5, color: '#9152f8' }, // 柱图渐变色
                    { offset: 1, color: '#7776FF' } // 柱图渐变色
                  ]
                )
              }
            }
          },
          {
            name: '2019',
            type: 'bar',
            barGap: '0%',
            data: [1, 2, 9, 4, 1, 2, 9, 4, 1, 2, 9, 4],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#209CFF' }, // 柱图渐变色
                    { offset: 0.5, color: '#47c1e5' }, // 柱图渐变色
                    { offset: 1, color: '#209CFF' } // 柱图渐变色
                  ]
                )
              }
            }
          }
        ]
      }
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}
</script>
