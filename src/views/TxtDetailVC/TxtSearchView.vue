<template>
    <div class="txt_search">
        <CatelogPopViewVue ref="catelogpop1"></CatelogPopViewVue>
        <van-nav-bar
  title="搜索"
  left-text="返回"
  right-text=""
  left-arrow
  fixed
  safe-area-inset-top
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<form action="/" style="margin-top:44px">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<div>
<TxtListCell v-for="(item,xindex) in dataList" :key="xindex" :obj="item" :clickTxtListRow="clickTxtListRow"></TxtListCell>
  </div>

    </div>
</template>
<style>
  /* @import '../../xx.css'; */

</style>

<script>
import axios from 'axios'
import CatelogPopViewVue from '@/components/cell/CatelogPopView.vue';
import TxtListCell from '@/components/cell/TxtListCell.vue';
export default {
    components: {
        CatelogPopViewVue,
      TxtListCell
    },
    data() {
    return {
        value: '',
      dataList:[]
    };
  },
    methods: {
    onClickLeft() {
    //   Toast('返回');
            this.$router.back();
        },
        clickTxtListRow(obj) {
        this.$refs.catelogpop1.showPopView(obj);
    },
    onClickRight() {
    //   Toast('按钮');
        },
    onSearch(val) {
        console.log(val);
      this.getDataList(val)
    },
    onCancel() {
      console.log('取消');
        },
    getDataList(txt){
      console.log('start get')
      const that = this
      

      var url = "http://api.pingcc.cn/fiction/search/title/"+ txt +"/"+ 1 +"/30"
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
          that.dataList = []
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
}
</script>