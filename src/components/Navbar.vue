<template>
    <div id="">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <router-link class="navbar-brand" to="/" aria-current="true">
              <img :src="appLogo" alt="img">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <fa :icon="['fas', 'bars']" />
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
                <li class="nav-item profile d-none d-sm-block " v-if="accounts">
                  <router-link class="nav-link" :to="{path: ('/billing/'+ accounts[0].account_id)}" aria-current="true">
                    <fa :icon="['fas', 'wallet']" />
                    Billing
                  </router-link>
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
        props: ['data'],
        data(){
          return {
            accounts: null,
            'appLogo': require('../assets/img/logo.png'),
            'profileImg': require('../assets/img/photo.jpeg')
          }
        },
        mounted(){
          setTimeout(()=>{
            this.accounts = this.data
          }, 200)
        }
    }
</script>
