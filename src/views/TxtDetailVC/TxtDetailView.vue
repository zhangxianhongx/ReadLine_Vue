<template>
    <div class="detail_div">
        <van-popup v-model="isShowCatelog" position="left" 
        :style="{ height: '100%',width:'80%' }" >
        <div style="height:20px;width:100%;"></div>
        <div style="text-align: left;
        display:grid;grid-template-columns: 30px auto"
         v-on:click="back1">
            <img src="../../assets/200000@2x.png" alt=""
            style="width:30px;height:30px;">
            <div style="height:30px;line-height:30px">返回</div>
            </div>
        <van-cell v-for="(item,index) in catelogList" :key="index"
         @click="clickCatelogRow(index)">
            {{item.title}}</van-cell>
        </van-popup>
        <TxtDetailPageVue :showCatelogPopVue="showCatelogPop" :txtList="txtList"
        :leftSwipEnd="leftSwipEnd" :rightSwipEnd="rightSwipEnd" :title1="pageTitle"></TxtDetailPageVue>
       
    </div>
</template>
<style>
  @import "../../css/TxtDetail.css";
</style>
<script>
import axios from 'axios'
import txtPageModel from '../../components/vant/txt_page_get.js'
import TxtDetailPageVue from '@/components/cell/TxtDetailPage.vue'
export default {
    components:{
        TxtDetailPageVue
    },
    data() {
        return {
            pageIndex: 0,
            txtList: [],
            catelogList: [],
            dataObj:Object,
            current: 0,
            isShowCatelog: false,
            pageTitle:'',
      }  
    },
    methods: {
        clickCatelogRow(idx) {
            this.isShowCatelog = false;
            this.pageIndex = idx;
            // this.chapterId = item.chapterId
            this.getDetail()
        },
        back1() {
            this.$router.back();
        },
        leftSwipEnd() {
            let obj = this.catelogList[this.pageIndex]
            let txtList = this.dataObj[obj.chapterId]
            

            if (this.current == txtList.length - 1) {// 取下一章的内容
                let nextObj = this.catelogList[this.pageIndex + 1]
                let nextList = this.dataObj[nextObj.chapterId]
                if (nextList == undefined) {
                    //
                } else {
                    if (this.pageIndex == this.catelogList.length - 1){
                        return
                    }
                    this.pageIndex = this.pageIndex + 1
                    this.current = 0
                }
            } else {
                this.current = this.current + 1
            }
            this.getShowTxtList();
            this.getOtherDetail(this.pageIndex + 1);
        },
        rightSwipEnd() {
            // let obj = this.catelogList[this.pageIndex]
            // let txtList = this.dataObj[obj.chapterId]
            if (this.current == 0) {// 取上一章的内容
                let lastObj = this.catelogList[this.pageIndex - 1]
            let lastList = this.dataObj[lastObj.chapterId]
                if (lastList == undefined) {
                    //
                } else {
                    if (this.pageIndex == 0) {
                        return
                    }
                    this.pageIndex = this.pageIndex - 1
                    this.current = lastList.length - 1
                }
            } else {
                this.current = this.current - 1
            }
            this.getShowTxtList();
            this.getOtherDetail(this.pageIndex - 1);
        },
      getDetail(){
      console.log('start get')
      const that = this
        var obj = this.catelogList[this.pageIndex]
        var url = "https://api.pingcc.cn/fictionContent/search/" + obj.chapterId

      axios.get(url)
        .then(function (response) {
         
          var result = response.data
          if (result.code != 0) {
            return
          }
            
            var originTxtList = result.data;
            var content = ""
            for (var i = 0; i < originTxtList.length;i ++){
                let txt = originTxtList[i]
                
                content = content + txt;
            }
            that.current = 0;
            // console.log(content)
            txtPageModel.fontSize = 14/15*16;
            txtPageModel.lineHeight = 24/15*16;
            txtPageModel.content = content;
            that.dataObj[obj.chapterId] = txtPageModel.getTxtArray();
            // for (var j = 0; j < that.txtList.length;j ++){
            //     console.log(that.txtList[j])
            // }
            that.getShowTxtList();
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
      });
        }, 
        getOtherDetail(idx) {
            if (idx<0) {
                return
            }
            if (idx >= this.catelogList.length) {
                return
            }
            const that = this
            var obj = this.catelogList[idx]
            var txtList = this.dataObj[obj.chapterId]
            if (txtList != undefined) {
            return
        }
        var url = "https://api.pingcc.cn/fictionContent/search/" + obj.chapterId

      axios.get(url)
        .then(function (response) {
         
          var result = response.data
          if (result.code != 0) {
            return
          }
            
            var originTxtList = result.data;
            var content = ""
            for (var i = 0; i < originTxtList.length;i ++){
                let txt = originTxtList[i]
                
                content = content + txt;
            }
            // console.log(content)
            txtPageModel.fontSize = 14/15*16;
            txtPageModel.lineHeight = 24/15*16;
            txtPageModel.content = content;
            var otherList = txtPageModel.getTxtArray()
            that.dataObj[obj.chapterId] = otherList;
            // for (var j = 0; j < that.txtList.length;j ++){
            //     console.log(that.txtList[j])
            // }
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
      });
        }, 
        getShowTxtList() {
            var obj = this.catelogList[this.pageIndex]
            this.pageTitle = obj.title
            var txtList = this.dataObj[obj.chapterId];
            
            var showList = ['','','']
            var centerTxt = txtList[this.current];
            showList[1] = centerTxt;
            if (this.current == 0) {
                if (this.pageIndex > 0) {
                    var lastObj = this.catelogList[this.pageIndex - 1]
                    var lastList = this.dataObj[lastObj.chapterId];
                    if (lastList != undefined) {
                        showList[0] = lastList[lastList.length-1]
                    }
                }
            } else {
                showList[0] = txtList[this.current-1]
            }
            if (this.current == txtList.length - 1) {
                var nextObj = this.catelogList[this.pageIndex + 1]
                var nextList = this.dataObj[nextObj.chapterId];
                if (nextList != undefined) {
                    showList[2] = nextList[0]
                }
            } else {
                showList[2] = txtList[this.current+1]
            }
            this.txtList = showList;
            
       },
        showCatelogPop() {
            if (this.isShowCatelog == true) {
                return;
            }
            // console.log('click item') 
            setTimeout(() => {
                this.isShowCatelog = true;
            }, 300); 
            
        },
    },
    beforeCreate() {
        
    },
    
    created() {
        this.pageIndex = this.$route.params.pageIndex;
        // this.chapterId = this.$route.params.chapterId;
        this.catelogList = this.$route.params.catelogList;

        this.getDetail();
        
    },
    
   }
</script>