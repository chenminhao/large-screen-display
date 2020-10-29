<template>
  <a-spin :spinning="loading">
    <div :id="id"></div>
    <ul class="timeUl clearfix">
      <li @click="newIndex=1" :class="newIndex===1?'active':''">
        <div class="timeRound"></div>
        <p>2017</p>
      </li>
      <li @click="newIndex=2" :class="newIndex===2?'active':''">
        <div class="timeRound"></div>
        <p>2018</p>
      </li>
      <li @click="newIndex=3" :class="newIndex===3?'active':''">
        <div class="timeRound"></div>
        <p>2019</p>
      </li>
    </ul>
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
      option: null,
      newIndex: 1,
      myChart: null
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (485 / 290) + 'px'
    this.loadDom()
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      var arr = [{ value: 3200, name: '综合院校' },
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
      var currentIndex = -1
      this.legendData = []
      this.seriesData = []
      arr.map(el => {
        this.legendData.push(el.name)
        this.seriesData.push(el.value)
      })
      this.option = {
        color: ['#AE2CF1', '#209CFF'],
        title: {
          text: '各性质高校国家级教学成果奖获奖项目数',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
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
          bottom: '14%',
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
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#4CC5F8' },
                      { offset: 0.5, color: '#56E8F2' },
                      { offset: 1, color: '#84F5DE' }
                    ]
                  )
                }
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
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#AE2CF1' },
                      { offset: 0.5, color: '#964cf7' },
                      { offset: 1, color: '#7776FF' }
                    ]
                  )
                }
              }
            }
          }
        ]
      }
      this.myChart.clear()
      this.myChart.setOption(this.option)
      setInterval(() => {
        var dataLen = this.option.series[0].data.length
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        if (currentIndex + 1 === dataLen) {
          this.newIndex = this.newIndex % 3 + 1
        }
        this.myChart.setOption(this.option)
        // 高亮当前图形
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        // 显示 tooltip
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }, this.globalTimes)
    }
  }
}
</script>
<style lang="less" scoped>
.timeUl {
  width: 80%;
  margin: 0 auto;
  li {
    float: left;
    position: relative;
    width: 33.33%;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #102f56;
    text-align: center;
    .timeRound {
      position: absolute;
      top: -5px;
      left: 45%;
      width: 9px;
      height: 9px;
      border: 2px solid #a1a1a1;
      border-radius: 5px;
    }
  }
  li.active {
    border-top: 1px solid #e93ca7;
    .timeRound {
      border: 2px solid #e93ca7;
      background: #e93ca7;
    }
  }
}
</style>
