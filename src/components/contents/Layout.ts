import JeremyComponent1 from "../examples/Layout/Layout1.example.vue";
import JeremyComponent2 from "../examples/Layout/Layout2.example.vue";
import JeremyComponent3 from "../examples/Layout/Layout3.example.vue";
import JeremyComponent4 from "../examples/Layout/Layout4.example.vue";
import JeremyComponent5 from "../examples/Layout/Layout5.example.vue";

export default {
    components: [
      JeremyComponent1,
      JeremyComponent2,
      JeremyComponent3,
      JeremyComponent4,
      JeremyComponent5
    ],
    attributes: [
      { attr: 'interval', desp: 'row属性栅格间隔', type: 'number', values: '', default: '0' },
      { attr: 'horizontal', desp: 'row属性水平排列方式', type: 'string', values: 'start/end/center/space-around/space-between', default: 'start' },
      { attr: 'align', desp: 'row属性垂直排列方式', type: 'string', values: 'top/middle/bottom', default: 'top' },
      { attr: 'span', desp: 'col属性栅格占据的列数', type: 'number', values: '', default: '24' },
      { attr: 'offset', desp: 'col属性栅格左侧的间隔格数', type: 'number', values: '', default: '0' },
      { attr: 'push', desp: 'col属性栅格向右移动格数', type: 'number', values: '', default: '0' },
      { attr: 'pull', desp: 'col属性栅格向左移动格数', type: 'number', values: '', default: '0' },
      { attr: 'xs', desp: 'col属性 <768px 响应式栅格数或者栅格属性对象', type: 'number', values: '', default: '' },
      { attr: 'sm', desp: 'col属性 ≥768px 响应式栅格数或者栅格属性对象', type: 'number', values: '', default: '' },
      { attr: 'md', desp: 'col属性 ≥992px 响应式栅格数或者栅格属性对象', type: 'number', values: '', default: '' },
      { attr: 'lg', desp: 'col属性 ≥1200px 响应式栅格数或者栅格属性对象', type: 'number', values: '', default: '' },
      { attr: 'xl', desp: 'col属性 ≥1920px 响应式栅格数或者栅格属性对象', type: 'number', values: '', default: '' },
    ]
  };