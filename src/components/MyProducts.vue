<template>
    <div class="component">
        <div class="row m-0 p-0">
            <div class="header">
                <h5>My products</h5>
                <p>All your products at a glance</p>
            </div>
        </div>
        <div class="row p-0">
            <div class="col-sm-12" style="padding-left: 40px; padding-right: 40px;">
                <ul class="list-group products-list pl-3 pr-3">
                    <li class="list-group-item">
                        <fa :icon="['fas', 'phone']" />
                        VoIP - 23698547
                    </li>
                    <li class="list-group-item">
                        <fa :icon="['fas', 'diagram-project']" />
                        Fiber - SW29BE
                    </li>
                    <li class="list-group-item">
                        <fa :icon="['fas', 'laptop']" />
                        Website - www.google.com
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyProducts'
    }
</script>