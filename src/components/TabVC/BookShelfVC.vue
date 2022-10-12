<template>
    <div class="bookshelf">
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
    <div style="color:red">{{homeTitle}}</div>
  </template>
<template #left>
  <div></div>
    <div style="color:red"></div>
  </template>
  <template #right>
    <div style="color:red"></div>
  </template>
  </van-nav-bar>
<van-grid :border="false" :column-num="3" 
style="margin-top:50px;margin-bottom:50px">




    <van-grid-item v-for="(book,adindex) in localbooks" 
    :key="adindex" @click="click(adindex)">
    <van-popover
  v-model="showPopoverList[adindex]"
  trigger="click"
  theme="dark"
  :actions="actions"
  @select="onSelect"
>
  <template #reference>
    <van-image :src='book.cover' class="itemImg" />
      <div class="itemTitle">{{book.title}}</div>
  </template>
</van-popover>
      
  </van-grid-item>

</van-grid>
    </div>
</template>
<style>
  /* @import '../../xx.css'; */
  @import "../../css/bookshelf.css";
</style>
<script>
  import CatelogPopViewVue from '@/components/cell/CatelogPopView.vue';
  import { Toast } from 'vant';
export default {
  components: {
    CatelogPopViewVue
  },
  data() {
    return {
      homeTitle: "书架",
      localbooks: [],
      showPopoverList: [],
      actions: [{ text: '阅读' }, { text: '删除' }],
      selectedIdx:0
    } 
  },
  name: 'BookShelf',
  props: {
    msg: String,

  },
  methods: {
    onSelect(action) {
      // Toast();
      if (action.text == "阅读") {
        var obj = this.localbooks[this.selectedIdx]
        this.$refs.catelogpop1.showPopView(obj);
        // console.log('read');
      } else {
        // console.log('del');
        this.localbooks.splice(this.selectedIdx, 1)
        var saveList = localStorage.getItem('bookSheelList')
        var list = []
        if (saveList == undefined) {
        // saveList = []
        } else {
          list = JSON.parse(saveList)
        }
        list.splice(this.selectedIdx, 1)
        localStorage.setItem('bookSheelList',JSON.stringify(list))
      }
    },
    click(idx) { 
      this.selectedIdx = idx;
      this.showPopoverList[idx] = true
    },
    
    onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
      // console.log('sssss')
      
    },
    
  },
  created() {
      console.log('sssss')
      var saveList = localStorage.getItem('bookSheelList')
      var list = []
      if (saveList == undefined) {
        // saveList = []
      } else {
        list = JSON.parse(saveList)
      }
    this.localbooks = list;
    this.showPopoverList = []
    for (var i = 0; i < list.length; i++){
      this.showPopoverList.push(false)
    }
    },
}
</script>