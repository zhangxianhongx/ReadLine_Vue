<style>
    .custom-title {
      margin-right: 4px;
      vertical-align: middle;
    }
  
    .search-icon {
      font-size: 16px;
      line-height: inherit;
    }
  </style>
<template>
    <div class="zcell">
<!-- 基础用法 -->
        <!-- <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group> -->
        <!-- 卡片风格 -->
     <van-cell-group inset>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />

<!-- 可控制单元格大小 -->
<van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
<van-cell title="单元格" icon="location-o" />
<!-- 只设置 value 时，内容会靠左对齐。 -->
<van-cell value="内容" />
<!-- 展示箭头 -->
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
<!-- 页面导航 -->
<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<van-cell title="路由跳转" is-link to="index" />
<!-- 垂直居中 -->
<van-cell center title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<!-- 分组标题 -->
<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<!-- 使用插槽 -->
<!-- 使用 title 插槽来自定义标题 -->
<!-- <van-cell value="内容" is-link>
  
  <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell> -->
<!-- 使用 right-icon 插槽来自定义右侧图标 -->
<!-- <van-cell title="单元格" icon="shop-o">
  
  <template #right-icon>
    <van-icon name="search" class="search-icon" />
  </template>
</van-cell> -->



    </div>
    
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {

}

</script>