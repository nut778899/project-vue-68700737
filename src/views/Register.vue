<template>
  <div class="container my-5 ">
<div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="width: 350px; border-radius: 15px;">
      <h3 class="text-center mb-4">Register</h3>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">firstname</label>
          <input type="text" class="form-control" id="firstname" placeholder="Enter firstname" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Lastname</label>
          <input type="password" class="form-control" id="Lastname" placeholder="Enter Lastname" required>
        </div>
         <div class="mb-3">
          <label for="username" class="form-label">Phone</label>
          <input type="text" class="form-control" id="Phone" placeholder="Enter Phone" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">username</label>
          <input type="password" class="form-control" id="username" placeholder="Enter username" required>
        </div> <div class="mb-3">
          <label for="username" class="form-label">password</label>
          <input type="text" class="form-control" id="password" placeholder="Enter password" required>
        </div>
      
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <div class="text-center mt-3">
          <small><a href="#">Forgot Password?</a></small>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>