<template>
  <div id="NavCard_">
    <!-- 底下的快捷导航区域导航 -->
    <el-card class="nav_card" v-show="is_show_card">
      <el-row type="flex" justify="space-around">
        <el-col
          :span="6"
          v-for="(item, i) in divided_quick_api_list.fitst_row"
          :key="item.id + i"
          @click.native="goto_quick_api(item.api)"
          class="item_col_div"
          ><div class="nav_card_li_div">
            <img :src="_getImgUrl(item.id)" width="100%" height="100%" alt="" />
          </div>
          <p class="li_nav_div_p">{{ item.name }}</p></el-col
        >
      </el-row>
      <el-row class="el_second_row" type="flex" justify="space-between">
        <el-col
          class="item_col_div"
          :span="6"
          v-for="(item, i) in divided_quick_api_list.second_row"
          :key="item + i + i"
          @click.native="goto_quick_api(item.api)"
          ><div class="nav_card_li_div">
            <img :src="_getImgUrl(item.id)" width="100%" height="100%" alt="" />
          </div>
          <p>{{ item.name }}</p></el-col
        >
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "NavCard_",
  data() {
    return {
      is_show_card: true,
      is_move: true,
      // 切分后的快捷导航数据 第一行四个,第二行五个,当然应该有不同的方案,这里咱们先默认九个快捷导航
      // 咱们根据快捷导航的数量,动态分配进行美化
      // 最大快捷导航容量设置为 5+7 =12
      divided_quick_api_list: {
        fitst_row: [],
        second_row: [],
      },
      // 现在收藏的快捷导航数据源
      quick_api: [
        {
          id: "iconfont",
          name: "矢量图",
          api:
            "https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.d2b281273&type=2",
        },
        {
          id: "pta",
          name: "PTA",
          api: "https://pintia.cn/problem-sets?tab=0",
        },
        {
          id: "zhanwang",
          name: "小展望",
          api: "http://justicelu.gitee.io/study",
        },
        {
          id: "canva",
          name: "Canva",
          api: "https://www.canva.cn/",
        },
        {
          id: "mayun",
          name: "码云",
          api: "https://gitee.com/",
        },
        {
          id: "coding",
          name: "Coding",
          api: "https://coding.net/",
        },
        {
          id: "bilibili",
          name: "BiliBili",
          api: "https://space.bilibili.com/302046344",
        },
        {
          id: "wangyiyun",
          name: "网易云",
          api: "https://music.163.com/#/user/home?id=1571471756",
        },
        {
          id: "yunfuwu",
          name: "控制台",
          api: "https://www.sanfengyun.com/login/",
        },
      ],
    };
  },
  methods: {
    goto_quick_api(api) {
      // console.log(api);
      this.$message.success("即将在新窗口打开目标界面");
      setTimeout(() => window.open(api, "_blank"), 800);
      // window.open(api, "_blank");
    },
    // 获取快捷导航数据,并切分划分为不同行和列
    divided_quick_api_list_methods() {
      let all_num = this.quick_api.length;
      let flag_row = 3;
      switch (this.quick_api.length) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          flag_row = 2;
          break;
        case 6:
        case 7:
        case 8:
          flag_row = 3;
          break;
        case 9:
        case 10:
          flag_row = 4;
          break;
        case 11:
        case 12:
          flag_row = 5;
          break;
        case 13:
        case 14:
        case 15:
          flag_row = 6;
          break;
        default:
          flag_row = 7;
      }
      let flag = 0;
      // console.log(this.quick_api[i]);
      for (flag = 0; flag < this.quick_api.length && flag < flag_row; flag++) {
        this.divided_quick_api_list.fitst_row.push(this.quick_api[flag]);
      }
      for (; flag < this.quick_api.length; flag++) {
        this.divided_quick_api_list.second_row.push(this.quick_api[flag]);
      }
      // console.log(this.quick_api.length);

      // console.log(this.divided_quick_api_list.fitst_row);
      // console.log(this.divided_quick_api_list.second_row);
    },
    // 鼠标滚轮触发框框动态移动,优化客户体验
    handleScroll(e) {
      const card = document.querySelector(".nav_card");
      // 判断是向上移动还是向下移动
      let result = e.deltaY > 0 ? "down" : "up";

      if (result === "up") {
        this.$message.info(e.deltaY > 0 ? "down" : "up");
        this.is_show_card = false;
        // card.style.animationName = move_right_animation;
      }
      // if (scroll < 0) {
      //   console.log("up");
      // } else {
      //   console.log("down");
      // }
    },
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll, false);
    // 监听（绑定）滚轮 滚动事件
  },
  created() {
    this.divided_quick_api_list_methods();
  },
};
</script>

<style scoped >
.nav_card {
  /* transform: translateX(10%); */
  transition: 1s;
  margin: 0 auto;
  min-width: 300px;
  max-width: 60%;
  min-height: 160px;
  margin-top: 11% !important;
  /* background-color: rgba(255, 255, 255, 0); */
  border-style: unset;
  background-color: transparent;
  border: unset !important;
  box-shadow: unset !important;
  /* 动画效果 */
  animation-name: move_left_animation;
  /* 2. 持续时间 */
  animation-duration: 1.5s;
}
.item_col_div {
  padding: 5px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.nav_card_li_div {
  width: 20px;
  height: 20px;
  /* background-color: wheat; */
  margin: 5px auto;
  background-color: #fff;
  border: 12px solid white;
  border-radius: 50%;
}
p {
  text-align: center;
  font-size: 10px;
  /* background-color: #fff; */
  color: #fff;
}
.el_second_row {
  margin-top: 5%;
}
@keyframes move_left_animation {
  0% {
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }
  50% {
    transform: translateX(-8%);
  }
  100% {
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }
}
</style>
