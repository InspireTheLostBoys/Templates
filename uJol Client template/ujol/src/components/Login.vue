<template>
  <div class="wrapper fadeInDown" id="Startpage">
    <div id="formContent">
      <div class="">
        <img src="../assets/Logo-full.png">
      </div>

      <!-- Login Form -->
      <form id="LoginForm" class="fadeIn">
        <h2 class="active"> Sign In </h2>
        <input type="text" id="login" name="login" placeholder="login">
        <input type="text" id="password" name="login" placeholder="password">
        <button type="button" class="login" v-on:click="Login">Login</button>
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">Forgot Password?</a>
      </div>

    </div>
  </div>
</template>

<script>
  import '../assets/css/Login.css'

  export default {
    name: 'Login',
    props: {
      msg: String
    },
    methods: {
      Login: function (e) {
        this.$router.push('/Main')
      }
    }
  }

</script>
