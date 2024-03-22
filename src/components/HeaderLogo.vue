<template>
    <div class="flex flex-col items-start bg-blue-200 p-6 space-y-2 relative">
      <div class="flex items-center space-x-32 relative">
        <!-- Logo -->
        <a href="/listeanimaux">
          <img loading="lazy" src="@/assets/logo/LogoBobbyBlue.png" alt="Logo" class="aspect-[5.56] w-[340px]" />
        </a> 
        <button @click="onBurgerMenuClick" class="focus:outline-none">
      <img
        src="@\assets\burgermenu\icons8-menu-64.png"
        v-if="!isOpen"
      />
    </button>  
       <!-- <BurgerMenu v-if="!isOpen" @onMenuBurgerContainerClick="onMenuBurgerContainerClick"/>-->
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import BurgerMenu from "../pages/BurgerMenu.vue";

export default defineComponent({
  name: "HeaderLogo",
  components: {
    BurgerMenu,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    /*onBurgerMenuClick() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.$router.push("/mb");
      }
    },*/
    onBurgerMenuClick() {
        this.$router.push("/mb");
      },
    onMenuBurgerContainerClick() {
      this.isOpen = false;
    },
  },
});
</script>

