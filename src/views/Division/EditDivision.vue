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
            axios.get('http://127.0.0.1:8000/api/division-edit/'+this.$route.params.id).then(response =>{
                    this.divisionForm.name = response.data.data.name
                })
        },
        methods: {
            formSubmit(){
                axios.post('http://127.0.0.1:8000/api/division-update/'+this.$route.params.id, this.divisionForm).then(response =>{
                     console.log(response)
                   this.$router.push('/all-division')
                })
            }
           
        },
    }

</script>

<style lang="scss" scoped>

</style>