<template>
    <div class="txtclass">
      
      <CatelogPopViewVue ref="catelogpop1"></CatelogPopViewVue>
       <!-- NaviBar  -->
      <van-nav-bar
  title = "首页"
  left-text="left"
  right-text="right"
  left-arrow
  fixed
  safe-area-inset-top
  @click-left="onClickLeft"
  @click-right="onClickRight"
  >
  <template #title>
    <div style="color:red">小说</div>
  </template>
<template #left>
  <div></div>
    <div style="color:red"></div>
  </template>
  <template #right>
    <van-icon name="search" size="22" />
    <!-- <div style="color:red">搜索</div> -->
  </template>
  
  </van-nav-bar>

<!-- content -->
<div class="contentDiv">

<div class="left_div">
  <div class="left_content_div">

<van-cell v-for="(item,index) in typeList" :key="(item,index)" class="cell_class" v-on:click="clickRow(index)">
<template #title>
<div class="left_row" :class="{red_txt:typeSelectedIndex == index}" >{{item}}</div></template>
</van-cell>

  </div>
</div>
<div class="home_right_div">
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="getDataList"
>

<div>
<TxtListCell v-for="(item,xindex) in dataList" :key="xindex" :obj="item" :clickTxtListRow="clickTxtListRow"></TxtListCell>
  </div>
</van-list>
  
</div>

</div>

    </div>
   
    
</template>
<style>
  /* @import '../../xx.css'; */
  @import "../../css/TxtClassify.css";
</style>

<script>
import TxtListCell from '@/components/cell/TxtListCell.vue';
import CatelogPopViewVue from '../cell/CatelogPopView.vue';
import axios from 'axios'

export default {
  components: {
    TxtListCell,
    CatelogPopViewVue,
  },
  data() {
    return {
      typeSelectedIndex:3,
      typeList: ["玄幻", "科幻", "武侠", "仙侠", "穿越", "网游", "修真", "冒险"
        , "魔法", "历史", "校园", "女生", "都市", "青春", "爱情", "搞笑", "其他"],
      dataList: [],
      page: 0,
      loading: false,
      finished: false,
      show:false,
    }
  },
  name: 'TxtClassify',
  props: {
    msg: String
  },

  methods: {
      onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      console.log('right')
      this.$router.push('/txtsearch')
    },
    clickRow: function (idx) {
      this.typeSelectedIndex = idx;
      // console.log(idx)
      this.page = 0
      this.dataList = []
      this.getDataList()
    },
    // 子组件中调用的方法
    clickTxtListRow(obj) {
      // console.log(obj);
      // this.show = true;
      this.$refs.catelogpop1.showPopView(obj);
    },
    getDataList(){
      console.log('start get')
      const that = this
      this.page = this.page + 1
      var type = this.typeList[this.typeSelectedIndex]
      var url = "http://api.pingcc.cn/fiction/search/fictionType/"+ type +"/"+ this.page +"/10"
      axios.get(url)
        .then(function (response) {
          // 加载状态结束
          that.loading = false;
        console.log('request end')
          var result = response.data
          if (result.code != 0) {
            return
          }
          // that.typeSelectedIndex = 4;
          for (var i = 0; i < result.data.length;i ++) {
            var item = result.data[i]
            that.dataList.push(item)
          }
          
          // console.log(result)
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
      });
    },
    
  },
  created() {
    // console.log('created')

    // this.getDataList();
    
  },
}

</script>