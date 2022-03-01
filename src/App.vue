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
              <fa :icon="['fas', 'house']" />
              Home
            </li>
            <li class="list-group-item active" aria-current="true">
              <fa :icon="['fas', 'wallet']" />
              Billing
            </li>
          </ul>
        </aside>
        <main class="col-sm-10" >
          <!-- Top Section -->
          <section class="row bg-white" id="top-section">
            <h1 class="mb-0">Billing</h1>
            <p class="m-0">Overview your accounts</p>
          </section>
          <!-- Accounts section  -->
          <section id="account-section" class="row">
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
          </section>
          <section class="row row-eq-height" id="payment-and-products-section">
            <div class="col-sm-7">
              <PaymentDetails />
            </div>
            <div class="col-sm-5">
              <MyProducts />
            </div>
          </section>
           <section class="row" id="billing-history-section">
            <div class="col-12">
              <BillingHistory />
            </div>
           </section>
        </main>
      </div>
    </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import AccountItem from './components/AccountItem.vue'
import PaymentDetails from './components/PaymentDetails.vue'
import MyProducts from './components/MyProducts.vue'
import BillingHistory from './components/BillingHistory.vue'

export default {
  name: 'App',
  components: {
    'Navbar': NavBar,
    'AccountItem': AccountItem,
    'PaymentDetails': PaymentDetails,
    'MyProducts': MyProducts,
    'BillingHistory': BillingHistory
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;;
  }
</style>
