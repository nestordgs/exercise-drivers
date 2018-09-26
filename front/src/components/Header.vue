<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">API Nodejs Drivers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <!-- <router-link class="nav-link" to="/">Home</router-link> -->
                <!-- <router-link class="nav-link" to="/drivers">Drivers</router-link> -->
                <!-- <router-link class="nav-link" to="/drivers/create">Create Driver</router-link> -->
                <!-- <router-link class="nav-link" to="/drivers/:id/edit">Edit Driver</router-link> -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/drivers">Drivers</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/drivers/create">Create Driver</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/drivers/:id/edit">Edit Driver</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'header',
    }
</script>