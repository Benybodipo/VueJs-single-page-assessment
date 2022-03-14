<template>
    <section class="row bg-white" id="top-section">
        <h1 class="mb-0">Accounts</h1>
        <p class="m-0">Access all the accounts</p>
    </section>
    <section class="row pt-3 pb-3">
        <div class="col-sm-12">
            <div class="component" v-if="accounts">
                <table class="table" v-if="accounts">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="account in accounts" :key="account.acount_id">
                            <th>{{account.account_id}}</th>
                            <td>{{account.first_name}}</td>
                            <td>{{account.last_name}}</td>
                            <td>{{account.phone_number}}</td>
                            <td>{{account.email_address}}</td>
                            <td>
                                <router-link :to="{path: ('/billing/'+account.account_id)}" class="btn btn-sm btn-primary">
                                    <fa :icon="['far', 'eye']" />
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['data'],
    data() {
        return {
            accounts: null
        }
    },
    created() {
        setTimeout(() => {
            this.accounts  = this.data;
            // console.log(this.accounts.length);
        },
        300);
    }
}
</script>
<style scoped>
    section.row:last-child
    {
        border: none !important;
    }
</style>
