<template>
  <div :style="`display: inline-flex;height: ${iconSize};width: ${iconSize}`">
    <svg class="icon" aria-hidden="true" :style="`fill: ${color};height: ${iconSize};width: ${iconSize}`">
      <use :xlink:href="`#${iconname}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  install: function (Vue) {
    Vue.component(this.name, this);
  },
  name: "JeremyIcon",
  props: {
    iconname: {
      type: String,
      required: true
    },
    color: String,
    size: { // 因为用户可能传带单位的与不带单位的
      type: [Number, String],
      default: '1em'
    }
  },
  computed: {
    iconSize () {
      if (typeof this.size === 'number') {
        return this.size + 'px'
      } else if (parseInt(this.size) !== undefined) {
        return this.size + 'px'
      } else {
        return this.size
      }
    }
  },
  methods: {
  }
}
</script>