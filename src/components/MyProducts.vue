<template>
    <div class="component">
        <div class="row m-0 p-0">
            <div class="header">
                <h5>My products</h5>
                <p>All your products at a glance</p>
            </div>
        </div>
        <div class="row p-0" v-if="account">
            <div class="col-sm-12" style="padding-left: 40px; padding-right: 40px;">
                <div>
                    <ul class="list-group products-list pl-3 pr-3">
                        <li class="list-group-item" v-for="product in account.products" :key="product.product_id">
                            <fa :icon="['fas', 'phone']" v-if="product.product_kind.toLowerCase().trim() == 'voip' || product.product_kind.toLowerCase().trim() == 'telco'"/>
                            <fa :icon="['fas', 'diagram-project']" v-else-if="product.product_kind.toLowerCase().trim() == 'fiber'"/>
                            <fa :icon="['fas', 'laptop']" v-else/>
                            {{product.product_kind}} - {{product.product_detail}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyProducts',
        computed: {
            account (){
                return this.$store.getters.getCurrentAccount
            }
        },
        mounted(){
            this.$store.dispatch('setCurrentAccount', this.$route.params.account_id)
        }
    }
</script>