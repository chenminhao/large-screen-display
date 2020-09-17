<template>
  <a-spin :spinning="loading">
    <div style="width:100%;height:320px;" :id="id"></div>
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
      seriesData: [],
      option: null
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
      var arr = [ { value: 3200, name: '综合院校' },
        { value: 2700, name: '理工院校' },
        { value: 1000, name: '师范院校' },
        { value: 917, name: '财经院校' },
        { value: 868, name: '医院院校' },
        { value: 283, name: '政法院校' },
        { value: 372, name: '艺术院校' },
        { value: 120, name: '民族院校' },
        { value: 100, name: '农业院校' },
        { value: 230, name: '体育院校' },
        { value: 110, name: '林业院校' }]
      this.legendData = []
      this.seriesData = []
      arr.map(el => {
        this.legendData.push(el.name)
        this.seriesData.push(el.value)
      })
      this.option = {
        title: {
          text: '各学校类型历年国家级教学成果奖情况',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['一等奖', '二等奖'],
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
            data: ['一流学科', '一流大学', '普通本科', '合作协办', '新建本科', '独立本科'],
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
            name: '一等奖',
            type: 'bar',
            barWidth: 20,
            data: [13, 17, 16, 18, 19, 21, 23],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#28a4fa' }, // 柱图渐变色
                    { offset: 0.5, color: '#1c68a5' }, // 柱图渐变色
                    { offset: 1, color: '#0c1936' } // 柱图渐变色
                  ]
                )
              }
            }
          },
          {
            name: '二等奖',
            type: 'bar',
            barWidth: 20,
            data: [15, 20, 26, 28, 29, 30, 33],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#e73ca6' }, // 柱图渐变色
                    { offset: 0.5, color: '#82296f' }, // 柱图渐变色
                    { offset: 1, color: '#0c1936' } // 柱图渐变色
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
