<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="require('@/assets/default_avatar.jpg')"/>
          <span style="color:#fff;" :class="$store.getters.fontClass">
            {{ nickname }}
            <span v-if="userInfo.userType!=='超级管理员'&&userInfo.userType!=='管理员'">({{ userInfo.userType==='高教司'?userInfo.dwmc:userInfo.userType }})</span>
          </span>
        </span>
        <a-menu slot="overlay">
          <a-menu-item key="4" :class="$store.getters.fontClass">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span> 退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-modal :width="640" :visible="visible" @ok="handleSubmit" @cancel="visible = false" :confirm-loading="confirmLoading">
      <template slot="title">
        <span :class="$store.getters.fontClass">修改密码</span>
      </template>
      <a-form :form="form">
        <a-form-item>
          <template slot="label">
            <span :class="$store.getters.fontClass">密码</span>
          </template>
          <a-input-password
            size="large"
            type="password"
            :class="$store.getters.fontClass"
            autocomplete="false"
            placeholder="请输入密码"
            v-decorator="[
              'password',
              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
            ]"
          >
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input-password>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal :width="640" :visible="infoVisible" @ok="handleInfoSubmit" @cancel="infoVisible = false">
      <template slot="title">
        <span :class="$store.getters.fontClass">设置填报人信息</span>
      </template>
      <a-form :form="form">
        <a-form-item>
          <template slot="label">
            <span :class="$store.getters.fontClass">填报人姓名</span>
          </template>
          <a-input
            size="large"
            autocomplete="false"
            :class="$store.getters.fontClass"
            placeholder="请输入填报人姓名"
            v-decorator="[
              '填报人',
              {rules: [{ required: true, message: '请输入填报人姓名' }], validateTrigger: 'blur'}
            ]"
          >
            <!-- <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
          </a-input>
        </a-form-item>
        <a-form-item>
          <template slot="label">
            <span :class="$store.getters.fontClass">填报人电话</span>
          </template>
          <a-input
            size="large"
            autocomplete="false"
            :class="$store.getters.fontClass"
            placeholder="请输入填报人电话"
            v-decorator="[
              '填报人联系方式',
              {rules: [{ required: true, message: '请输入填报人电话' }], validateTrigger: 'blur'}
            ]"
          >
            <!-- <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
          </a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { resetPassword, updperson } from '@/api/login'
export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  data () {
    return {
      visible: false,
      infoVisible: false,
      form: this.$form.createForm(this),
      selectRow: {},
      confirmLoading: false
    }
  },
  computed: {
    ...mapGetters(['nickname', 'avatar', 'userInfo'])

  },
  created () {
    console.log('===========', process.env)
  },
  methods: {
    ...mapActions(['Logout']),
    ...mapMutations(['SET_INFO']),
    // 设置填报人信息
    setUpPpersonalInfo () {
      // console.log(this.userInfo)
      this.infoVisible = true
      this.$nextTick(() => {
        this.form.setFieldsValue({ '填报人': this.userInfo.填报人, '填报人联系方式': this.userInfo.填报人联系方式 })
      })
    },
    // 后台管理系统
    downLoadHelp () {
      // window.open('./疫情上报系统操作手册v1.docx')
      // var hrefs = window.location.href.slice(0, this.find(window.location.href, ':', 1)) // 获取当前地址
      // var port = hrefs === 'http://192.168.1.39' ? '30102' : '9091'
      // window.open(`${hrefs}:${port}`)
      // console.log(process.env)
      window.open(`${process.env.VUE_APP_HOST}`)
    },
    // 投票分析系统
    modityPsw () {
      // this.form.setFieldsValue({ oldPasswd: '', newPasswd: '' })
      // this.visible = true
      // var hrefs = window.location.href.slice(0, this.find(window.location.href, ':', 1)) // 获取当前地址
      // var port = hrefs === 'http://192.168.1.39' ? '30104' : '9094'
      // window.open(`${hrefs}:${port}`)
      // console.dir(process.env)
      window.open(`${process.env.VUE_APP_tpHOST}`)
    },
    find (str, cha, num) {
      var x = str.indexOf(cha)
      for (var i = 0; i < num; i++) {
        x = str.indexOf(cha, x + 1)
      }
      return x
    },
    handleSubmit () {
      const _this = this
      // 触发表单验证
      this.form.validateFields((err, values) => {
        // 验证表单没错误
        if (!err) {
          var params = Object.assign(values, { yhId: this.$store.getters.userInfo.yh_id })
          this.confirmLoading = true
          resetPassword(params).then(res => {
            this.confirmLoading = false
            _this.visible = false
            _this.$message.success('修改成功')
          })
        }
      })
    },
    handleInfoSubmit () {
      // console.log('handleInfoSubmit')
      const _this = this
      // 触发表单验证
      this.form.validateFields((err, values) => {
        // 验证表单没错误
        if (!err) {
          var params = Object.assign({ userId: this.userInfo.userId }, values)
          updperson(params).then(res => {
            _this.infoVisible = false
            _this.$message.success('修改成功')
            _this.SET_INFO(
              {
                ..._this.userInfo,
                '填报人': _this.form.getFieldValue('填报人'),
                '填报人联系方式': _this.form.getFieldValue('填报人联系方式')
              }
            )
          })
        }
      })
    },
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要退出登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>
