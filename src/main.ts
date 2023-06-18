import { createApp } from 'vue'
import App from '@/App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as vueComponents from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components: vueComponents,
  directives
})

const app = createApp(App)
app
  .use(vuetify)
  .mount('#app')
