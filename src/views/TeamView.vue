<template>
  <div class="wrapper">
    <headComponentWithQuote textColor="#000"></headComponentWithQuote>
    <div class="team">
      <div class="totalIntro">
      <p>VincDesign是一間位於香港的設計工作室，於台灣設有分工作室，我們專注於品牌設計、視覺形象、網頁及包裝設計，設計屢獲殊榮，<br>包括 DFA亞洲最具影響力設計獎、Topawards Asia、環球設計大獎 HKDA Global Design Awards、 Communication Arts、<br>International Design Award、Creativity International Awards and Muse Creative Awards。</p>
      </div>
      <div class="isolation"></div>
      <div v-for="(item, index) in teamList" :key="index" ref="teamDom">
        <div class="intro flex" v-if="index % 2 == 0">
          <img :src="item.pic" class="imgClass mr-20" />
          <div class="intro-info" v-html="item.intro"></div>
        </div>
        <div class="intro flex" v-else>
          <div class="intro-info" v-html="item.intro"></div>
          <img :src="item.pic" class="imgClass ml-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headComponentWithQuote from "../components/headComponentWithQuote.vue";
export default {
  name: "TeamView",

  data() {
    return {
      teamList: [
        {
          intro:
            "机发张三设计师深咖啡卡是否金卡戴珊剪发卡珊张<br/>三设计师深咖随机发张三设计师深极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发",
          pic: "https://th.bing.com/th/id/R.0cf18b64a10f12f92953b195da350856?rik=NgVcHHU63rJ7wg&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1206%2f20%2fc0%2f12068558_1340173115116.jpg&ehk=purWyLlTdK8jyrg0S15iIQmpfqBKh1crNn2%2bcIifmj0%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          intro:
            "设计师深咖啡卡是否金珊剪发卡电极法扩大随机发扩设计师深咖啡卡珊剪发卡电极法扩大随机发扩设计师深咖啡卡珊剪发卡电极法扩大随机发扩设计师深咖啡卡珊剪发卡电极法扩大随机发扩设计师深咖啡卡卡戴珊剪发卡电极法扩大随机发扩设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发扩大随机发打卡随机发",
          pic: "https://th.bing.com/th/id/R.0cf18b64a10f12f92953b195da350856?rik=NgVcHHU63rJ7wg&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1206%2f20%2fc0%2f12068558_1340173115116.jpg&ehk=purWyLlTdK8jyrg0S15iIQmpfqBKh1crNn2%2bcIifmj0%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          intro:
            "张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发",
          pic: "https://th.bing.com/th/id/R.0cf18b64a10f12f92953b195da350856?rik=NgVcHHU63rJ7wg&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1206%2f20%2fc0%2f12068558_1340173115116.jpg&ehk=purWyLlTdK8jyrg0S15iIQmpfqBKh1crNn2%2bcIifmj0%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          intro:
            "张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发张三设计师深咖啡卡是否金卡戴珊剪发卡电极法扩大随机发扩大随机发打卡随机发",
          pic: "https://th.bing.com/th/id/R.0cf18b64a10f12f92953b195da350856?rik=NgVcHHU63rJ7wg&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1206%2f20%2fc0%2f12068558_1340173115116.jpg&ehk=purWyLlTdK8jyrg0S15iIQmpfqBKh1crNn2%2bcIifmj0%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    };
  },
  components: { headComponentWithQuote},
  methods: {},
  mounted(){
    window.addEventListener('scroll',()=>{
        var intros = document.querySelectorAll(".intro");
        setTimeout(()=>{
            intros.forEach((item,index)=>{
                var itemTop = item.offsetTop;
                var itemHeight = item.offsetHeight;
                var shouldFloat = itemTop- window.scrollY <itemHeight;
                if(shouldFloat){
                    intros[index].classList.add('float');
                }else{
                    intros[index].classList.remove('float');
                }
                
            })
        },120)
        
    })
  }
};
</script>

<style scoped>
.wrapper{
    overflow:hidden;
}
.totalIntro{
    margin-top:30px;
    line-height: 40px;
    margin-right: 60px;
    text-align: left;
}
.isolation{
  height:60px;
}
.team {
  padding: 20px 198px;
}
.flex {
  display: flex;
}
.imgClass {
  width: 250px;
  height: 250px;
  margin: 20px 30px;
}
.intro{
    padding:20px 20px;
    border:solid 2px #eee;
    height:300px;
    overflow: hidden;
    margin:5px 0px;
    transition:transform 1s ease-out;
    flex:1;
}
.intro.float{
    transform:translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index:10;
    letter-spacing: 2px;
    word-spacing: 5px;
}
.intro-info {
  text-align: left;
  font-size:16px;
  font-family: "Microsoft JhengHei UI", "Microsoft JhengHei", sans-serif;
  line-height:1.5;
  margin-left: 30px;
  margin-right: 30px;
  margin-top:20px;
}
.mr-20 {
  margin-right: 20px;
}
.ml-20 {
  margin-left: 20px;
}
</style>