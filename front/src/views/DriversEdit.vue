<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <h2>Edit Driver</h2>
            </div>
        </div>
        <driver-form :driver="driver" @submit="submit"></driver-form>
    </div>
</template>
<script>
import api from '../services/Api'
export default {
    name: 'EditDriver',
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
        getDriver(id) {
            api().get(`/drivers/${id}`)
            .then(response => {
                this.driver = response.data
                this.driver.carYear = response.data.carYear.split('-')[0]
                this.driver.creditCard = {
                    number: '',
                    expire: '',
                    cvv: ''
                }
            })
        },
        submit(formData) {
            api().put(`/drivers/${this.$route.params.id}`, formData)
                .then(response => {
                    this.$snotify.success(response.data.message, 'Success')
                    this.$router.push({name: 'drivers.index'})
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
        }
    },
    async mounted() {
        await this.getDriver(this.$route.params.id)
    }
}
</script>

