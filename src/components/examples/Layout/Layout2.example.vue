<example>
间距间隔
</example>
<template>
  <jeremy-row :interval="20">
    <jeremy-col :span="16"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="8"><div class="grid-content bg-purple"></div></jeremy-col>
  </jeremy-row>
  <jeremy-row :interval="20">
    <jeremy-col :span="4"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="16"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="4"><div class="grid-content bg-purple"></div></jeremy-col>
  </jeremy-row>
  <jeremy-row :interval="20">
    <jeremy-col :span="8"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="8"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="4"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :span="4"><div class="grid-content bg-purple"></div></jeremy-col>
  </jeremy-row>
</template>
<script lang="ts">
import JeremyRow from "../../../lib/Row";
import JeremyCol from "../../../lib/Col";
export default {
  components: {
    JeremyRow,
    JeremyCol
  },
};
</script>

<style lang="scss" scoped>
.jeremy-row {
  margin-bottom: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>