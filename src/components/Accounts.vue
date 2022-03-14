<template>
    <div class="col-md-3 col-sm-2" v-for="account in accounts" :key="account.account_id" >
        <AccountItem :data="{name: 'Benito Esteban'}" />
        <!-- {{1234}} -->
    </div>
</template>

<script>
import AccountItem from './AccountItem.vue'

export default {
    name: 'Accounts',
    props: ['data'],
    components: {
        'AccountItem': AccountItem
    },
    data(){
        return {
            accounts: null
        }
    },
    mounted(){
        setTimeout(() => {
            this.accounts  = this.data;
            console.log(this.data);
        }, 2500);
    }
}
</script>
