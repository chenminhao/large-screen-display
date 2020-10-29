<template>
  <a-spin :spinning="loading">
    <div :id="id"></div>
  </a-spin>
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
      loading: false,
      option: null,
      timer: null
    }
  },
  mounted () {
    document.getElementById(this.id).style.height = document.getElementById(this.id).clientWidth / (907 / 665) + 'px'
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
      var myChart = this.$echarts.init(document.getElementById(this.id))
      const items = [
        { name: '河北省' },
        { name: '山西省' },
        { name: '内蒙古自治区' },
        { name: '黑龙江省' },
        { name: '吉林省' },
        { name: '辽宁省' },
        { name: '陕西省' },
        { name: '甘肃省' },
        { name: '青海省' },
        { name: '新疆维吾尔自治区' },
        { name: '宁夏回族自治区' },
        { name: '山东省' },
        { name: '河南省' },
        { name: '江苏省' },
        { name: '浙江省' },
        { name: '安徽省' },
        { name: '江西省' },
        { name: '福建省' },
        { name: '湖北省' },
        { name: '湖南省' },
        { name: '广东省' },
        { name: '广西壮族自治区' },
        { name: '海南省' },
        { name: '四川省' },
        { name: '云南省' },
        { name: '贵州省' },
        { name: '西藏自治区' },
        { name: '上海市' },
        { name: '重庆市' },
        { name: '天津市' },
        { name: '北京市' }
      ]
      let [dataArr, allArr, erArr] = [[], [], items]
      // 圆形分区
      function group (arr, r) {
        const newArray = []
        const { length: arLen } = arr
        arr.forEach((e, ind) => {
          var x = Math.cos((360 / arLen) * ind * Math.PI / 180)
          var y = Math.sin((360 / arLen) * ind * Math.PI / 180)
          console.log(Math.cos((360 / arLen) * ind * Math.PI / 180))
          e.x = y * 22
          e.y = -x * 22
          e.itemStyle = {
            normal: {
              color: ind % 2 === 0 ? '#157CFE' : '#FC7D7E'
            }
          }
          var rotate = ''
          if (x > 0 && x < 1 && y >= 0) {
            rotate = -22 - ind * 8
          } else if (x <= 0 && y > 0) {
            rotate = -46 - ind * 8
          } else if (x < 0 && y <= 0) {
            rotate = -80 - ind * 8
          } else if (x >= 0 && y < 0) {
            rotate = -90 - ind * 8
          }
          e.label = {
            show: true,
            width: 40,
            height: e.name.length * 26,
            color: '#fff',
            rotate,
            algin: 'left',
            padding: [0, 0, 30, 30],
            formatter: function (value) {
              return e.name.split('').reverse().join('\n')
            },
            rich: {
              a: {
                color: 'red',
                lineHeight: 10
              },
              b: {
                backgroundColor: {
                  image: 'xxx/xxx.jpg'
                },
                height: 40
              },
              x: {
                fontSize: 18,
                fontFamily: 'Microsoft YaHei',
                borderColor: '#449933',
                borderRadius: 4
              }
            }
          }
          newArray.push(e)
        })
        newArray.push({ name: '', x: 0, y: 0, itemStyle: { normal: { color: '#1c2d7c' } } })
        return newArray
      }
      // 线配置
      function linesConfig (arr) {
        var dataArr = []
        arr.forEach((el) => {
          dataArr.push({ source: '', target: el.name })
        })
        return dataArr
      }
      erArr = group(erArr, 36)
      allArr = [...erArr]
      dataArr = linesConfig(allArr)
      this.option = {
        series: [{
          name: '各省份学科专业布点数',
          type: 'graph',
          zoom: 0.6, // 缩放
          data: allArr,
          links: dataArr
        }
        ]
      }
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
