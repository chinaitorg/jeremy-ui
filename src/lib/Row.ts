import { defineComponent, computed, h, provide } from 'vue'

export default defineComponent({
  name: 'JeremyRow',
  componentName: 'JeremyRow',
  props: {
    elements: {
      type: String,
      default: 'div'
    },
    interval: {
      type: Number,
      default: 0
    },
    horizontal: {
      type: String,
      values: ['start', 'center', 'end', 'space-around', 'space-between'],
      default: 'start'
    },
    align: {
      type: String,
      values: ['top', 'middle', 'bottom'],
      default: 'top'
    }
  },
  setup (props, { slots }) {
    const interval = computed(() => props.interval)
    provide('JeremyRow', {
      interval
    })
    const style = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: ''
      }
      if (props.interval) {
        ret.marginLeft = `-${props.interval / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })
    return () => h(
      props.elements,
      {
        class: [
          'jeremy-row',
          props.horizontal !== 'start' ? `is-horizontal-${props.horizontal}` : '',
          props.align !== 'top' ? `is-align-${props.align}` : ''
        ],
        style: style.value
      },
      slots.default?.()
    )
  }
})
