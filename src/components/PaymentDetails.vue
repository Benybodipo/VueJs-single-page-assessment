<template>
    <div class="component mb-3" v-if="user">
        <div class="row m-0 p-0">
            <div class="header">
                <h5>Payment details</h5>
                <p>View details of your next invoice and payment method</p>
            </div>
            <p v-if="user">Next invoice: {{('user.next_invoice_date') ? (require('moment'))(user.next_invoice_date).format('DD MMM YYYY') : 1234}}</p> 
            <!-- <p>Next invoice: {{Mixins.methods.formatData(user.next_invoice_date)}}</p>  -->
        </div>
        <div class="row row-eq-height m-0" style="max-width: 100%;">
            <div class="col-md-12 col-lg-6 mb-3 current-balance">
                <div class="gray-bg">
                    <strong class="heading">Current balance</strong>
                    <span class="price h3">£<span>{{user.balance}}</span></span>
                    <div class="clearfix body">
                        <fa :icon="['fas', 'lock']" class="ic"/>
                        <p>
                            This is a secure 256-bit SSL <br>
                            encrypted payment. You're safe.
                        </p>
                    </div>
                    <div>
                        <button class="btn btn-primary">Pay now</button>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 mb-3 payment-method">
                <div class="gray-bg">
                    <strong class="heading">Payment method 
                        <span class="badge rounded-pill bg-white text-dark ">{{user.payment_method}}</span>
                    </strong>
                    <div class="clearfix body pt-3">
                        <fa :icon="['fas', 'lightbulb']" class="ic"/>
                        <p>
                            <span class="highlight">Guide: </span> To manage your payments <br>
                            more easy, we recommend switching <br>
                            to Direct Debit.
                        </p>
                    </div>
                    <div>
                        <button class="btn btn-primary" @click="changePaymentMethod">Switch to {{(user.payment_method == 'DD') ? 'monthly payment' : 'direct debit'}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading</div>
</template>

<script>
import Mixins from '@/Mixins';
import moment from 'moment'
import faker from 'faker'

export default {
    name: 'PaymentDetails',
    props: ['data', 'details'],
    
    computed: {
        user (){
            return this.$store.getters.getCurrentAccount
        }
    },
    mounted(){
        this.$store.dispatch('setCurrentAccount', this.$route.params.account_id)
    }
}
</script>