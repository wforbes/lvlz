import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

createApp(App).use(router).mount('#app')
