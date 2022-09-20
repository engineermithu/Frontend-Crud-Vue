<template>
    <div>
        <div class="container">
            <form @submit.prevent="formSubmit()">
                <div class="form-group row mt-5">
                    <label for="name" class="col-from-label col-md-3">Name</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" v-model="employeeForm.name" name="name" placeholder="Enter Name" id="name" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-from-label col-md-3">Email</label>
                    <div class="col-md-9">
                    <input type="email" class="form-control" v-model="employeeForm.email" name="email" placeholder="Enter Email" id="email" />
                    </div>
                </div>
                 <div class="form-group row">
                    <label for="image" class="col-from-label col-md-3">Image</label>
                    <div class="col-md-9">
                    <input type="file" class="form-control" v-on="employeeForm.image" name="image" id="image" accept="image/*" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="gender" class="col-from-label col-md-3" >Gender</label>
                    <div class="col-md-9">
                        <div class="form-check-input">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ml-3" type="radio" v-model="employeeForm.gender" name="gender" id="male" value="1">
                                <label class="form-check-label ml-1" for="male">Male</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-model="employeeForm.gender" name="gender" id="female" value="0">
                                <label class="form-check-label" for="female">Female</label>
                              </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="form-group row">
                    <label for="skills" class="col-from-label col-md-3" >Skills</label>
                    <div class="col-md-9">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="laravel" value="Laravel" name="skills[]">
                            <label class="form-check-label" for="laravel">Laravel</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="codeigniter" value="codeigniter" name="skills[]">
                            <label class="form-check-label" for="codeigniter">Codeigniter</label>
                        </div>
                        <br><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="ajax" value="option1" name="skills">
                            <label class="form-check-label" for="ajax">Ajax</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="vue" value="option2" name="skills">
                            <label class="form-check-label" for="vue">Vue Js</label>
                        </div>
                        <br><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="musql" value="option1" name="skills">
                            <label class="form-check-label" for="musql">MySQL</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" v-model="employeeForm.skills" id="api" value="option2" name="skills">
                            <label class="form-check-label" for="api">API</label>
                        </div>
                    </div>
                </div> -->
                <div class="form-group text-right">
                    <button type="submit" class="btn btn-outline-info" tabindex="4">
                        Add Employee
                    </button>
                </div>
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
                employeeForm:{
                    name:'',
                    email:'',
                    image:'',
                    gender:''
                    // skills: []
                }
            }
        },
        mounted() {
        },
        methods: {
            formSubmit(){
                axios.post('http://127.0.0.1:8000/api/employee',this.employeeForm).then(response =>{
                    console.log(response);
                    // console.log(this.skills.toString());
                   alert(response.data.message)
                   this.$router.push('/all-employee')
                })
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>