<template>
    <div class="catelog_pop_view">
        <van-popup v-model="show" round position="bottom" :style="{ height: '80%' }">
        <div class="title_div">{{obj.title}}</div>
            <div class="btn_div">
            <van-button class="join_btn" v-on:click="joinedAction" plain hairline type="info">加入书架</van-button>
            <van-button class="read_btn" v-on:click="startReadAction" plain hairline type="warning">开始阅读</van-button>
            </div>
            <div style="margin-top:40px">
<div class="row_div" v-for="(i,index) in dataList" :key="index" v-on:click="clickRow(index)">{{i.title}}</div>
            </div>
        </van-popup>
    </div>
</template>
<style>
    .btn_div{
        position:fixed;
        width:100%;
        bottom:10px;
    }
    .join_btn{

        width:40%;
        height:30px;
        /* margin-left: 0px; */
        /* margin-bottom: 40px; */
    }
    .read_btn{

        width:40%;
        height:30px;
        margin-left:10%;
        /* margin-left: 50%; */
        /* margin-bottom: 40px; */
    }
    
    .title_div{
        padding-left: 10px;
        padding-right: 10px;
        width:100%;
        height: 40px;
        line-height: 40px;
        position: fixed;
        text-align: center;
        background-color: white;
        font-size: 17px;
    }
    .row_div{
        font-size: 14px;
        height: 35px;
        line-height: 35px;
        text-align: left;
        margin-left: 10px;
    }
</style>
<script>
import axios from 'axios'
import { Toast } from 'vant';
    export default {
        data() {
            return {
                obj:Object,
                dataList: [],
                show:false,
             }
    },
    methods: {
        joinedAction() {
            if (this.dataList.length == 0) {
                Toast('未查询到数据，请重试')
                return
            }
            var localStorage = window.localStorage
            // localStorage.removeItem('bookSheelList')
            var saveList = JSON.parse(localStorage.getItem('bookSheelList'))
            if (saveList == undefined) {
                saveList = [this.obj]
            } else {
                saveList.push(this.obj)
            }
            localStorage.setItem('bookSheelList',JSON.stringify(saveList))
                console.log(this.obj)
        },
        startReadAction() {
            if (this.dataList.length == 0) {
                Toast('未查询到数据，请重试')
                return
            }
            // console.log('read')
            this.show = false;
            this.$router.push({
                name: 'txtdetail',
                params: { 'pageIndex': 0 ,catelogList:this.dataList}
            })
        },
        clickRow(idx) {
            // console.log(rowObj.chapterId)
            // let id = rowObj.chapterId;
            this.show = false;
            this.$router.push({
                name: 'txtdetail',
                params: { 'pageIndex': idx ,catelogList:this.dataList}
            })
          } ,
            showPopView(obj) {
                console.log(obj)
                this.obj = obj;
                this.show = true;
                // this.$parent.$parent.show = true;
                this.getCateLogList();
            },
            getCateLogList(){
      console.log('start get')
      const that = this
      var bookid = this.obj.fictionId
      var url = "https://api.pingcc.cn/fictionChapter/search/"+ bookid
      axios.get(url)
        .then(function (response) {
          // 加载状态结束
          that.loading = false;
        // console.log(response.data.data.chapterList)
          var result = response.data
          if (result.code != 0) {
            return
          }
          // that.typeSelectedIndex = 4;
            var list = result.data.chapterList;
          for (var i = 0; i < list.length;i ++) {
            //   var itemList = list[i]
            //   for (var j = 0; j < itemList.length;j ++){
                  var item = list[i]
                that.dataList.push(item)
            // }
          }
          
        //   console.log(that.dataList)
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
      });
    },
    },
    created() {
        
    },
    destroyed() {
       
    },
    
   }
</script>