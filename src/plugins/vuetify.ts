// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, md } from 'vuetify/iconsets/md'
import { mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {},
      dark: {}
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { md, mdi }
  },
  ssr: true
})
