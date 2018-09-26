<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col" v-for="item in fieldsTable" :key="item.id">{{ item.name }}</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(driver, index) in drivers" :key="driver.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ driver.name }}</td>
                                    <td>{{ driver.last_name }}</td>
                                    <td>{{ driver.email }}</td>
                                    <td>{{ driver.State.short_name }}</td>
                                    <td>{{ driver.City.name }}</td>
                                    <td>
                                        <router-link class="btn btn-sm btn-primary mr-lg-1" :to="{ name: 'drivers.info', params: { id: driver.id } }">More Info</router-link>
                                        <router-link class="btn btn-warning btn-sm" :to="{ name: 'drivers.edit', params: { id: driver.id } }">Edit</router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // fields: {
        //     type: Array,
        //     required: true
        // },
        drivers: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            fieldsTable: [
                {name: 'Name'},
                {name: 'Last Name'},
                {name: 'Email'},
                {name: 'State'},
                {name: 'City'},
            ]
        }
    },
}
</script>
