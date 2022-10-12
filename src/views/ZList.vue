
<template>
    <div class="zlist">
        
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item" ><div id="">{{item}}</div></van-cell>
</van-list>

    </div>
</template>
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
export default {
    data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
        getContentData()
      // 异步更新数据
      setTimeout //仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        
        for (let i = 0; i < 10; i++) {

          this.list.push(i);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    
    }
}
function getContentData(){
        var url = "http://api.pingcc.cn/fiction/search/fictionType/"+ "玄幻" +"/"+ 1 +"/30"
        $.get(url,function(data,status){
            //console.log(data)
            var code = data["code"]
            if (code == undefined || code != 0) {
                console.log("get data fail")
                return
            }
            var subArr = data["data"]
            if (subArr == undefined){
                console.log("data is null")
                return
            }
            //console.log(dataDic)
            
            for (i = 0;i < subArr.length;i ++){
                let dic = subArr[i]
                
            }
            
        });
    }
</script>