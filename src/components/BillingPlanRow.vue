<template>
    <tr>
        <td>{{getDate()}}</td>
        <td>
            <span class="badge bg-light text-muted" style="font-weight: normal">Invoice</span>
        </td>
        <td>£{{getAmount()}}.00</td>
        <td>£45.00</td>
        <td>{{getReference()}}</td>
        <td>
            <fa :icon="['fas', 'arrow-right-to-bracket']" class="download-icon"/>
        </td>
    </tr>
</template>

<script>
    import faker from 'faker'
import moment from 'moment';
    export default {
        name: 'BillingPlanRow',
        mounted () {
            
        },
        methods: {
            getDate () {
                return moment(faker.date.recent()).format('DD MMM YYYY')
            },
            getAmount() {
                return Math.floor((Math.random() * 10000) + 10)
            },
            getReference() {
                return faker.random.alphaNumeric(6)
            }
        }
    }
</script>