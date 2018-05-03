<template>
  <div class="Main">
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="#">u-Jol</a>
      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" v-on:click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="Activity">Activity</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="Notifications">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="Profile">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="Logout">Switch account</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Settings</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="nav-scroller bg-white box-shadow fixed-top">
      <nav class="nav nav-underline">
        <a class="nav-link" href="#" v-on:click="ToggleFriends">Friends
          <span class="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a class="nav-link" href="#">Explore</a>
        <a class="nav-link" href="#">Suggestions</a>
      </nav>
    </div>


    <div class="friends_overlay col-sm-12 col-md-3">
      <ul class="tabs" role="tablist">
        <li>
          <input type="radio" name="tabs" id="tab1" checked />
          <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Friends</label>
          <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false">
            <div>
              <input type="text" placeholder="search">
            </div>
            list of friends goes here
          </div>
        </li>

        <li>
          <input type="radio" name="tabs" id="tab2" />
          <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">News Feed</label>
          <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
            news feed to go here
          </div>
        </li>
      </ul>
    </div>
    <main role="main" class="main_container">
      <div class="container ">
        <router-view name="MainPage" />
      </div>
    </main>

  </div>
</template>

<script>
  export default {
    name: 'Main',
    props: {
      msg: String
    },
    methods: {
      Logout: function (e) {
        this.$router.push('/')
      },
      Activity: function () {
        this.$router.push('/Main/Activity')
        if ($('.offcanvas-collapse').hasClass('open')) {
          $('.offcanvas-collapse').removeClass('open')
        }
      },
      Profile: function () {
        this.$router.push('/Main/Profile')
        if ($('.offcanvas-collapse').hasClass('open')) {
          $('.offcanvas-collapse').removeClass('open')
        }
      },
      Notifications: function () {
        this.$router.push('/Main/Notifications')
        if ($('.offcanvas-collapse').hasClass('open')) {
          $('.offcanvas-collapse').removeClass('open')
        }
      },
      ToggleFriends: function () {
        if ($('.friends_overlay').hasClass('open')) {
          $('.friends_overlay').animate({
            "right": "-100%"
          }).toggleClass('open')
        } else {
          $('.friends_overlay').animate({
            "right": "0"
          }).toggleClass('open')
        }
      },
      toggleSidebar: function () {
        $('.offcanvas-collapse').toggleClass('open')
      }
    }
  }

</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Lato");
  .tabs * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .tabs h1 {
    font-weight: normal;
    font-size: 40px;
    font-weight: normal;
    text-transform: uppercase;
    float: left;
    margin: 20px 0 100px 10px;
  }

  .tabs h1 span {
    font-size: 13px;
    display: block;
    padding-left: 4px;
  }

  .tabs {
    width: 100%;
    height: 100%;
    float: none;
    list-style: none;
    position: relative;
    margin: 0 0 0 15px;
    text-align: left;
  }

  .tabs li {
    float: left;
    display: block;
  }

  .tabs input[type="radio"] {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  .tabs label {
    display: block;
    padding: 14px 21px;
    border-radius: 2px 2px 0 0;
    font-size: 17px;
    font-weight: normal;
    background: black;
    cursor: pointer;
    position: relative;
    top: 4px;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .tabs label:hover {
    background: #47c963;
  }

  .tabs .tab-content {
    z-index: 2;
    display: none;
    overflow: hidden;
    width: 100%;
    font-size: 17px;
    line-height: 25px;
    padding: 25px;
    position: absolute;
    top: 53px;
    left: 0;
    background: black;
    border: 1px solid #47c963;
    height: 100%;
  }

  .tabs [id^="tab"]:checked+label {
    top: 0;
    background: #47c963;
  }

  .tabs [id^="tab"]:checked~[id^="tab-content"] {
    display: block;
  }

  .tabs p.link {
    clear: both;
    margin: 380px 0 0 15px;
  }

  .tabs p.link a {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #612e76;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  .tabs p.link a:hover {
    background-color: #522764;
  }

</style>
