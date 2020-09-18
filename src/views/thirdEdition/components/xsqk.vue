<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:230px;margin: 0 auto;"></div>
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
      xxdm: '',
      from: null,
      to: null,
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
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      const option = {
        title: {
          text: '全国历年新生报到率与就业率趋势分析',
          top: 12,
          left: 12,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          }
        },
        color: ['#E93CA7', '#29A8FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
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
          data: ['报到率', '就业率']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: false
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
              show: true,
              interval: 0,
              textStyle: {
                color: '#fff',
                margin: 12
              }
            },
            data: ['2017', '2018', '2019']
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
              show: false
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
              show: true,
              interval: 0,
              textStyle: {
                color: '#fff',
                margin: 12
              }
            },
            splitLine: false
          }
        ],
        series: [
          {
            name: '报到率',
            type: 'line',
            stack: '总量',
            lineStyle: {
              color: '#2774b8'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#2774b8' // 0% 处的颜色
                }, {
                  offset: 1, color: '#101a38' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            data: [120, 132, 101]
          },
          {
            name: '就业率',
            type: 'line',
            stack: '总量',
            lineStyle: {
              color: '#E93CA7'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#E93CA7' // 0% 处的颜色
                }, {
                  offset: 1, color: '#101a38' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            data: [220, 182, 191]
          }
        ]
      }
      this.myChart.setOption(option)
    }
  },
  watch: {
    globalSize (val) {
      this.resize()
    }
  }
}
</script>
