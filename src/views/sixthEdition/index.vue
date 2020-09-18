<template>
  <div class="visual">
    <div class="visual-central">
      <div class="visual-title">高等教育评估中心大数据可视化系统 - 第6屏 常模指标</div>
    </div>
    <div style="padding: 0 40px;">
      <a-row :gutter="30">
        <a-col :span="8">
          <div class="visual-bg">
            <!-- 本科生人数（人） -->
            <bar :id="'bksrs'" :title="'本科生人数（人）'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 具有高级职称的专任教师比例（%) -->
            <bar :id="'zrjsbl'" :title="'具有高级职称的专任教师比例（%)'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 生均教学日常运行支出（元） -->
            <bar :id="'cryxzc'" :title="'生均教学日常运行支出（元）'" />
          </div>
        </a-col>
        <a-col :span="8">
          <div class="visual-bg">
            <!-- 折合学生数（人） -->
            <bar :id="'xss'" :title="'折合学生数（人）'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 生师比 -->
            <bar :id="'ssbs'" :title="'生师比'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 本科专项教学经费（万元） -->
            <bar :id="'zxjxjf'" :title="'本科专项教学经费（万元）'" />
          </div>
        </a-col>
        <a-col :span="8">
          <div class="visual-bg">
            <!-- 本科生占全日制在校生总数的比例（%) -->
            <bar :id="'zxsbl'" :title="'本科生占全日制在校生总数的比例（%)'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 本科专业总数 -->
            <bar :id="'bkzyzs'" :title="'本科专业总数'" />
          </div>
          <div class="visual-bg marginT24">
            <!-- 生均本科实验经费（元） -->
            <bar :id="'sjbksyjf'" :title="'生均本科实验经费（元）'" />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import bar from './components/bar'
export default {
  data () {
    return {}
  },
  props: {
    globalSize: {
      type: String,
      default: ''
    }
  },
  components: {
    PageView,
    bar
  }

}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.marginT24 {
  margin-top: 24px;
}
.visual {
  background: url('../../assets/images/top.png') no-repeat;
  background-size: 100%;
  .visual-bg {
    background: rgba(12, 21, 48, 0.5);
    border: 1px solid rgba(67, 154, 255, 0.15);
    box-shadow: 0px 0px 40px 0px rgba(12, 21, 48, 0.3);
    border-radius: 8px;
    background: url('../../assets/images/gg.png') no-repeat;
    background-color: #0a122d;
    background-size: 100%;
  }
  .visual-left {
    padding: 100px 30px 0 40px;
  }
  .visual-right {
    padding: 40px 40px 0 30px;
  }
  .visual-central {
    .visual-title {
      height: 78px;
      line-height: 78px;
      font-size: 25px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.35);
      text-align: center;
      margin-bottom: 19px;
    }
  }
  .majorTitle {
    margin: 13px 0 12px 12px;
  }
  .majorUl {
    padding: 0 22px 10px 22px;
    .majorRound {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      background: linear-gradient(117deg, #e63ca6 0%, rgba(230, 60, 166, 0) 100%);
      border-radius: 50%;
    }
    .majorli {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #3066f5;
      height: 28px;
      line-height: 28px;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
