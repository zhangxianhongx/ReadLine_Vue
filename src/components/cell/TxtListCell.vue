<template>
    <div class="txt_list_cell">
        <div class="back_div" v-on:click="clickRow()">
            <van-image class="logo_icon" :src="obj.cover"/>
            <div class="right_div">
            <div class="title">{{obj.title}}</div>
            <div class="desc_div">{{obj.descs}}</div>
            <div class="author_div">{{obj.author}}</div>
            </div>
        </div>
    </div>
</template>
<style>
  /* @import '../../xx.css'; */
  @import "../../css/TxtListCell.css";
</style>
<script>
    export default {
  data() {
    return {
      
    }
  },
  name: 'TxtListCell',
  props: {
    msg: String,
    obj: Object,
    clickTxtListRow: {
			type: Function,
			default: null
        },
  },
  
  methods: {
      clickRow() {
        //   console.log(this.obj)
        // 调用父组件方法
        this.clickTxtListRow(this.obj)
     }
  },
  
}
</script>