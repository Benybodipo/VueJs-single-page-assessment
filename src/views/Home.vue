<template>
    <section class="row bg-white" id="top-section">
        <h1 class="mb-0">Users</h1>
        <p class="m-0">Access all the users</p>
    </section>
    <section class="row pt-3 pb-3">
        <div class="col-sm-12">
            <div class="component">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.acount_id">
                            <td>{{user.acount_id}}</td>
                            <td>{{user.first_name}}</td>
                            <td>{{user.last_name}}</td>
                            <td>{{user.phone_number}}</td>
                            <td>{{user.email_address}}</td>
                            <td>
                                <router-link :to="{path: ('/billing/'+user.account_id), params: {acount_id: user.account_id}}" class="btn btn-sm btn-primary">
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
            accounts: []
        }
    },
    mounted() {
        setTimeout(() => {
            this.accounts  = this.data;
            console.log(this.accounts);
        },
        2500);
    }
}
</script>
<style scoped>
    section.row:last-child
    {
        border: none !important;
    }
</style>
