<template>
    <header>
      <div class="container-fluid p-0">
        <Navbar />
      </div>
    </header> 
    <div class="container-fluid" id="main-container">
      <div class="row row-eq-height">
        <aside class="col-sm-2">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/" aria-current="true" class="">
                <fa :icon="['fas', 'house']" />
                Home
              </router-link>
            </li>
            <li class="list-group-item active" aria-current="true">
              <router-link to="/billing" aria-current="true" class="">
                <fa :icon="['fas', 'wallet']" />
                Billing
              </router-link>
            </li>
          </ul>
        </aside>
        <main class="col-sm-10" >
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
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;;
  }
</style>
