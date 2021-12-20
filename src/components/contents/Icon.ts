import JeremyComponent1 from "../examples/Icon/Icon1.vue";
import JeremyComponent2 from "../examples/Icon/Icon2.vue";
import JeremyComponent3 from "../examples/Icon/Icon3.vue";
import JeremyComponent4 from "../examples/Icon/Icon4.vue";
import JeremyComponent5 from "../examples/Icon/Icon5.vue";

export default {
  components: [
    JeremyComponent1,
    JeremyComponent2,
    JeremyComponent3,
    JeremyComponent4,
    JeremyComponent5
  ],
  attributes: [
    { attr: 'iconname', desp: '图标名称', type: 'string', values: 'icon-图标名称', default: '' },
    { attr: 'size', desp: '尺寸', type: 'string/number', values: '数字默认单位为em,字符串可以单位为px', default: '1em' },
    { attr: 'color', desp: '颜色', type: 'string', values: '任意合法颜色值', default: '' },
  ]
}