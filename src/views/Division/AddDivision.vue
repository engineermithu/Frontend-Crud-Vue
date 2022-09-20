<template>
    <div>
        <div class="container">
                    <form @submit.prevent="formSubmit()">
                        <div class="form-group">
                            <label for="name">Division Name</label>
                            <input type="text" class="form-control" v-model="divisionForm.name" name="name" placeholder="Enter Division Name" id="name" />
                        </div>
                        <button type="submit" class="btn btn-outline-info">Add Divition</button>
                    </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import router from '@/router'
    export default{
        name:   'FrontendCrudApp',
       
        data(){
            return {
                divisionForm:{
                    name:''
                }
            }
        },
        mounted() {
        },
        methods: {
            formSubmit(){
                axios.post('http://127.0.0.1:8000/api/division-store',this.divisionForm).then(response =>{
                    console.log(response);
                   alert(response.data.message)
                   this.$router.push('/all-division')
                })
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>