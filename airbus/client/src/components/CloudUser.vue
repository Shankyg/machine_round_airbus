<template>
  <div>
    
{{content.name}}
  <table class="table table-hover">
  <thead class="thead-dark">
    <tr>
       <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(user,index) in content" :key="user.id">
      <th scope="row">{{index+1}}</th>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.role}}</td>
      <td>{{user.createdAt}}</td>

    </tr>
  </tbody>
</table>
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  created: function () {
      this.getUsers()
      console.log('mounted: got here')
    },
  data() {
    return {
      content: [],
    };
  },
methods:{
  getUsers:function (){
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
        console.log(this.content)
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
  },
};
</script>