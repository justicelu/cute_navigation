<template>
  <div id="home">
    <!-- 最大的搜索基本框 -->
    <div class="search_box">
      <!-- placeholder就是不输入就是默认灰色文字,输入就会消失 -->
      <!-- spellcheck="false"去除检查拼写 -->
      <!-- 在最左边的搜索图标盒子 -->
      <div
        class="search_select_box left"
        @click="show_select_api"
        :style="'background-image:' + 'url(' + _getImgUrl(search_id) + ')'"
      >
        <!-- 切换不同搜索引擎的切换盒子 -->
        <transition name="transition_show">
          <div class="select_api_div" v-show="show_select_api_div">
            <div
              v-for="(item, i) in search_api"
              :key="item.url + i"
              class="li_select_api_div"
              @click.stop="click_li_select_spi_event(item)"
            >
              <!-- 给@click 事件 .stop 阻止冒泡事件的产生  -->
              <img :src="_getImgUrl(item.id)" width="100%" height="100%" />
            </div>
          </div>
        </transition>
      </div>
      <!-- 右边的搜索框 -->
      <div class="right">
        <input
          type="text"
          placeholder="开启慵懒散漫快乐生活(〃ω〃)"
          spellcheck="false"
          name="q"
          class="searck_input_key"
          autocomplete="off"
          autofocus
          v-model="searchInput"
          @keyup.enter="searchKey"
        />
        <!-- <span class="sousuo"></span> -->
        <!-- 将原先的静态搜索框优化为现在的可跳转搜索框 -->
        <input
          type="submit"
          value=""
          class="search_ok_button"
          @click="searchKey"
        />
      </div>
    </div>
    <!-- 底下的快捷导航区域导航 -->
    <transition class="transition_show">
      <el-card class="nav_card" v-show="show_nav_card">
        <el-row class="row-bg" type="flex" justify="space-around">
          <el-col
            :span="6"
            v-for="(item, i) in divided_quick_api_list.fitst_row"
            :key="item.id + i"
            @click.native="goto_quick_api(item.api)"
            ><div class="nav_card_li_div">
              <img
                :src="_getImgUrl(item.id)"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <p>{{ item.name }}</p></el-col
          >
        </el-row>
        <el-row class="el_second_row" type="flex" justify="space-between">
          <el-col
            :span="6"
            v-for="(item, i) in divided_quick_api_list.second_row"
            :key="item + i + i"
            @click.native="goto_quick_api(item.api)"
            ><div class="nav_card_li_div">
              <img
                :src="_getImgUrl(item.id)"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <p>{{ item.name }}</p></el-col
          >
        </el-row>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否展示快捷导航区
      show_nav_card: true,
      // 屏幕宽度和高度
      screenWidth: "",
      screenHeight: "",
      // 默认的搜索引擎接口
      search_id: "bing",
      search_Logo: "../../public/img/ico_png/bing.png",
      // 正在使用的搜索接口
      searching_API: "https://cn.bing.com/search?q=",
      // 搜索框内容
      searchInput: "",
      // 是否展示切换搜索引擎
      show_select_api_div: false,
      // 现有的搜索引擎数据源
      search_api: [
        {
          id: "bing",
          name: "必应搜索",
          url: "../../public/img/ico_png/bing.png",
          api: "https://cn.bing.com/search?q=",
        },
        {
          id: "baidu",
          name: "百度搜索",
          url: "../../public/img/ico_png/baidu.png",
          api:
            "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=",
        },
        {
          id: "sougou",
          name: "搜狗搜索",
          url: "../../public/img/ico_png/sougou.png",
          api: "https://www.sogou.com/web?query=",
        },
      ],
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
    show_nav_card_method() {
      if (this.screenWidth < 620 || this.screenHeight < 520) {
        this.show_nav_card = false;
      } else this.show_nav_card = true;
    },
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
    // 切换搜索引擎接口事件
    click_li_select_spi_event(info) {
      this.$message.success("正在使用的搜索接口为 :  " + info.name);
      this.searching_API = info.api;
      this.search_id = info.id;
      this.show_select_api_div = !this.show_select_api_div;
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
    show_select_api() {
      this.show_select_api_div = true;
      this.$message.warning("正在执行切换搜索引擎操作!");
    },
    searchKey() {
      // if (event.keyCode == 13) {
      // 进行百度搜索跳转
      // window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + otext.value
      // bing
      if (this.searchInput.trim().length > 0) {
        // window.location.href = this.searching_API + this.searchInput;  在当前界面打开
        // 创建新标签页,并在新的窗口打开搜索内容,原小导航仍旧保留
        window.open(this.searching_API + this.searchInput, "_blank");
        // 打开后我们就清空搜索内容吧
        this.searchInput = "";
      }
    },
    // },
  },
  created() {
    this.divided_quick_api_list_methods();
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.show_nav_card_method();
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        this.show_nav_card_method();
        // console.log(this.screenWidth);
        // console.log(this.screenHeight);
      })();
    };
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  background-image: url(https://api.sunweihu.com/api/bing1/api.php);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /* position: relative; */
}
.search_box {
  width: 400px;
  height: 45px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  margin: 12.5% auto 0;
}
.search_select_box {
  display: inline-block;
  width: 39px;
  height: 39px;
  margin-top: 3px;
  margin-left: 3px;
  /* background-color: cadetblue; */
  border-radius: 8px;
  /* background-image: url(../../public/img/ico_png/bing.png); */
  background-size: cover;
  background-position: center;
  cursor: pointer;
  padding: 3px;
  box-sizing: border-box;
  /* border: 1px solid rgb(201, 195, 195); */
  box-shadow: 1px 1px 5px gainsboro;
}
.select_api_div {
  padding: 1px;
  width: 50px;
  /* height: 60px; */
  transform: translate(-8px, 38px);
  background-color: whitesmoke;
  border-radius: 8px;
  z-index: 10;
  /* transform: translateZ(100); */
}
/* vue 过渡动画效果 */
.transition_show-enter {
  opacity: 0;
}
.transition_show-enter-active {
  transition: opacity 1s;
}
.transition_show-leave-to {
  opacity: 0;
}
.transition_show-leave-active {
  transition: opacity 0.5s;
}
/* 过度动画效果结束 */
.li_select_api_div {
  width: 40px;
  height: 40px;
  /* background-color: gold; */
  margin: 5px;
}
.searck_input_key {
  margin-right: 10px;
  transition: 0.5;
  /* width: 355px; */
  width: 290px;
  height: 45px;
  border: 0;
  border-radius: 8px;
  outline: none;
  text-align: left;
  text-indent: 0.5em;
  line-height: 45px;
  font-size: 18px;
  /*background-color: bisque; */
  background-color: rgba(255, 255, 255, 0);
  color: black;
  -webkit-transition: 0.5;
  -moz-transition: 0.5;
  -ms-transition: 0.5;
  -o-transition: 0.5;
}

.search_ok_button {
  /* object-fit: cover; */
  border: 0em;
  background: rgba(255, 255, 255, 0);
  float: right;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  background-image: url(../../public/img/ico_png/sousuo.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  /*鼠标移上去变小手,变小手*/
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  transition: 0.5;
  -webkit-transition: 0.5;
  -moz-transition: 0.5;
  -ms-transition: 0.5;
  -o-transition: 0.5;
}

.nav_card {
  min-width: 300px;
  min-height: 170px;
  margin: 16% 25%;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
}
.nav_card_li_div {
  width: 40px;
  height: 40px;
  /* background-color: wheat; */
  margin: 5px auto;
  cursor: pointer;
}
.nav_card p {
  text-align: center;
  cursor: pointer;
  font-size: 13px;
}
.el_second_row {
  margin-top: 4%;
}
</style>