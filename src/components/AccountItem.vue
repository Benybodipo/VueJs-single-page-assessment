<template>
    <div class="col-sm-3" key="{{data.account_id}}">
        <div class="account shadow-sm"><!-- Selected class-->
            <router-link :to="'/billing/'+ account.account_id" aria-current="true">
                <strong class="account-name">{{account.first_name}}
                    <span class="status">{{account.account_status}}</span>
                </strong>
                <p class="m-0">
                    Account ID:
                    <span>{{account.account_id}}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AccountItem',
        props: ['data'],
        data() {
            return {
                account: []
            }
        },
        mounted(){
            // setTimeout(() => {
            //     this.account = this.data
            // }, 100);
            this.account = this.data
        }
    }
</script>