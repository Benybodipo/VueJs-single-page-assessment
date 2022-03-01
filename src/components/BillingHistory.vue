<template>
    <div class="component">
        <div class="header">
            <h5>Billing history</h5>
            <p>Choose a billing plan to see more details</p>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Download</th>
                </tr>
            </thead>
            <tbody>
                <BillingPlanRow />
                <BillingPlanRow />
                <BillingPlanRow />
                <BillingPlanRow />
            </tbody>
        </table>
    </div>
</template>

<script>
import BillingPlanRow from './BillingPlanRow.vue'

export default{
    name: 'BillingHistory',
    components: {
        'BillingPlanRow': BillingPlanRow
    },
}
</script>
