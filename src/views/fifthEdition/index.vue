<template>
  <div>
    <a-row class="visual">
      <a-col class="visual-left" :span="7">
        <div class="visual-bg">
          <!-- 历年学科结构分析 -->
          <xkfx :id="'xkfx'" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 2017-2019专业布点数增长最多的专业排名前十 -->
          <zyzz :id="'zyzz'" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 2017-2019专业布点数减少最多的专业排名前十 -->
          <zyjs :id="'zyjs'" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 新增专业动态 -->
          <p class="majorTitle">新增专业动态</p>
          <div class="majorUl">
            <div class="majorli" v-for="item in 6" :key="item">
              <div>
                <span class="majorRound"></span>
                历年各学科门类专业教师数据
              </div>
              <div>2020-07-04</div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col class="visual-central" :span="17">
        <a-row>
          <a-col :span="14">
            <div class="visual-title">高等教育评估中心大数据可视化系统 - 第5屏 专业布局</div>
          </a-col>
        </a-row>
        <div class="visual-bg marginT24">
          <a-row>
            <a-col :span="12">
              <!-- 各省份学科专业布点数 -->
              <zyfb :id="'zyfb'" />
            </a-col>
            <a-col :span="12">
              <!-- 各省份学科专业布点数对比 -->
              <zydb :id="'zydb'" />
            </a-col>
          </a-row>
        </div>
        <a-row :gutter="30">
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 新增专业词云 -->
              <zycy :id="'zycy'" />
            </div>
          </a-col>
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 就业率最高的10个专业 -->
              <jylpm :id="'jylpm'" />
            </div>
          </a-col>
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 各授予学位门类就业率分析 -->
              <jylfx :id="'jylfx'" />
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import { xkfx, zyzz, zyjs, zyfb, zydb, zycy, jylpm, jylfx } from './components'
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
    xkfx,
    zyzz,
    zyjs,
    zyfb,
    zydb,
    zycy,
    jylpm,
    jylfx
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
