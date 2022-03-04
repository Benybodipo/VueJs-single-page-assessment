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
            <li class="list-group-item i1">
              <router-link to="/" aria-current="true">
                <fa :icon="['fas', 'house']" />
                Home
              </router-link>
            </li>
            <li class="list-group-item i2">
              <router-link to="/billing" aria-current="true">
                <fa :icon="['fas', 'wallet']" />
                Billing
              </router-link>
            </li>
            <li class="list-group-item i3">
              <router-link to="/test" aria-current="true">
                <fa :icon="['fas', 'house']" />
                Test
              </router-link>
            </li>
          </ul>
        </aside>
        <main class="col-sm-10">
          <!-- Display the pages here -->
            <router-view/>
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
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.users = data
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;;
  }
</style>
