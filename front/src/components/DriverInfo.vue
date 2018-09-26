<template>
    <div>
        <div class="row">
            <div class="col-sm-10 mx-auto">
                <div class="row mt-lg-2">
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Name:</span> {{ driver.name }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Last Name:</span> {{ driver.last_name }}
                        </p>
                        
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Email:</span> {{ driver.email }}
                        </p>
                        
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">State:</span> {{ driver.State.full_name }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">City:</span> {{ driver.City.name }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Zip code:</span> {{ driver.zipCode }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Street:</span> {{ driver.street }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Car Year:</span> {{ driver.carYear.split('-')[0] }}
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-justify">
                            <span class="font-weight-bold">Type Car:</span> {{ driver.Type_Car.name }}
                        </p>
                    </div>
                    
                </div>
                    <h3>Phones</h3>
                <div class="row">
                    <div class="col-6 col-sm-6 col-lg-4 col-xl-3">
                        <ol>
                            <li v-for="phone in driver.phones" :key="phone.id">
                                {{ phone.number }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'componentInfoDriver',
        props: {
            driver: {
                type: Object,
                required: true
            }
        }
    }
</script>

