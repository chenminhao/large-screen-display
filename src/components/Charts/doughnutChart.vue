<template>
  <div style="width:100%;height:198px;">
    <a-spin :spinning="loading">
      <a-row>
        <a-col v-for="item in 3" :key="item" :span="8">
          <div :id="`${id}-${item}`"></div>
        </a-col>
      </a-row>
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
      xxdm: '',
      from: null,
      to: null,
      loading: false,
      legendData: [],
      seriesData: []
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

      var legendData = ['一流大学', '普通本科', '独立学院', '一流学科', '新建本科', '合作办学']
      var seriesData = [
        { value: 28, name: '一流大学' },
        { value: 28, name: '普通本科' },
        { value: 26, name: '独立学院' },
        { value: 14, name: '一流学科' },
        { value: 12, name: '新建本科' },
        { value: 10, name: '合作办学' }
      ]
      for (let i = 0; i < 3; i++) {
        var myChart = this.$echarts.init(document.getElementById(`${this.id}-${i}`))
        myChart.clear()
        const option = {
          title: {
            text: '全国高校类型占比',
            textStyle: {
              color: '#fff',
              fontSize: 14,
              fontweight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            bottom: 0,
            textStyle: {
              color: '#fff'
            },
            data: legendData
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '55%'],
              avoidLabelOverlap: false,
              label: {
                position: 'outside',
                formatter: '{d}%',
                color: '#fff'
              },
              labelLine: {
                lineStyle: {
                  color: '#fff'
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
