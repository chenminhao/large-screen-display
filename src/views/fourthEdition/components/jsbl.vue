<template>
  <div style="width:100%;">
    <a-spin :spinning="loading">
      <div id="doughnut-block2">
        <div :style="{height:doughnutHeight+'px'}" v-for="item in 3" :key="item" :id="`${id}-${item}`"></div>
      </div>
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
    },
    globalSize: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      xxdm: '',
      from: null,
      to: null,
      loading: false,
      legendData: [],
      seriesData: [],
      doughnutHeight: ''
    }
  },
  mounted () {
    this.doughnutHeight = document.getElementById('doughnut-block2').clientWidth / 3 / (161 / 198)
    setTimeout(() => {
      this.loadDom()
    }, 500)
  },
  watch: {
    globalSize (val) {
      this.doughnutHeight = document.getElementById('doughnut-block2').clientWidth / 3 / (161 / 198)
      this.resize()
    }
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      var getvalue = [77.8, 78.2, 80.1]
      for (let i = 1; i < 4; i++) {
        var myChart = this.$echarts.init(document.getElementById(`${this.id}-${i}`))
        myChart.clear()
        const option = {
          title: [{
            text: i === 1 ? this.title : '',
            textStyle: {
              color: '#fff',
              fontSize: 14,
              fontweight: 400
            },
            top: 10,
            left: 10
          }, {
            text: getvalue[i - 1] + '%',
            x: 'center',
            y: '52%',
            textStyle: {
              fontWeight: 'normal',
              color: '#fff',
              fontSize: 14
            }
          }],
          angleAxis: {
            max: 100,
            clockwise: true, // 逆时针
            // 隐藏刻度线
            show: false
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false

            },
            axisTick: {
              show: false
            }
          },
          polar: {
            center: ['50%', '55%'],
            radius: '140%' // 图形大小
          },
          series: [{
            type: 'bar',
            data: [getvalue[i - 1]],
            showBackground: true,
            backgroundStyle: {
              color: '#082560'
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 14,
            itemStyle: {
              normal: {
                opacity: 1,
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: '#02FDFF' },

                  { offset: 1, color: '#063ED2' }
                ])
              }
            }
          }]
        }
        myChart.setOption(option)
      }
    }
  }
}
</script>
<style lang="less" scoped>
#doughnut-block2 {
  display: flex;
  > div {
    flex: 1;
  }
}
</style>
