<template>
  <div id="Show ">
    <!-- 左侧沉浸式 -->
    <div @click="full_screen" class="test_box pointer_">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('show') + ')'"
      ></div>
    </div>
    <!-- 右侧更新栏 -->
    <div class="reload_box pointer_" @click="relaod_show_box">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('reload3') + ')'"
      ></div>
    </div>
    <!-- 左下返回键 -->
    <div class="back_home_box pointer_" @click="back_home_box">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('home') + ')'"
      ></div>
    </div>
    <iframe
      name="Show_frame"
      :src="default_game"
      :width="screenWidth + 'px'"
      :height="screenHeight + 'px'"
      scrolling="no"
      frameborder="no"
    ></iframe>
  </div>
</template>

<script>
// 全屏沉浸式 插件
import screenfull from "screenfull";

export default {
  name: "Show",
  data() {
    return {
      default_game: "https://www.webhek.com/misc-res/species-in-pieces/#",
      last_num: 0,
      isFullscreen: false,
      screenWidth: 0,
      screenHeight: 0,
      // https://theuselessweb.com/ 访问这个网站,可以随机出来很多好玩的小游戏
      game_List: [
        "https://www.webhek.com/misc-res/species-in-pieces/#",
        // CSS 濒危动物
        "https://www.webhek.com/misc-res/species-in-pieces/#",
        // 星云分布图
        "https://29a.ch/sandbox/2011/neonflames/",
        // 黑黑小虫虫
        "http://www.staggeringbeauty.com/",
        // 假的升级界面
        "https://fakeupdate.net/",
        // 极简壁纸
        "https://bz.zzzmh.cn/",
        // 毒鸡汤
        "https://8zt.cc/index.html",
        // 随机鼠标墨水绘画网站
        "https://jacksonpollock.org/",
        // hover就会分裂,的考拉图片
        "http://www.koalastothemax.com/",
        // hover就会有各种花花草草
        "http://drawing.garden/",
        // 画着玩的绘画网站
        "http://weavesilk.com/",
        // 虎牙云游戏
        "https://yowa.huya.com/",
        // 初音的点击音乐网站
        "https://aidn.jp/mikutap/",
        // 简单的蓝天白云背景
        "https://greatbignothing.com/",
        // 小游戏集合
        "https://games.infinitynewtab.com/",
        // 暴走漫画
        "http://baozoumanhua.com/",
        // 网易云电脑游戏
        "https://cg.163.com/#/mobile",
        // b站
        "https://www.bilibili.com/",
        // 自由弹钢琴
        "https://www.autopiano.cn/",
        // 小游戏
        "http://wanga.me/",
        // 中国象棋
        "https://www.chinesechess.com.cn/",
        // 选股,盯盘
        "https://xuangubao.cn/dingpan",
        // 微信读书
        "https://weread.qq.com/",
        // 捏老婆网站
        "https://picrew.me/",
        // 小鸡大作战
        "https://hury.io/",
        // 山水画生成
        "http://shan-shui-inf.lingdong.works/",
        // 生成自己的油像画
        "https://pixel-me.tokyo/en/",
        // 空间站模拟器
        "https://iss-sim.spacex.com/",
        // 在线枪战
        "https://krunker.io/",
        // ascll 跑图
        "http://asciicker.com/",
        // 文字冒险游戏
        "http://skynetsimulator.com/",
        // 遥控小汽车游戏
        "https://bruno-simon.com/",
        // 经典控制台
        "https://cmd.to/",
        // 在线我的世界
        "https://classic.minecraft.net/",
        // 掘金
        "https://juejin.im/",
      ],
    };
  },
  methods: {
    back_home_box() {
      this.$message.success({
        message: "即将返回 => 搜索页",
        duration: 1000,
      });
      clearTimeout(this.timer); //清除延迟执行

      this.timer = setTimeout(() => {
        //设置延迟执行
        this.$router.push("/home");
      }, 1000);
    },
    relaod_show_box() {
      this.game_api();
    },
    full_screen() {
      /**
       * 全屏事件
       */
      screenfull.toggle();
    },
    //
    // 更换游戏源
    game_api() {
      let odk = Math.floor(Math.random() * this.game_List.length);
      if (odk !== this.last_num) {
        this.default_game = this.game_List[odk];
        this.last_num = odk;
        // this.$message("当前的壁纸网站是第 :  " + odk + " 个 ");
      } else {
        this.game_api();
      }
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {
    this.game_api();
    screenfull.toggle();
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  beforeDestroy() {},
};
</script>

<style scoped >
/* #Game {
  position: relative;

  width: 100%;
  max-height: 100%;
} */

#Show {
  display: block;
  width: 100%;
  height: 100%;
  /* background-image: url(https://api.sunweihu.com/api/bing1/api.php); */
  /* background-image: url("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUpVFY.img"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.reload_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  top: 2.5%;
  right: 1.5%;
}
.test_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  top: 2.5%;
  left: 1.5%;
  /* background-color: antiquewhite; */
  /* border-radius: 50%; */
}
.back_home_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  bottom: 2.5%;
  left: 1.5%;
}
.test_box :hover {
  background-color: rgb(240, 237, 233);
  transition: 0.25s;
}
.img_box {
  /* padding: 5px; */
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 5px solid transparent;
  transition: 0.25s;
}
</style>
