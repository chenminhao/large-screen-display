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
      // 基于准备好的dom，初始化echarts实例
      for (let key = 1; key < 5; key++) {
        const color = ['#2d99fa', '#2b9ffd', '#eb479f', '#358bf6']
        const titles = ['职称占比', '学位占比', '年龄占比', '导师占比']
        const chartData = [
          [{
            name: '正高级',
            value: 17.25
          },
          {
            name: '副高级',
            value: 33.35
          },
          {
            name: '中级',
            value: 37.83
          },
          {
            name: '其他',
            value: 11.57
          }],
          [{
            name: '博士',
            value: 40.46
          },
          {
            name: '硕士',
            value: 45.15
          },
          {
            name: '其他',
            value: 14.39
          }],
          [{
            name: '35岁以下',
            value: 26.62
          },
          {
            name: '36~45岁',
            value: 41.17
          },
          {
            name: '46~55岁',
            value: 23.68
          },
          {
            name: '56岁以上',
            value: 8.53
          }], [{
            name: '硕士研究生',
            value: 17.66
          },
          {
            name: '博士研究生',
            value: 75.15
          },
          {
            name: '其他',
            value: 7.18
          }]
        ]
        const arrName = []
        const arrValue = []
        let sum = 0
        const pieSeries = []
        const lineYAxis = []

        // 数据处理
        chartData[key - 1].forEach((v, i) => {
          arrName.push(v.name)
          arrValue.push(v.value)
          sum = sum + v.value
        })

        // 图表option整理
        chartData[key - 1].forEach((v, i) => {
          pieSeries.push({
            name: '',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [90 - i * 15 + '%', 80 - i * 15 + '%'],
            center: ['50%', '66%'],
            label: {
              show: false,
              normal: {
                position: 'center',
                formatter: function (params, ticket, callback) {
                  return `${titles[key - 1]}`
                },
                color: '#2AA8FF'
              }
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
            radius: [90 - i * 15 + '%', 80 - i * 15 + '%'],
            center: ['50%', '66%'],
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
        this.myChart = this.$echarts.init(document.getElementById(`${this.id}-${key}`))
        this.myChart.clear()
        const option = {
          color: color,
          grid: {
            top: '38%',
            bottom: '44%',
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
                const item = chartData[key - 1][params]
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
    height: 320px;
  }
}
</style>
