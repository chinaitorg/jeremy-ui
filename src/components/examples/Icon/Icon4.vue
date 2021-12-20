<example>
在其他组件中的引用
</example>
<template>
  <jeremy-button>
    <div style="display: inline-flex">
        <jeremy-icon size="20" color="red" iconname="icon-mima"></jeremy-icon>
        通常按钮
    </div>
  </jeremy-button>
</template>

<script lang="ts">
import {JeremyIcon} from "../../../lib/index";
import {JeremyButton} from "../../../lib/index";
export default {
  components: {
    JeremyIcon,
    JeremyButton,
  },
};
</script>

<style lang="scss" scoped>
.jicon {
  margin: 5px;
}
</style>