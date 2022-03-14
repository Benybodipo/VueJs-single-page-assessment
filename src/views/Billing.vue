<template>
    <!-- Top Section -->
    <section class="row bg-white" id="top-section">
        <h1 class="mb-0">Billing</h1>
        <p class="m-0">Overview your accounts</p>
    </section>
    <!-- Accounts section  -->
    <section id="account-section" class="row">
        <AccountItem  v-for="account in $store.getters.getAllAccounts" :key="account.account_id" :data="account"/>
    </section>
    <!-- Payment details and Products -->
    <section class="row row-eq-height" id="payment-and-products-section">
        <div class="col-md-7 mb-3">
            <PaymentDetails />
        </div>
        <div class="col-md-5 mb-3">
            <MyProducts />
        </div>
    </section>
    <!-- Billing History -->
    <section class="row" id="billing-history-section">
        <div class="col-12">
            <BillingHistory />
        </div>
    </section>
</template>
<script>
import AccountItem from '../components/AccountItem.vue'
import PaymentDetails from '../components/PaymentDetails.vue'
import MyProducts from '../components/MyProducts.vue'
import BillingHistory from '../components/BillingHistory.vue'

export default {
    props: ['account_id', 'data'],
    name: 'Billing',
    components: {
        'AccountItem': AccountItem,
        'PaymentDetails': PaymentDetails,
        'MyProducts': MyProducts,
        'BillingHistory': BillingHistory
    },
    computed: {
        account (){
            return this.$store.getters.getCurrentAccount
        }
    },
    mounted(){
        this.$store.dispatch('setCurrentAccount', this.$route.params.account_id)
    },
    watch: {
        $route (to, from){
            this.$store.dispatch('setCurrentAccount', this.$route.params.account_id)
        }
    }
}
</script>