<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <h2 class="text-left font-italic">Driver List</h2>
            </div>
        </div>
        <list-drivers :fields="fields" :drivers="drivers"></list-drivers>
    </div>
</template>
<script>
import api from '../services/Api.js'
import ListDrivers from '@/components/ListDrivers.vue'
export default {
    name: 'indexDrivers',
    components: {
        ListDrivers
    },
    data() {
        return {
            drivers: []
        }
    },
    methods: {
        getDrivers() {
            api().get('/drivers')
                .then(response => {
                    this.drivers = response.data
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
            }
    },
    async mounted() {
        await this.getDrivers()
    }
}
</script>
