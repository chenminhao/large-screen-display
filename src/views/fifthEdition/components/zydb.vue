<template>
  <div>
    <p class="majorTitle">各省份学科专业布点数对比</p>
    <div style="padding-right:27px;" class="textAlignR">
      选择专业
      <a-select style="width:120px;margin-left:10px;" v-model="major">
        <a-select-option v-for="item in legendData" :key="item" :value="item">{{ item }}</a-select-option>
      </a-select>
    </div>
    <ul class="majorUl majorUl1">
      <li class="majorLi" v-for="item in seriesData[major]" :key="item">
        <p>{{ item.name }}</p>
        <div>
          <div :style="{width:`${item.value}%`}"></div>
        </div>
      </li>
    </ul>
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
      major: '工学',
      seriesData: {},
      legendData: ['法学', '工学', '管理学', '教育学', '经济学', '理学', '历史学', '农学', '文学', '医学', '艺术学', '哲学'],
      data: ['河北省', '山西省', '内蒙古自治区', '黑龙江省', '吉林省', '辽宁省', '陕西省', '甘肃省', '青海省', '新疆维吾尔自治区', '宁夏回族自治区', '山东省', '河南省', '江苏省', '浙江省', '安徽省', '江西省', '福建省', '台湾省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '四川省', '云南省', '贵州省', '西藏自治区', '上海市', '重庆市', '天津市', '北京市']
    }
  },
  created () {
    this.loadDom()
  },
  methods: {
    loadDom () {
      this.legendData.map(el => {
        this.seriesData[el] = []
        this.data.map(elt => {
          this.seriesData[el].push({ name: elt, value: Math.floor(Math.random() * 100 + 1) })
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.majorTitle {
  padding: 10px 0 0 10px;
}
.majorUl {
  padding: 0 27px;
  height: 620px;
  overflow-y: scroll;
  scrollbar-base-color: red;
  .majorLi {
    p {
      margin: 19px 0 0 4px;
    }
    > div {
      background: #142552;
      height: 14px;
      > div {
        background: linear-gradient(to right, #152859, #29a7fd);
        height: 14px;
      }
    }
  }
}
/*---滚动条默认显示样式--*/
.majorUl1::-webkit-scrollbar-thumb {
  background-color: #9f9e9e;
  height: 50px;
  outline-offset: -2px;
  outline: 2px solid #fff;
  border-radius: 4px;
  border: 2px solid #fff;
}

/*---鼠标点击滚动条显示样式--*/
.majorUl1::-webkit-scrollbar-thumb:hover {
  background-color: #9f9e9e;
  height: 50px;
  border-radius: 4px;
}
/*---滚动条大小--*/
.majorUl1::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*---滚动框背景样式--*/
.majorUl1::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
}
</style>
