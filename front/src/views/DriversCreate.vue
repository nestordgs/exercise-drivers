<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <h2>Create Driver</h2>
            </div>
        </div>
        <driver-form :driver="driver" @submit="submit"></driver-form>
    </div>
</template>
<script>
import api from '../services/Api'
export default {
    name: 'createDriver',
    data() {
        return {
            driver: {
                name: '',
                last_name: '',
                email: '',
                stateId: null,
                cityId: null,
                street: '',
                zipCode: '',
                typeCarId: null,
                carYear: '',
                creditCard: {
                    number: '',
                    expire: '',
                    cvv: ''
                },
                phones: []
            }
        }
    },
    methods: {
        submit(formData) {
            if (!formData.creditCard.number) {
                this.$snotify.error('Credit card number is required', 'Error')
                return
            }
            if (!formData.creditCard.expire) {
                this.$snotify.error('Credit card date expire is required', 'Error')
                return
            }
            if (!formData.creditCard.cvv) {
                this.$snotify.error('Credit card CVV is required', 'Error')
                return
            }
            api().post('/drivers', formData)
                .then(response => {
                    this.$snotify.success(response.data.message, 'Success')
                    this.$router.push({name: 'drivers.index'})
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
        }
    }
}
</script>

