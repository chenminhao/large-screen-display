<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id"></div>
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
      default: null
    }
  },
  data () {
    return {
      myChart: null,
      timer: null,
      loading: false,
      seriesData: [],
      legendData: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学'],
      data: ['河北省', '山西省', '内蒙古自治区', '黑龙江省', '吉林省', '辽宁省', '陕西省', '甘肃省', '青海省', '新疆维吾尔自治区', '宁夏回族自治区', '山东省', '河南省', '江苏省', '浙江省', '安徽省', '江西省', '福建省', '台湾省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '四川省', '云南省', '贵州省', '西藏自治区', '上海市', '重庆市', '天津市', '北京市']
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (675 / 713) + 'px'
    this.loadDom()
  },
  watch: {
    globalSize (val) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.resize()
      }, 500)
    }
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.seriesData = this.legendData.map(el => {
        return {
          type: 'bar',
          data: this.generateRandomArr(this.data.length, 10, 800),
          coordinateSystem: 'polar',
          textStyle: {
            color: '#fff'
          },
          name: el,
          stack: 'a'
        }
      })
      this.myChart.clear()
      const option = {
        title: {
          text: '各省份学科专业布点数',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        color: ['#6CAC54', '#8CDF6C', '#26CA78', '#74DEBE', '#26C8C8', '#84CCE7', '#4C98FB', '#1E88E5', '#6450DA', '#9E50E0', '#E07CCE', '#E93CA8'],
        angleAxis: {
          type: 'category',
          data: this.data,
          axisLine: {
            lineStyle: {
              color: '#2c5ee0'
            }
          },
          axisLabel: {
            color: '#fff',
            interval: 0
          }

        },
        radiusAxis: {
          axisLine: {
            lineStyle: {
              color: '#2c5ee0'
            }
          },
          axisLabel: {
            color: '#fff',
            interval: 0
          },
          splitLine: {
            lineStyle: {
              color: ['#2c5ee0']
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#132348', '#132348']
            }
          }
        },
        polar: {
          center: ['50%', '48%'],
          radius: ['0%', '70%']
        },
        series: this.seriesData,
        legend: {
          show: true,
          data: this.legendData,
          bottom: 10,
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        }
      }

      this.myChart.setOption(option)
    },
    generateRandomArr (n, min, max) {
      var arr = []
      for (var i = 0; i < n; i++) {
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(random)
      }
      return arr
    }
  }
}
</script>
