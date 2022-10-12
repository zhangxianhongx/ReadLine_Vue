<template>
  <div class="mainview">
    


<!-- 内容 -->
<BookShelf v-if="selectedIndex==0" ></BookShelf>
<TxtClassify v-if="selectedIndex==1"></TxtClassify>
<!-- <CartoonClassify v-if="selectedIndex==2"></CartoonClassify> -->
<SettingVC v-if="selectedIndex==2"></SettingVC>

<!-- tabBar -->
 <van-tabbar v-model="active"
 @change="onChange" >
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o">小说</van-tabbar-item>
  <!-- <van-tabbar-item icon="guide-o">推荐</van-tabbar-item> -->
  <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
</van-tabbar>


  </div>

</template>
<style>
  /* @import '../../xx.css'; */
</style>

<script>
  
  // 方法名路径
import { VantEnd, VantRegist } from '../../components/vant/vant.vue.regist.js';
// import { Notify } from 'vant';
// import { Toast } from 'vant';
import BookShelf from '@/components/TabVC/BookShelfVC.vue'
// import CartoonClassify from '@/components/TabVC/CartoonClassify.vue'
import SettingVC from '@/components/TabVC/SettingVC.vue'
import TxtClassify from '@/components/TabVC/TxtClassify.vue'


export default {
components: {
    BookShelf,
    // CartoonClassify,
    SettingVC,
    TxtClassify,
},
  props: {
    msg: String
  },
    data() {
    return {
      active: 0,
      isShowBackBtn:false,
      homeTitle: '书架',
      naviTitles: ["书架", "小说", "设置"],
      selectedIndex: 0,
     
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
      // this.homeTitle = this.naviTitles[index];
      this.selectedIndex = index;
      /*
      1、用“<router-link :to="{..}">”语句；
        2、用“this.$router.push()”语句；
        3、用“this.$router.replace()”语句；
        4、用“this.$router.go(n)”语句。
      */ 
    //  this.$router.push('/about')
      // Notify({ type: 'primary', message: index });
    },
    
    // 需重新定义方法名
    dVantRegist: function () {
      VantRegist()
    },
    dVantEnd: function () {
      VantEnd()
    },
   
  },
};

</script>