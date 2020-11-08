<template>
  <div id="NavCard_">
    <!-- 底下的快捷导航区域导航 -->

    <el-card class="nav_card">
      <el-row type="flex" justify="space-around">
        <el-col
          :span="6"
          v-for="(item, i) in divided_quick_api_list.fitst_row"
          :key="item.id + i"
          @click.native="goto_quick_api(item.api)"
          ><div class="nav_card_li_div">
            <img :src="_getImgUrl(item.id)" width="100%" height="100%" alt="" />
          </div>
          <p class="li_nav_div_p">{{ item.name }}</p></el-col
        >
      </el-row>
      <el-row class="el_second_row" type="flex" justify="space-between">
        <el-col
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
      // 切分后的快捷导航数据 第一行四个,第二行五个,当然应该有不同的方案,这里咱们先默认九个快捷导航
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
      let flag = 0;
      // console.log(this.quick_api[i]);
      for (flag = 0; flag < this.quick_api.length && flag < 3; flag++) {
        this.divided_quick_api_list.fitst_row.push(this.quick_api[flag]);
      }
      for (; flag < this.quick_api.length; flag++) {
        this.divided_quick_api_list.second_row.push(this.quick_api[flag]);
      }
      // console.log(this.quick_api.length);

      // console.log(this.divided_quick_api_list.fitst_row);
      // console.log(this.divided_quick_api_list.second_row);
    },
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {
    this.divided_quick_api_list_methods();
  },
};
</script>

<style scoped >
.nav_card {
  min-width: 300px;
  min-height: 170px;
  margin: 15% 25%;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
}
.nav_card_li_div {
  width: 40px;
  height: 40px;
  /* background-color: wheat; */
  margin: 5px auto;
  cursor: pointer;
}
p {
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  /* background-color: #fff; */
}
.el_second_row {
  margin-top: 4%;
}
</style>
