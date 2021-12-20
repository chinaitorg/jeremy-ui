<example>
图标合集
</example>
<template>
  <div v-for="(item, index) in iconList" :key="index" style="display: inline-flex">
    <div style="margin: 10px;text-align: center;width: 90px">
      <jeremy-icon size="40" color="#409eff" :iconname="item"></jeremy-icon>
      <div style="word-wrap:break-word;">{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {JeremyIcon} from "../../../lib/index";
export default {
  components: {
    JeremyIcon,
  },
  data() {
    return {
      iconList: [
        'icon-bianji',
        'icon-mima',
        'icon-nan',
        'icon-nv',
        'icon-shanchu',
        'icon-shangchuan',
        'icon-shengyinguanbi',
        'icon-shuaxin',
        'icon-xiangkan',
        'icon-xiaoxizhongxin',
        'icon-chuangzuo',
        'icon-add-circle',
        'icon-arrow-up-circle',
        'icon-arrow-right-circle',
        'icon-arrow-down',
        'icon-ashbin',
        'icon-arrow-right',
        'icon-browse',
        'icon-bottom',
        'icon-bad',
        'icon-arrow-left-circle',
        'icon-camera',
        'icon-chart-bar',
        'icon-code',
        'icon-close',
        'icon-check-item',
        'icon-calendar',
        'icon-comment',
        'icon-complete',
        'icon-customer-service',
        'icon-delete',
        'icon-direction-down',
        'icon-copy',
        'icon-direction-down-circle',
        'icon-direction-right',
        'icon-direction-up',
        'icon-direction-left',
        'icon-download',
        'icon-export',
        'icon-edit',
        'icon-eye-close',
        'icon-email',
        'icon-file',
        'icon-folder-close',
        'icon-good',
        'icon-hide',
        'icon-home',
        'icon-history',
        'icon-lock',
        'icon-menu',
        'icon-loading',
        'icon-notification',
        'icon-mic',
        'icon-play',
        'icon-print',
        'icon-navigation',
        'icon-pdf',
        'icon-search',
        'icon-success',
        'icon-setting',
        'icon-task',
        'icon-time',
        'icon-toggle-left',
        'icon-toggle-right',
        'icon-top',
        'icon-user',
        'icon-upload',
        'icon-work',
        'icon-warning',
        'icon-zoom-in',
        'icon-zoom-out',
        'icon-add-bold',
        'icon-arrow-up-filling',
        'icon-arrow-down-filling',
        'icon-arrow-left-filling',
        'icon-arrow-right-filling',
        'icon-cangchucangku',
        'icon-bingtutubiao',
        'icon-erweima',
        'icon-fapiao',
        'icon-cunchu',
        'icon-dingdan',
        'icon-fuwuqi',
        'icon-fenzhi',
        'icon-jishufuwu',
        'icon-jiekoupeizhi',
        'icon-maijiagouwuche',
        'icon-guanli',
        'icon-qukuai',
        'icon-pingtai',
        'icon-meiyuan',
        'icon-renminbi',
        'icon-saoma',
        'icon-shenfenrenzheng',
        'icon-shijianzhouqi',
        'icon-shijianchuo',
        'icon-tupian',
        'icon-tiaoxingma',
        'icon-tubiaozhutu',
        'icon-xinyongkayinhangka',
        'icon-yinle',
        'icon-wendang',
        'icon-zhengzhaozhizhao',
        'icon-zhinengheyue',
        'icon-zhengfu',
        'icon-user1',
        'icon-mail',
        'icon-weixiu',
        'icon-aichegujiabeifen7',
        'icon-maichepin',
        'icon-aichegujiabeifen5',
        'icon-zhuanchezhuanyongbeifen',
        'icon-jinrongmaichebeifen',
        'icon-yonghufankuibeifen',
        'icon-remaihaoche',
        'icon-lanbaimao',
        'icon-gongyi',
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.jicon {
  margin: 5px;
}
</style>