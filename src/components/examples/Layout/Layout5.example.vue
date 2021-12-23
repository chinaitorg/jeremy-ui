<example>
响应式布局
</example>
<template>
  <jeremy-row :interval="20">
    <jeremy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></jeremy-col>
    <jeremy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></jeremy-col>
    <jeremy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></jeremy-col>
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