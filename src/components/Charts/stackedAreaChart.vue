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
      myChart: null,
      xxdm: '',
      from: null,
      to: null,
      loading: false,
      option: {
        title: {
          text: '',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        color: [],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          data: [],
          icon: 'roundRect',
          textStyle: {
            color: '#fff'
          },
          orient: 'vertical',
          top: 'middle',
          right: 4
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
        series: [],
        colorList: []
      }
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
      switch (this.id) {
        case 'jsqs':
          this.option.title.text = '历年教授上讲台比例趋势（按高校类型）'
          this.option.yAxis.min = 75
          this.option.yAxis.max = 83
          this.colorList = ['#E93CA7', '#29A8FF', '#F38E79', '#0841D4', '#00FFFF', '#6817CE']
          this.option.color = this.colorList.concat()
          this.option.legend.data = ['一流大学', '一流学科', '普通本科', '新建本科', '独立院校', '合作协办']
          this.option.series = [{
            name: '一流大学',
            type: 'line',
            symbolSize: 10,
            data: [76, 76.2, 76.7]
          },
          {
            name: '一流学科',
            type: 'line',
            symbolSize: 10,
            data: [78, 77, 78.2]
          },
          {
            name: '普通本科',
            type: 'line',
            symbolSize: 10,
            data: [79, 79.2, 79.7]
          },
          {
            name: '新建本科',
            type: 'line',
            symbolSize: 10,
            data: [80, 80.2, 80.7]
          },
          {
            name: '独立院校',
            type: 'line',
            symbolSize: 10,
            data: [81, 81.2, 81.7]
          },
          {
            name: '合作协办',
            type: 'line',
            symbolSize: 10,
            data: [82, 82.2, 82.7]
          }]
          break
        case 'gccbh':
          this.option.title.text = '高层次人才总数区域分布以及历年变化情况'
          this.colorList = ['#E93CA7', '#29A8FF', '#7E8082', '#671ACF', '#F38E79', '#02FDFF', '#063ED2']
          this.option.color = this.colorList.concat()
          this.option.legend.data = ['西北', '华南', '华中', '华北', '华东', '西南', '东北']
          this.option.series = [{
            name: '西北',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '华南',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          },
          {
            name: '华中',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '华北',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          },
          {
            name: '华东',
            type: 'line',
            symbolSize: 10,
            data: [11, 11, 15]
          },
          {
            name: '西南',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          },
          {
            name: '东北',
            type: 'line',
            symbolSize: 10,
            data: [8, 22, 12]
          }]
          break
      }
      this.myChart.clear()
      var currentIndex = -1
      console.log(this.option)
      this.myChart.setOption(this.option)

      setInterval(() => {
        var dataLen = this.option.series.length
        this.option.series.map((el, index) => {
          if (currentIndex === index) {
            this.option.series[index].lineStyle = {
              width: 4,
              color: '#fff'
            }
          } else {
            this.option.series[index].lineStyle = {
              width: 2
            }
          }
        })
        currentIndex = (currentIndex + 1) % dataLen
        this.myChart.setOption(this.option)
      }, 2000)
    }
  }
}
</script>
