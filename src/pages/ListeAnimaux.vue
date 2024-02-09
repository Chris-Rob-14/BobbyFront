<template>
  <div :class="$style.listeanimaux">
    <header :class="$style.header">
      <div :class="$style.menuBurger">
        <div :class="$style.logo">
          <img
            :class="$style.vectorIcon"
            alt=""
            src="/vector1.svg"
          />
          <img
            :class="$style.groupIcon"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div :class="$style.menuBurger1" @click="onMenuBurgerContainerClick">
          <img
            :class="$style.menuBurgerChild"
            alt=""
            src="/line-1.svg"
          />
          <img
            :class="$style.menuBurgerItem"
            alt=""
            src="/line-1.svg"
          />
          <div :class="$style.menuBurgerInner" />
        </div>
      </div>
    </header>
    <div :class="$style.rectangleParent" @click="onGroupContainerClick">
      <div :class="$style.frameChild" />
      <h1 :class="$style.h1">+</h1>
      <div :class="$style.jajouteUnAnimal">J’ajoute un animal</div>
    </div>
    <AnimalCard v-for="animal in animals" :animal="animal"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import AnimalCard from "../components/AnimalCard.vue";
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default defineComponent({
    data() {
      return {
        isLogged: false, 
        animals: '',
      }
    },
    name: "ListeAnimaux",
    async beforeMount() {
      this.isUserLoggedIn();
      await this.getMyAnimals();
      console.log(this.animals);
    },
    mounted() {
    },
    components: { AnimalCard },
    methods: {
      async getMyAnimals() {
        const response = await axios.get('http://localhost:3030/users/animals', {
          withCredentials: true,
        });

        this.animals = response.data;
      },
      isUserLoggedIn() {
        const sessionCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('connect.sid'));
        console.log(sessionCookie);
        this.isLogged = !!sessionCookie; // Set isLogged to true if the cookie is present
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
      onGroupContainerClick() {
        this.$router.push("/ajoutermodifieranimal");
      },
    },
  });
</script>

<style module>
  .vectorIcon {
    height: 28.9px;
    width: 53.2px;
    position: relative;
  }
  .groupIcon {
    height: 33px;
    width: 125.3px;
    position: relative;
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .menuBurgerChild {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 0%;
    right: 5.56%;
    bottom: 83.33%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .menuBurgerItem {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 100%;
    right: 5.56%;
    bottom: -16.67%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .menuBurgerInner {
    position: absolute;
    height: 16.67%;
    width: 111.11%;
    top: 41.67%;
    right: -11.11%;
    bottom: 41.67%;
    left: 0%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger1 {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .menuBurger {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    align-self: stretch;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xl) var(--padding-lg);
  }
  .frameChild {
    height: 55px;
    width: 351px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--orange);
    box-sizing: border-box;
    display: none;
  }
  .h1 {
    margin: 0;
    height: 49px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    z-index: 1;
  }
  .jajouteUnAnimal {
    position: relative;
    font-size: var(--font-size-xl);
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--orange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10xs) 67px var(--padding-10xs) 62px;
    gap: var(--gap-5xs);
    cursor: pointer;
  }
  .listeanimaux {
    height: 100vh;
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--bleu-middle);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-17xl);
    box-sizing: border-box;
    gap: 28px;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--orange);
    font-family: var(--font-montserrat);
  }
</style>
