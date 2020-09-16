<template>
  <div style="width:100%;">
    <a-spin :spinning="loading">
      <div class="doughnut-block">
        <div v-for="item in 4" :key="item" :id="`${id}-${item}`"></div>
      </div>
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
      const color = ['#2d99fa', '#2b9ffd', '#eb479f', '#358bf6']
      const chartData = [{
        name: '正高级',
        value: 17.25,
        unit: '元'
      },
      {
        name: '副高级',
        value: 33.35,
        unit: '元'
      },
      {
        name: '中级',
        value: 37.83,
        unit: '元'
      },
      {
        name: '其他',
        value: 11.57,
        unit: '元'
      }
      ]
      const arrName = []
      const arrValue = []
      let sum = 0
      const pieSeries = []
      const lineYAxis = []

      // 数据处理
      chartData.forEach((v, i) => {
        arrName.push(v.name)
        arrValue.push(v.value)
        sum = sum + v.value
      })

      // 图表option整理
      chartData.forEach((v, i) => {
        pieSeries.push({
          name: '学历',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
          center: ['50%', '50%'],
          label: {
            show: false
          },
          data: [{
            value: v.value,
            name: v.name
          }, {
            value: sum - v.value,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        })
        pieSeries.push({
          name: '',
          type: 'pie',
          silent: true,
          z: 1,
          clockWise: true, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
          center: ['50%', '50%'],
          label: {
            show: false
          },
          data: [{
            value: 7.5,
            itemStyle: {
              color: '#122043'
            }
          }, {
            value: 2.5,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        })
        v.percent = (v.value / sum * 100).toFixed(1) + '%'
        lineYAxis.push({
          value: i,
          textStyle: {
            rich: {
              circle: {
                color: color[i],
                padding: [0, 5]
              }
            }
          }
        })
      })
      // 基于准备好的dom，初始化echarts实例
      for (let i = 1; i < 5; i++) {
        this.myChart = this.$echarts.init(document.getElementById(`${this.id}-${i}`))
        this.myChart.clear()
        const option = {
          color: color,
          grid: {
            top: '28%',
            bottom: '54%',
            left: '50%',
            containLabel: false
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function (params) {
                const item = chartData[params]
                console.log(item)
                return '{name|' + item.name + '}{value|' + item.value + '%' + '}'
              },
              interval: 0,
              inside: false,
              textStyle: {
                color: '#fff',
                fontSize: 10,
                rich: {
                  name: {
                    color: '#fff',
                    fontSize: 10
                  },
                  value: {
                    color: '#fff',
                    fontSize: 10,
                    padding: [0, 0, 0, 5]
                  }
                }
              },
              show: true
            },
            data: lineYAxis
          }],
          xAxis: [{
            show: false
          }],
          series: pieSeries
        }
        this.myChart.setOption(option)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.doughnut-block {
  display: flex;
  > div {
    flex: 1;
    height: 312px;
  }
}
</style>
