<template>
    <div class="flex flex-row text-base font-semibold text-blue-800 whitespace-nowrap max-w-[390px]">
    
            <router-link to="/traitement">
        <span class="flex-auto my-auto">Profil</span>
        </router-link>
        
        
            <router-link to="/rdv/animal/:id">
        <span class="flex-auto my-auto">Rendez-vous</span>
        </router-link>
        
        
            <router-link to="/documents">
        <span class="flex-auto my-auto">Documents</span>
        </router-link>
        
    <div class="mt-4 w-full bg-blue-800 border border-blue-800 border-solid min-h-[1px]"></div>
      <div class="z-10 w-full bg-orange-600 border border-orange-600 border-solid min-h-[1px]"></div>
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavigationMenu',
  });
  </script>