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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import $ from "jquery";

export default {
  name: "User",
  created: function () {
    this.getUsers();
  },
  
  methods: {
    getUsers() {
    
      UserService.getUserBoard().then(
        (response) => {
          $("#myTable").DataTable({
            data: response.data,
            columns: [
              {
                data: null,
                render: function (data, type, row, meta) {
                  return meta.row + 1;
                },
              },
              { data: "name" },
              { data: "email" },
              { data: "role" },
              { data: "createdAt" },
              {
                data: "id",
                render: function (data) {
                  let dlbtn = `<button data-id="${data}" class="btn btn-danger" id="delete">Delete</button>`;
                  return dlbtn;
                },
              },
            ],
          });
        },
        (error) => {
          console.error(
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()
          );
        }
      );

      $(document).on("click", "#delete", function () {
        let id = $(this).data("id");
        UserService.deleteUser(id).then(
          () => {
            location.reload();
            
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      });
    },
  },
};
</script>