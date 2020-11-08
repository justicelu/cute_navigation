<template>
  <div name="Avatar" class="pointer_" @click="login_in_qq">
    <div class="avatar_div right pointer_">
      <el-avatar :size="size" :src="avatar_is_ok_method()"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      // 浮框提示文字
      login_in_msg: "登录",
      // qq信息
      qqInfo: {
        name: "",
        avatar: "",
      },
      tooltip_is_no: false,
      avatar_is_ok: false,
      size: 45,
    };
  },
  methods: {
    login_success() {
      this.$notify({
        duration: 1300,
        title: "QQ登陆成功",
        message: "登陆成功,再次点击头像即可更换账号登陆",
        type: "success",
      });
    },
    // 用户qq登录
    async login_in_qq() {
      const confirmResult = await this.$prompt("请输入QQ号", "QQ登录", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        inputPattern: /[1-9][0-9]{4,14}/,
        inputErrorMessage: "您所输入的QQ账号格式不正确",
      }).catch((err) => err);
      // 如果取消输入框 , 就是取消登陆操作
      if (confirmResult === "cancel")
        return this.$message.info("登陆操作已取消");
      // this.tooltip_is_no = true;
      // 验证通过,发送获取请求
      console.log(confirmResult.value);
      const { data: res } = await this.$http.get(
        `https://api.no0a.cn/api/qqinfo/${confirmResult.value}`
      );
      // console.log(res);
      if (res.status !== 1) return this.$message.error("未知原因,登陆失败");
      this.loading = true;
      this.qqInfo.avatar = res.qqinfo.qqavatar;
      this.login_success();
      this.avatar_is_ok = true;
      this.avatar_is_ok_method();
      // 这个请求太慢了;  用了一下深度结构,还是很慢
      const {
        data: { name: name },
      } = await this.$http.get(
        `https://api.julym.com/qq/?qq=${confirmResult.value}`
      );
      this.qqInfo.name = name;
      // this.tooltip_is_no = false;
      // console.log(name);
      // console.log(this.qqInfo);
    },
    // 用户头像显示
    avatar_is_ok_method() {
      // 判断用户是否登录进而使用不同途径的头像,默认为汝科大
      if (!this.avatar_is_ok) {
        this.login_in_msg = "登录";
        return this._getImgUrl("me");
      }
      this.login_in_msg = "当前帐号: " + this.qqInfo.name;
      return this.qqInfo.avatar;
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  async created() {
    this.avatar_is_ok_method();
  },
  async mounted() {},
};
</script>

<style scoped >
.avatar_div {
  margin: 3% 2% 0 0;
  /* float: right; */
  border-radius: 50%;
  /* box-shadow: 1px 1px 5px rgba(245, 242, 242, 0.329); */
  cursor: pointer;
}
</style>
