<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;"></div>
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
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    globalSize: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null,
      loading: false,
      newIndex: 1,
      option: null
    }
  },
  watch: {
    globalSize (val) {
      document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (485 / 200) + 'px'
      this.resize()
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (485 / 200) + 'px'
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
      var xAxis = ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学']
      var data = [95, 94, 92, 92, 91, 90, 89, 88, 87, 86, 85, 84]
      var currentIndex = -1
      this.option = {
        title: {
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontweight: 400
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '12%',
          left: '14%',
          right: '4%',
          bottom: '26%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            data: xAxis,
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
              fontSize: 12,
              color: '#d0d0d0',
              rotate: 35, // 字体倾斜
              show: true,
              interval: 0,
              textStyle: {
                color: '#fff',
                margin: 12
              }
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#29A8FF'
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed', // 虚线
                color: '#233e64'
              }
            },
            type: 'value',
            max: 30
          }
        ],
        series: [
          {
            name: '全国高层次教学团队情况',
            type: 'bar',
            barWidth: 20,
            data: data,
            itemStyle: {
              normal: {
                color: (params) => {
                  return params.dataIndex === currentIndex ? '#fff' : new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#68E0CF' },
                      { offset: 1, color: '#209CFF' }
                    ]
                  )
                },
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: '#fff',
                    fontSize: 10
                  }
                }
              }
            }

          }
        ]
      }
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
