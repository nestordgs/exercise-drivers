<template>
    <div>
        <div class="row text-justify">
            <div class="col-10 mx-auto">
                <form action="">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-validate="'required'" type="text" class="form-control form-control-sm" id="name" name="name" v-model="driver.name" :class="{'is-invalid': errors.first('name')}">
                                <span class="invalid-feedback">{{ errors.first('name') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="last_name">Last name</label>
                                <input v-validate="'required'" type="text" class="form-control form-control-sm" id="last_name" name="last_name" v-model="driver.last_name" :class="{'is-invalid': errors.first('last_name')}">
                                <span class="invalid-feedback">{{ errors.first('last_name') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-validate="'required|email'" type="email" name="email" class="form-control form-control-sm" id="email" v-model="driver.email" :class="{'is-invalid': errors.first('email')}">
                                <span class="invalid-feedback">{{ errors.first('email') }}</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <h3 class="h4 text-center">Address Information</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="state">State</label>
                                <select v-validate="'required'" class="form-control form-control-sm"  v-model="driver.stateId" name="state" id="state" :class="{'is-invalid': errors.first('state')}">
                                    <option value="null">Select One State</option>
                                    <option v-for="state in states" :key="state.id" :value="state.id">{{ state.full_name }}</option>
                                </select>
                                <span class="invalid-feedback">{{ errors.first('state') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="city">City</label>
                                <select v-validate="'required'" class="form-control form-control-sm"  v-model="driver.cityId" name="city" id="city" :class="{'is-invalid': errors.first('city')}">
                                    <option value="null">Select One City</option>
                                    <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
                                </select>
                                <span class="invalid-feedback">{{ errors.first('city') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="zipCode">Zip Code</label>
                                <input v-validate="{ regex: /(^\d{5}$)|(^\d{5}-\d{4}$)/ }" type="text" class="form-control form-control-sm" id="zipCode" name="zipCode" v-model="driver.zipCode" :class="{'is-invalid': errors.first('zipCode')}">
                                <span class="invalid-feedback">{{ errors.first('zipCode') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="street">Street</label>
                                <input v-validate="''" type="text" class="form-control form-control-sm" id="street" name="street" v-model="driver.street" :class="{'is-invalid': errors.first('street')}">
                                <span class="invalid-feedback">{{ errors.first('street') }}</span>
                            </div>
                        </div>
                    </div>
                        <hr>
                        <h3 class="h4 text-center">Car Information</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="carYear">Car Year</label>
                                <input v-validate="'required|date_format:YYYY'" type="text" class="form-control form-control-sm" id="carYear" name="carYear" v-model="driver.carYear" :class="{'is-invalid': errors.first('carYear')}">
                                <span class="invalid-feedback">{{ errors.first('carYear') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="typeCar">TypeCar</label>
                                <select v-validate="'required'" class="form-control form-control-sm"  v-model="driver.typeCarId" name="typeCar" id="typeCar">
                                    <option value="null">Select One Type Car</option>
                                    <option v-for="typeCar in typeCars" :key="typeCar.id" :value="typeCar.id">{{ typeCar.name }}</option>
                                </select>
                                <span class="invalid-feedback">{{ errors.first('typeCar') }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="$route.name !== `drivers.edit`">
                        <hr>
                        <h3 class="h4 text-center">Credit Car Information</h3>
                        <div class="row">
                            <div class="col-12 col-sm">
                                <div class="form-group">
                                    <label for="credit_card">Credit card number</label>
                                    <input v-validate="'required|credit_card'" type="number" class="form-control form-control-sm" id="credit_card" name="credit_card" v-model="driver.creditCard.number" :class="{'is-invalid': errors.first('credit_card')}">
                                    <span class="invalid-feedback">{{ errors.first('credit_card') }}</span>
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="form-group">
                                    <label for="expire">Date Expire</label>
                                    <input v-validate="'required|date_format:MM/YYYY'" type="text" class="form-control form-control-sm" id="expire" name="expire" v-model="driver.creditCard.expire" :class="{'is-invalid': errors.first('expire')}">
                                    <span class="invalid-feedback">{{ errors.first('expire') }}</span>
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="form-group">
                                    <label for="cvv">Date Expire</label>
                                    <input v-validate="'required|max:5|min:3|numeric'" type="number" class="form-control form-control-sm" id="cvv" name="cvv" v-model="driver.creditCard.cvv" :class="{'is-invalid': errors.first('cvv')}">
                                    <span class="invalid-feedback">{{ errors.first('cvv') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h3 class="h5  text-center">Phones</h3>
                    <div class="row mb-3">
                        <div class="col-12">
                            <p class="text-right">
                                <button type="button" class="btn btn-sm btn-success" @click="addPhone">Add Phone</button>
                            </p>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4" v-for="(phone, index) in driver.phones" :key="phone.id">
                            <label :for="`phone_${index}`">Phone {{ index + 1 }}</label>
                            <div class="input-group mb-3">
                                <input v-validate="{ regex: /^\+?\d{4,12}(-)?\d+?$/ }" type="text" class="form-control form-control-sm" :name="`phone_${index}`" :id="`phone_${index}`" v-model="phone.number" :class="{'is-invalid': errors.first(`phone_${index}`)}">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-danger btn-sm" type="button" id="button-addon2" @click="removePhone(phone)">Remove</button>
                                </div>
                                <span class="invalid-feedback">{{ errors.first(`phone_${index}`) }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                            <p v-if="errors.items.length" class="text-danger">
                                One or more fields are incorrect
                            </p>
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-sm btn-primary" @click="submit" :disabled="errors.items.length > 0">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../services/Api'
export default {
    props: {
        driver: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            cities: [],
            states: [],
            typeCars: [],
        }
    },
    methods: {
        prepareComponent() {
            this.getCities()
            this.getStates()
            this.getTypeCars()
        },
        getCities() {
            api().get('/cities')
                .then(response => {
                    this.cities = response.data
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
        },
        getStates() {
            api().get('/states')
                .then(response => {
                    this.states = response.data
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
        },
        getTypeCars(){
            api().get('/typeCars')
                .then(response => {
                    this.typeCars = response.data
                })
                .catch(err => {
                    this.errorResponse(err.response.data)
                })
        },
        addPhone() {
            this.driver.phones.push({number: ''})
        },
        removePhone(phone) {
            this.driver.phones = this.driver.phones.filter(item => item !== phone)
        },
        submit() {
            this.$emit('submit', this.driver)
        }
    },
    async mounted() {
        await this.prepareComponent()
    },
}
</script>

