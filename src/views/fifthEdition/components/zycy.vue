<template>
  <a-spin :spinning="loading">
    <div id="word_cloud_view_id"></div>
  </a-spin>
</template>

<script>
var echarts = require('echarts')
require('echarts-wordcloud')

export default {
  props: {
    globalSize: {
      type: String,
      default: ''
    }
  },
  name: 'WordCloudIndex',
  data () {
    return {
      timer: null,
      loading: false,
      word_cloud_view: null,
      word_cloud_options: {},
      word_list: [
        { 'name': '大数据管理与应用', 'value': 24 },
        { 'name': '冰雪运动', 'value': 18 },
        { 'name': '金融科技', 'value': 18 },
        { 'name': '智能建设', 'value': 18 },
        { 'name': '智能医学工程', 'value': 18 },
        { 'name': '保密技术', 'value': 18 },
        { 'name': '大数据技术与应用(职本)', 'value': 16 },
        { 'name': '化工安全工程', 'value': 16 },
        { 'name': '医疗产品管理', 'value': 16 },
        { 'name': '化工安全工程', 'value': 16 },
        { 'name': '精细化工', 'value': 12 },
        { 'name': '世界学', 'value': 12 },
        { 'name': '音乐治疗', 'value': 10 },
        { 'name': '智能体育工程', 'value': 10 },
        { 'name': '移民管理', 'value': 10 },
        { 'name': '国际贸易规则', 'value': 10 },
        { 'name': '新能源汽车工程', 'value': 10 },
        { 'name': '历史学(中外合作)', 'value': 10 },
        { 'name': '邮轮工程与管理', 'value': 10 },
        { 'name': '旁遮普语', 'value': 10 }
      ]
    }
  },
  mounted () {
    document.getElementById('word_cloud_view_id').style.height = document.getElementById('word_cloud_view_id').clientWidth / (429 / 221) + 'px'
    this.draw_word_cloud_view()
    this.init_view_data()
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
      this.word_cloud_view && this.word_cloud_view.resize()
    },
    draw_word_cloud_view () {
      if (this.word_cloud_view) {
        this.word_cloud_view.dispose()
      }
      this.word_cloud_view = document.getElementById('word_cloud_view_id') && echarts.init(document.getElementById('word_cloud_view_id'), 'macarons')
      this.word_cloud_view && this.word_cloud_view.setOption(this.word_cloud_options)
    },
    init_view_data () {
      this.word_cloud_options = {
        title: {
          text: '新增专业词云',
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontweight: 400
          },
          top: 10,
          left: 10
        },
        series: [{
          type: 'wordCloud',
          shape: 'circle',
          rotationRange: [0, 0],
          sizeRange: [10, 24],
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: function (parmas) {
                if (parmas.data.name === '大数据管理与应用') {
                  return '#E43CA4'
                } else {
                  return '#2798E8'
                }
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: this.word_list
        }]
      }
      this.word_cloud_view.setOption(this.word_cloud_options)
    }
  },
  render (h) {
    return h('div', {
      attrs: { id: 'word_cloud_view_id' },
      style: {
        height: '400px',
        width: '400px'
      }
    })
  }
}

</script>
