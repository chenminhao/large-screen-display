<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:230px;margin: 0 auto;"></div>
      <ul class="kcgm-ul clearfix">
        <li @click="newIndex=1" :class="newIndex===1?'active':''">公共必修课</li>
        <li @click="newIndex=2" :class="newIndex===2?'active':''">专业课</li>
        <li @click="newIndex=3" :class="newIndex===3?'active':''">公共选修课</li>
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
      var currentIndex = -1
      const option = {
        title: {
          text: '课程规模环比图',
          top: 12,
          left: 12,
          textStyle: {
            color: '#fff',
            fontWeight: 400,
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          center: ['50%', '50%'],
          radius: 70,
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0e294b'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0e294b'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['transparent']
            }
          },
          indicator: [
            { name: '20人以下' },
            { name: '20~40人' },
            { name: '40~60人' },
            { name: '60~80人' },
            { name: '80~100人' },
            { name: '100人以上' }
          ]
        },
        series: [{
          type: 'radar',
          areaStyle: {
            normal: {
              // color: new this.$echarts.graphic.LinearGradient(
              //   0, 0, 1, 1,
              //   [
              //     { offset: 0, color: '#d5389c' },
              //     { offset: 0.5, color: '#1a1733' },
              //     { offset: 1, color: '#d5389c' }
              //   ]
              // )
            }
          },
          // itemStyle: {
          //   color: '#fff',
          //   borderColor: '#d5389c',
          //   borderWidth: 1
          // },
          // lineStyle: {
          //   normal: {
          //     type: 'solid',
          //     color: '#eb45a1',
          //     width: 1
          //   }
          // },
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
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
      }, 1200)
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
