<template>
    
    <div class="component" v-if="user">
        <div class="row m-0 p-0">
            <div class="header">
                <h5>Payment details</h5>
                <p>View details of your next invoice and payment method</p>
            </div>
            <p>Next invoice: {{user.next_invoice_date}}</p> 
        </div>
        <div class="row row-eq-height m-0" style="max-width: 100%;">
            <div class="col-sm-6 current-balance">
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
            <div class="col-sm-6 payment-method">
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
                        <button class="btn btn-primary">Switch to direct debit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading</div>
</template>

<script>
export default {
    name: 'PaymentDetails',
    props: ['data'],
    data() {
        return {
            user: null
        }
    },
    mounted () {
        setTimeout(() => {
            this.user  = this.data[0];
        },
        200);
        
    },
    watch: {
        $route (to, from){
            console.log(to);
            console.log(from);
            setTimeout(() => {
                this.user  = this.data[0];
            },
            100);
        }
    }
}
</script>