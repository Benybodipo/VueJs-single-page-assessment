<template>
    <!-- Top Section -->
    <section class="row bg-white" id="top-section">
        <h1 class="mb-0">Billing</h1>
        <p class="m-0">Overview your accounts</p>
    </section>
    <!-- Accounts section  -->
    <section id="account-section" class="row">
        <!-- <Accounts :data="accounts" /> -->
        <h1 v-if="!accounts">Loading...</h1>
        <AccountItem v-for="account in data" :key="account.account_id" :data="account" data-name="ben"/>
    </section>
    <section class="row row-eq-height" id="payment-and-products-section">
        <div class="col-sm-7">
            <PaymentDetails :data="account"/>
        </div>
        <div class="col-sm-5">
            <MyProducts :data="account"/>
        </div>
    </section>
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
    data() {
        return {
            accounts: null,
            account: null,
            products: null,
            single_account: null,
            id: this.$route.params.account_id
        }
    },
    methods: {
        getData(){
            this.account = this.data.filter((acc) => {
                return (acc.account_id == this.$route.params.account_id)
            });
        }
    },
    mounted() {
        setTimeout(() => {
            this.accounts = this.data;
            this.getData();
        },
        100);
    },
    watch: {
        $route (to, from){
            this.getData(); 
        }
    }
}
</script>