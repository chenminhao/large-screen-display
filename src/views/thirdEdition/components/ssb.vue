<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:200px;margin: 0 auto;"></div>
      <ul class="kcgm-ul clearfix">
        <li @click="newIndex=1" :class="newIndex===1?'active':''">2017</li>
        <li @click="newIndex=2" :class="newIndex===2?'active':''">2018</li>
        <li @click="newIndex=3" :class="newIndex===3?'active':''">2019</li>
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
    }
  },
  data () {
    return {
      myChart: null,
      loading: false,
      newIndex: 1
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
      var xAxis = ['一流学科', '一流大学', '普通本科', '合作协办', '新建本科', '独立本科']
      var data = [13, 17, 16, 18, 19, 21, 23]
      var currentIndex = -1
      const option = {
        title: {
          text: '各类型生师比 ',
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
          bottom: '14%',
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
                      { offset: 0, color: '#28a4fa' }, // 柱图渐变色
                      { offset: 0.5, color: '#1c68a5' }, // 柱图渐变色
                      { offset: 1, color: '#0c1936' } // 柱图渐变色
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
      this.myChart.setOption(option)
      setInterval(() => {
        var dataLen = option.series[0].data.length
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
        this.myChart.setOption(option)
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
  },
  watch: {
    globalSize (val) {
      this.resize()
    }
  }
}
</script>
<style lang="less" scoped>
.kcgm-ul {
  border-top: 1px solid rgba(41, 168, 255, 0.2);
  padding: 12px 0;
  margin-left: 2%;
  width: 98%;
  margin-top: 18px;
  li {
    position: relative;
    text-align: center;
    float: left;
    width: 33.33%;
  }
  li::before {
    cursor: pointer;
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: #a1a1a1;
  }
  li.active::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: #eb45a1;
  }
  li.active::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #eb45a1;
  }
}
</style>
