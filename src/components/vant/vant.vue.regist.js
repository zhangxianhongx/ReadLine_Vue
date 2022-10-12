import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';

import { Button } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, CellGroup } from 'vant';
import { List } from 'vant';
// import { Overlay } from 'vant';
import { Popup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Popover } from 'vant';



Vue.use(Popover);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
// Vue.use(Overlay);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

// 方式一. 通过 Vue.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
Vue.use(Button);



function VantRegist() {
    console.log("success")
}
function VantEnd() {
    console.log("success")
}
// 需导出后，才能在vue中使用
export {
    VantRegist,
    VantEnd
}