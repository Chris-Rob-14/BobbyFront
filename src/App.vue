<template>
   <HeaderLogo v-if="$route.meta.showHeader"/>
  <router-view />
</template>

<script lang="ts">
import HeaderLogo from './components/HeaderLogo.vue';

export default {
  name: 'App',
  components: {
    HeaderLogo,
  },
};
</script>