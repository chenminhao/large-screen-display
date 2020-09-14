<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:280px;margin: 0 auto;"></div>
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
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      var legendData = ['一流大学', '普通本科', '独立学院', '一流学科', '新建本科', '合作办学']
      var seriesData = [
        { value: 28, name: '一流大学' },
        { value: 28, name: '普通本科' },
        { value: 26, name: '独立学院' },
        { value: 14, name: '一流学科' },
        { value: 12, name: '新建本科' },
        { value: 10, name: '合作办学' }
      ]
      for (let i = 1; i <= legendData.length; i++) {
        setTimeout(() => {
          this.legendData.push(legendData[i - 1])
          this.seriesData.push(seriesData[i - 1])
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
              data: this.legendData
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
                data: this.seriesData
              }
            ]
          }
          this.myChart.setOption(option)
        }, i * 1000)
      }
    }
  }
}
</script>
