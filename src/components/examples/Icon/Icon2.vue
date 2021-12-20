<example>
不同颜色
</example>
<template>
  <jeremy-icon class="jicon" size="40" color="red" iconname="icon-weixiu"></jeremy-icon>
  <jeremy-icon class="jicon" size="40" color="green" iconname="icon-shangchuan"></jeremy-icon>
  <jeremy-icon class="jicon" size="40" color="#8c6fef" iconname="icon-shuaxin"></jeremy-icon>
  <jeremy-icon class="jicon" size="40" color="rgb(230, 162, 60)" iconname="icon-xiaoxizhongxin"></jeremy-icon>
  <jeremy-icon class="jicon" size="40" color="red" iconname="icon-browse"></jeremy-icon>
</template>

<script lang="ts">
import {JeremyIcon} from "../../../lib/index"
export default {
  components: {
    JeremyIcon,
  },
};
</script>

<style lang="scss" scoped>
.jicon {
  margin: 5px;
}
</style>