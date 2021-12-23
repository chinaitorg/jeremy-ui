import { defineComponent, computed, h, provide, inject, renderSlot } from 'vue'

export default defineComponent({
  name: 'JeremyCol',
  componentName: 'JeremyCol',

  props: {
    elements: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, String]
    },
    sm: {
      type: [Number, String]
    },
    md: {
      type: [Number, String]
    },
    lg: {
      type: [Number, String]
    },
    xl: {
      type: [Number, String]
    }
  },
  setup (props, { slots }) {
    const { interval } = inject('JeremyRow', { interval: { value: 0 } })
    const style = computed(() => {
      const ret = {
        paddingLeft: '',
        paddingRight: ''
      }
      if (interval.value) {
        ret.paddingLeft = `${interval.value / 2}px`
        ret.paddingRight = ret.paddingLeft
      }
      return ret
    })

    const classList = computed(() => {
      const classes: string[] = []

      const propList = ['span', 'offset', 'pull', 'push'] as const
      propList.forEach((item) => {
        const size = props[item]
        if (typeof size === 'number') {
          if (item === 'span') classes.push(`jeremy-col-${props[item]}`)
          else if (size > 0) classes.push(`jeremy-col-${item}-${props[item]}`)
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (typeof props[size] === 'number') {
          classes.push(`jeremy-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'string') {
          const sizeProps = props[size]
          classes.push(
            `jeremy-col-${size}-${sizeProps}`
          )
        }
      })

      if (interval.value) {
        classes.push('is-interval')
      }

      return classes
    })
    return () => h(
      props.elements,
      {
        class: [
          'ulquio-col',
          classList.value
        ],
        style: style.value
      },
      [renderSlot(slots, 'default')]
    )
  }
})
