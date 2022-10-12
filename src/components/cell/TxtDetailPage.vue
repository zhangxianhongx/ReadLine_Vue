<template>
<div class="detail_page">
    
    <div class="content" 
    :class="firstDivType">
    <div class="titled_div">{{title1}}</div>
    {{firstDivTxt()}}</div>
    <div class="content" 
    :class="secondDivType" >
    <div class="titled_div">{{title1}}</div>
    {{secondDivTxt()}}</div>
    <div class="content" 
    :class="thirdDivType">
    <div class="titled_div">{{title1}}</div>
    {{thirdDivTxt()}}</div>
    
</div>
</template>
<style>
.content{
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    height: 100%;
    position: fixed;
    text-align: left;
    /* padding-top: 34px; */
    background-color: white;
}
.titled_div{
    /* position: fixed; */
    top: 20px;
    height: 34px;
    line-height: 46px;
    padding-left: 10px;
    font-size: 12px;
    z-index: 2001;
    background-color: white;
}
.left{
    z-index: 2000;
    /* background-color: blue; */
    left:v-bind(leftDivSpace );
}
.top{
    z-index: 1999;
    left:v-bind(topDivSpace);
}
.bottom{
    z-index: 1998;
    left:v-bind(bottomDivSpace);
}
</style>
    <script>

import { addLinsten, removeLinsen } from '../vant/txt_detail_touch.js';
export default {
    data() {
        return {
            startX: 0,
            dis: 0,
            firstDivType: "left",
            secondDivType: "top",
            thirdDivType: "bottom",
            leftDivSpace: -window.screen.width + 'px',
            topDivSpace: 0+'px',
            bottomDivSpace: 0+'px',
            color:'blue',
      }  
    },
    
    props: {
        txtList: [], 
        title1:String, 
        showCatelogPopVue: {
			type: Function,
			default: null
        },
        leftSwipEnd: {
			type: Function,
			default: null
        },
        rightSwipEnd: {
			type: Function,
			default: null
		}
    },
    methods: {
        created() {
            
            
        },
        beforeCreate() {
            // this.leftDivSpace = 
            
        },
        dTouchStart(e) {
            // console.log(e)
            this.startX = e.touches[0].clientX
            
            // this.leftDivSpace = -window.screen.width + 'px';
        },
        dTouchEnd(e) {
            console.log(e)
            this.moveEnd();
            if (this.dis >= -10 && this.dis <= 10) {//属于点击页面
                if (this.showCatelogPopVue) {
                    this.showCatelogPopVue()
                }
                this.dis = 0;
                return
            }
            if (this.dis < -50) { //左滑动
                this.leftSwipEnd();
            } else {// 右滑动
                this.rightSwipEnd();
            }
            this.dis = 0;
        },
        dTouchMove(e) {
            // console.log(e)
            let currentX = e.touches[0].clientX
            this.dis = currentX - this.startX;
            if (this.dis < 0) {
                this.leftMove();
            } else {
                this.rightMove();
            }

        },
        leftMove() {
            // console.log(this.dis)
            this.topDivSpace = this.dis + 'px';
        },
        rightMove() {
            this.leftDivSpace = -window.screen.width + this.dis + 'px'
        },
        moveEnd() {
                var leftd = this.firstDivType;
                var topd = this.secondDivType;
                // var bottomd = this.thirdDivType
            if (this.dis < -50) {//左滑动，更换top和bottom的class
                // 重新找出left top 和 bottom
                let txt = this.txtList[2]
                if (txt.length == 0) {
                    this.leftDivSpace = -window.screen.width + 'px';
                this.topDivSpace = 0 + 'px';
                this.bottomDivSpace = 0 + 'px';
                    return
                }
                if (leftd == 'top') {
                    this.firstDivType = 'bottom'
                } else if (topd == 'top') {
                    this.secondDivType = 'bottom'
                } else {
                    this.thirdDivType = 'bottom'
                }
                if (leftd == 'bottom') {
                    this.firstDivType = 'top'
                } else if (topd == 'bottom') {
                    this.secondDivType = 'top'
                } else {
                    this.thirdDivType = 'top'
                }
                this.topDivSpace = 0 + 'px';
                this.bottomDivSpace = 0 + 'px';
            } else if (this.dis > 50) { // 更换top和left的class
                let txt = this.txtList[0]
                if (txt.length == 0) {
                    this.leftDivSpace = -window.screen.width + 'px';
                this.topDivSpace = 0 + 'px';
                this.bottomDivSpace = 0 + 'px';
                    return
                }
                // 重新找出left top bottom
                if (leftd == 'left') {
                    this.firstDivType = 'top'
                } else if (topd == 'left') {
                    this.secondDivType = 'top'
                } else {
                    this.thirdDivType = 'top'
                }
                if (leftd == 'top') {
                    this.firstDivType = 'left'
                } else if (topd == 'top') {
                    this.secondDivType = 'left'
                } else {
                    this.thirdDivType = 'left'
                }
                this.leftDivSpace = -window.screen.width + 'px';
                this.topDivSpace = 0 + 'px';
            } else {// 复原
                this.leftDivSpace = -window.screen.width + 'px';
                this.topDivSpace = 0 + 'px';
                this.bottomDivSpace = 0 + 'px';
                
            }
            
        },
        firstDivTxt() {
            if (this.firstDivType == 'left') {
                return this.txtList[0]
            } else if (this.firstDivType == 'top') {
                return this.txtList[1]
            }
            return this.txtList[2]
        },
        secondDivTxt() {
          if (this.secondDivType == 'left') {
                return this.txtList[0]
            } else if (this.secondDivType == 'top') {
                return this.txtList[1]
            }
            return this.txtList[2]  
        },
        thirdDivTxt() {
          if (this.thirdDivType == 'left') {
                return this.txtList[0]
            } else if (this.thirdDivType == 'top') {
                return this.txtList[1]
            }
            return this.txtList[2]  
        },
    },
    destroyed() {
        console.log('dealloc')
        removeLinsen()
    },
    created() {
        addLinsten()
        window.dTouchMove = this.dTouchMove;
        window.dTouchEnd = this.dTouchEnd;
        window.dTouchStart = this.dTouchStart;
    },
   }

    </script>
