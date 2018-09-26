import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VeeValidate, { Validator } from 'vee-validate'

Vue.config.productionTip = false

const options = {
	toast: {
		timeout: 5000,
		position: SnotifyPosition.rightTop,
		showProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true
	}
}

const dictionary = {
  en: {
    attributes: {
			email: 'Email address',
			credit_card: 'Credit card',
			expire: 'Credit card expire date',
			cvv: 'CVV',
			last_name: 'Last name',
			cityId: 'City',
			stateId: 'State',
			typeCar: 'Type car',
			carYear: 'Car year',
			zipCode: 'Zip code',
			street: 'Street',
    }
  },
}

Validator.localize(dictionary)

Vue.use(Snotify, options)
Vue.use(VeeValidate)

Vue.mixin({
	methods: {
		errorResponse : function (response, title = 'Error') {
			if (response.message) {
				this.$snotify.error(response.message, title)
			} else {
				response.errors.forEach(error => {
					if (error.message) {
						this.$snotify.error(error.message, title)
					}
				});
			}
		}
	}
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
