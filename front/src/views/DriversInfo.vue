<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <h2 class="text-left font-italic">Driver Information</h2>
            </div>
        </div>
        <info :driver="driver"/>
    </div>
</template>
<script>
import Info from '@/components/DriverInfo.vue'
import api from '../services/Api'
export default {
  name: 'infoDriver',
  components: {
      Info
  },
  data() {
      return {
          driver: {
              name: '',
              last_name: '',
              email: '',
              State: {
                  full_name: ''
              },
              City: {
                  name: ''
              },
              carYear: '',
              Type_Car: {
                  name: ''
              },
              phones: [],
              zipCode: '',
              street: ''
          }
      }
  },
  methods: {
      infoDriver(id) {
          api().get(`/drivers/${id}`)
          .then(response => {
              this.driver = response.data
          })
          .catch(err => {
              console.log(err)
          })
      }
  },
  async mounted() {
    await this.infoDriver(this.$route.params.id)
  },
}
</script>

