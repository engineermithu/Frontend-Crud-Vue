<template>
    <div>
        <div class="container">
            <ul class="nav navbar  navbar-expand-bg bg-info text-white justify-content-center">
                <li class="nav-item">
                    <router-link :to="{name:'alldivision'}">
                        Division
                    </router-link>

                </li>
                <li class="nav-item m-2">
                    <router-link :to="{name:'alldistrict'}">
                        District
                    </router-link>
                </li>
                <li class="nav-item m-2">
                    <router-link :to="{name:'adddivision'}">
                        Add Division
                    </router-link>
                </li>
                <li class="nav-item m-2">
                    <router-link :to="{name:'allemployee'}">
                        Employee
                    </router-link>
                </li>
                <li class="nav-item m-2">
                    <router-link :to="{name:'addemployee'}"></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script >

</script>

<style  >
li.nav-item a {
    font-size: 16px !important;
    color: #f0e9e9;
}
a.router-link-active.router-link-exact-active {
    color: black;
}
</style>
