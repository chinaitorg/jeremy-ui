import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'
import "prismjs/themes/prism-solarizedlight.css"
import './lib/theme-style/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
