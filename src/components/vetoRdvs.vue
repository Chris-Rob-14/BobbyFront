<template>
    <div>
        <hr>
            <p>{{ veto.name + ' - ' + veto.city}}</p>
            <p>{{ veto.address + ' - ' + veto.zip_code }}</p>
        <hr>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default defineComponent({
    props: {
        veto: {}
    },
});

</script>