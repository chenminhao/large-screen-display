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
    this.doughnutHeight = document.getElementById('doughnut-block2').clientWidth / 3 / (161 / (this.id === 'gccbl' ? 196 : 198))
    setTimeout(() => {
      this.loadDom()
    }, 500)
  },
  watch: {
    globalSize (val) {
      this.doughnutHeight = document.getElementById('doughnut-block2').clientWidth / 3 / (161 / (this.id === 'gccbl' ? 196 : 198))
      this.resize()
    }
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      var seriesData = [
        { value: 21, name: '一流大学' },
        { value: 28, name: '普通本科' }
      ]
      for (let i = 1; i < 4; i++) {
        var myChart = this.$echarts.init(document.getElementById(`${this.id}-${i}`))
        myChart.clear()
        const option = {
          title: {
            text: i === 1 ? this.title : '',
            textStyle: {
              color: '#fff',
              fontSize: 14,
              fontweight: 400
            },
            top: 10,
            left: 10
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            confine: true// 将此限制打开后tooltip将不再溢出
          },
          series: [
            {
              name: this.title,
              type: 'pie',
              startAngle: 180,
              radius: ['40%', '55%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  formatter: function (params, ticket, callback) {
                    return '{white|' + params.name + '}\n{yellow|' + params.value + '%' + '}'
                  },
                  rich: {
                    yellow: {
                      color: '#fff',
                      fontSize: 10,
                      padding: [5, 0],
                      align: 'center'
                    },
                    white: {
                      color: '#fff',
                      align: 'center',
                      fontSize: 10,
                      padding: [0, 0]
                    }
                  }
                }
              },
              itemStyle: {
                color: (params) => {
                  var colorArr = ['#289ff8', '#6817ce', '#3066f5', '#ea45a0', '#ef886f', '#ebb794']
                  return colorArr[params.dataIndex]
                }
              },
              data: seriesData
            }
          ]
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
