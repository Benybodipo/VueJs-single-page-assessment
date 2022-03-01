<template>
    <div id="">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img :src="appLogo" alt="img">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav ms-auto flex-nowrap">
                <li class="nav-item notification pr-3">
                  <a class="nav-link active" aria-current="page" href="#">
                    <fa :icon="['far', 'bell']" class="bell"/>
                  </a>
                </li>
                <li class="nav-item profile">
                  <a class="nav-link clearfix profile-link pl-2" href="#">
                    <img :src="profileImg" alt="">
                    <div class="profile-info">
                      <h5 class="m-0 name">First Lastname</h5>
                      <small class="email">firstlastname@bonline.com</small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
    // import logo from '../assets/images/logo.svg'
    export default {
        name: 'NavBar',
        data(){
          return {
            'appLogo': require('../assets/img/logo.png'),
            'profileImg': require('../assets/img/photo.jpeg')
          }
        }
    }
</script>
