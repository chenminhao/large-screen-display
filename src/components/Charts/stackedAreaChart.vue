<template>
  <a-spin :spinning="loading">
    <div style="width:100%;height:196px;" :id="id"></div>
  </a-spin>
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
      var myChart = this.$echarts.init(document.getElementById(this.id))
      myChart.clear()
      const option = {
        title: {
          text: '历年教授上讲台比例趋势（按高校类型）',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办'],
          icon: 'roundRect',
          textStyle: {
            color: '#fff'
          },
          orient: 'vertical',
          top: 'middle',
          right: 0
        },
        grid: {
          top: '50',
          left: '40',
          right: '120',
          bottom: '40',
          containLabel: false
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: false,
          splitLine: false,
          data: ['2017', '2018', '2019']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: false,
          splitLine: false
        },
        series: [
          {
            name: '一流大学',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '一流学科',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          },
          {
            name: '普通本科',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '新建本科',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          },
          {
            name: '独立院校',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '合作协办',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>
