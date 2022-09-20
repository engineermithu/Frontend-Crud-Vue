<template>
  <div class="card">
    <div class="card-hrader justify-content-between d-flex align-items-center mt-3 ml-3">
        <router-link :to="{name:'addemployee'}" class="btn btn-success">Add Employee</router-link>
    </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-md ">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Gender</th>
                        <th>Skills</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee,index) in AllEmployees" :key="index">
                            <td>{{ index+1}}</td>
                            <td>{{  employee.name   }}</td>
                            <td>{{  employee.email   }}</td>
                              <td> 
                                    <img 
                                          :src="employee.photo"
                                          alt="Not Found Image!"
                                            style="height:100px"
                                     >
                                         
                                    </td>
                            <td>{{  employee.gender   }}</td>
                            <!-- <td>{{  employee.skills   }}</td> -->
                            <!-- <td>
                                <router-link :to="{ name:'editdivision', params: {id:division.id} }" class="btn btn-info">Edit</router-link>
                                <button @click="deleteDivision(division.id)" class="btn btn-danger m-1"> Delete </button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name:   'FrontendCrudApp',
       
        data(){
            return {
                AllEmployees:[]
            }
        },
        mounted() {
            this.allEmployee();
        },
        methods: {
            allEmployee(){
                axios.get('http://127.0.0.1:8000/api/employee/').then(response =>{
                    console.log(response);
                    this.AllEmployees = response.data.data
                })
            }
            ,
             deleteDivision(id){
                axios.delete(`http://127.0.0.1:8000/api/employee/${id}`).then(response =>{
                     console.log(response)
                     confirm('Are you sure to delete?')
                    //  this.alldivision()
                    alert(response.data.data)
                    // this.allDivision
                });
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>