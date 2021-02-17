import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa',
        values: {
            bug: 'fas fa-bug'
        }
    },
}

export default new Vuetify(opts)