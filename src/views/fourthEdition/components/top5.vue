<template>
  <a-spin :spinning="loading">
    <p class="topTitle">全国高层次人才上讲台比例前五的地区</p>
    <a-row class="topBlock">
      <a-col :span="8" v-for="(item,index) in data" :key="index">
        <div class="topBlockLi">
          <p>{{ item.name }}<span>{{ item.value }}%</span></p>
        </div>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      data: [
        { name: '贵州省', value: 80.32 },
        { name: '辽宁省', value: 79.10 },
        { name: '浙江省', value: 78.71 },
        { name: '安徽省', value: 76.69 },
        { name: '江苏省', value: 76.44 }
      ]
    }
  }

}
</script>
<style  lang="less" scoped>
.topTitle{
    font-size: 12px;
    padding: 12px 0 24px 10px;
    margin: 0;
}
.topBlock {
  .topBlockLi {
    height: 70px;
    p {
      padding: 26px 0 0 60px;
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;
      span {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #ffd200;
      }
    }
  }
  /deep/ .ant-col:nth-child(1) .topBlockLi {
    background: url('../../../assets/images/bg.png') no-repeat;
  }
  /deep/ .ant-col:nth-child(2) .topBlockLi {
    background: url('../../../assets/images/bg(1).png') no-repeat;
  }
  /deep/ .ant-col:nth-child(3) .topBlockLi {
    background: url('../../../assets/images/bg(2).png') no-repeat;
  }
  /deep/ .ant-col:nth-child(4) .topBlockLi {
    background: url('../../../assets/images/bg(3).png') no-repeat;
  }
  /deep/ .ant-col:nth-child(5) .topBlockLi {
    background: url('../../../assets/images/bg(4).png') no-repeat;
  }
}
</style>
