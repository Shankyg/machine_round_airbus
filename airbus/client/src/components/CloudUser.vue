<template>
  <div>
  <table id="myTable" class="table table-hover table-bordered mt-5">
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
    
  </tbody>
</table>

  </div>
</template>

<script>
import UserService from "../services/user.service";
import $ from "jquery";
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
  getUsers(){
    UserService.getUserBoard().then(
      (response) => {
        $('#myTable').DataTable( {
    data: response.data,
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'email' },
        { data: 'role' },
        { data: 'createdAt' }
    ]
} );
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