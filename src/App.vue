<template>
    <header>
      <div class="container-fluid p-0">
        <Navbar :data="accounts"/>
      </div>
    </header> 
    <div class="container-fluid" id="main-container">
      <div class="row row-eq-height">
        <aside class="col-sm-2 d-none d-ms-none d-md-none d-lg-block">
            <ul class="list-group" v-if="accounts">
              <li class="list-group-item i1">
                <router-link to="/" aria-current="true">
                  <fa :icon="['fas', 'house']" />
                  Home
                </router-link>
              </li>
              <li class="list-group-item i2 d-block d-md-block">
                <router-link :to="{path: ('/billing/'+accounts[0].account_id)}" aria-current="true">
                  <fa :icon="['fas', 'wallet']" />
                  Billing
                </router-link>
              </li>
            </ul>
        </aside>
        <main class="col-sm-12 col-md-12 col-lg-10">
          <!-- Display the pages here -->
            <router-view />
          <!-- /Display the pages here -->
        </main>
      </div>
    </div>
</template>

<script>
import NavBar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    'Navbar': NavBar
  },
  computed: {
    accounts() {
      return this.$store.getters.getAllAccounts
    }
  },
  mounted(){
    this.$store.dispatch('setAllAccounts')
  },
  watch: {
    $route (from, to) {
      this.$store.dispatch('setAllAccounts')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;;
  }
</style>
