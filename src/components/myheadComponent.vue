<template>
  <div class="headBox">
    <div @click="goToHome" :style="{ color: textColor }" class="title"> V I N C D E S I G N </div>
    <ul class="tabListBox">
      <li
          v-for="(item,index) in tabList"
          :key="index"
          @click="routerTo(item,index)"
          class="oneLi"
        >
        <a :style="{'color':item.routerPath===$route.fullPath?'#707070':textColor}">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myheadComponent",
  props: {
    textColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      currentIndex:0,
      tabList: [
        { name: "团队介绍", id: 1, routerPath: "/team" },
        { name: "作品集", id: 2, routerPath: "/portfolio" },
        { name: "关于我们", id: 3, routerPath: "/introduction" },
        { name: "联络我们", id: 4, routerPath: "/about" },
      ],
    };
  },
  methods: {
    routerTo(item,index) {
      if(item.routerPath===this.$route.fullPath){
        return;
      }
      this.$router.push(item.routerPath);
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>


<style scoped>
.headBox {
  display: flex;
  height: 60px;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
}
.title{
  margin-left: 80px;
  margin-top: 50px;
}
.tabListBox {
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 60px;
  margin-top: 65px;
}
.oneLi {
  margin-right: 80px;
}
a {
  text-decoration: none;
  font-size: 14px !important;
  font-family: "Microsoft JhengHei UI", "Microsoft JhengHei", sans-serif;
  cursor:pointer;
  font-weight:bold;
}
</style>
