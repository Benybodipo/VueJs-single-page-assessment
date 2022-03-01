<template>
    <tr>
        <td>13 Dec 2021</td>
        <td>
            <span class="badge bg-light text-muted" style="font-weight: normal">Invoice</span>
        </td>
        <td>$8.00</td>
        <td>$45.00</td>
        <td>8993UDEJ</td>
        <td>
            <fa :icon="['fas', 'arrow-right-to-bracket']" class="download-icon"/>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'BillingPlanRow'
    }
</script>