<template>
  <div class="flex flex-col justify-center mx-auto w-full max-w-[480px]">
    <div class="flex flex-col pb-20 w-full bg-white rounded-[30px]">
      <main class="flex flex-col justify-center self-center mt-5 mb-14 w-full max-w-[351px]">
        <section class="flex flex-col px-6 pt-5 pb-9 w-full bg-orange-50 rounded-2xl">
          <div class="flex gap-2.5 text-3xl font-semibold text-blue-800 whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a658a266964ef1e80bc06f8181efec202ff51ff9b5a9726d818d9d44702c9d17?apiKey=a051d6c5d07543a3a619fe472f9e9550&" alt="User Avatar" class="shrink-0 aspect-square w-[65px]" />
            <h1 class="flex-auto my-auto">Chris</h1>
          </div>
          <form class="flex flex-col mt-8 text-base font-semibold text-center">
            <label for="prenom" class="text-blue-800">Prénom</label>
            <input id="prenom" type="prenom" class="outline-none justify-center items-start px-5 py-4 mt-1.5 text-orange-50 whitespace-nowrap bg-orange-600 rounded-2xl" placeholder="Chris" />
          </form>
          <form class="flex flex-col mt-8 text-base font-semibold text-center">
            <label for="nom" class="text-blue-800">Nom</label>
            <input id="nom" type="nom" class="outline-none justify-center items-start px-5 py-4 mt-1.5 text-orange-50 whitespace-nowrap bg-orange-600 rounded-2xl" placeholder="Robine" />
          </form>
          <form class="flex flex-col mt-5 text-base font-semibold text-center text-orange-50 whitespace-nowrap">
            <label for="mail" class="text-base font-semibold text-center text-blue-800">Adresse mail</label>
            <input v-model="email" id="mail" type="mail" class="outline-none justify-center items-start px-5 py-4 bg-blue-800 rounded-2xl" placeholder="Robert.roger@gmail.com"></input>
          </form>
          <form class="flex flex-col mt-5 text-base font-semibold text-center text-blue-800">
            <label for="password" class="block">Mot de passe</label>
            <input id="password" type="outline-none password" class="flex flex-col justify-center items-start px-4 py-4 mt-1.5 rounded-2xl bg-blue-950" placeholder="Mot de passe" />
          </form>
          <form class="flex flex-col mt-5 text-base font-semibold text-center text-blue-800">
            <label for="password2" class="block">Mot de passe</label>
            <input id="password2" type="password" class="outline-none flex flex-col justify-center items-start px-4 py-4 mt-1.5 rounded-2xl bg-blue-950" placeholder="Mot de passe" />
          </form>
        </section>
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Nomgroup from "../components/Nomgroup.vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      user: {
        type: Object
      },
      email: ''
    }
  },
  async beforeMount() {
    await this.getMe();
    console.log(this.user);
    console.log(this.email)
  },
  name: "MonCompte",
  components: { Nomgroup },
  methods: {
    async getMe() {
      const response = await axios.get('http://localhost:3030/auth/status', {
        withCredentials: true,
      });

      this.user = response.data;
      this.email = response.data.email;
    },
    onLogoInstanceContainerClick() {
      this.$router.push("/listeanimaux");
    },
    onMenuBurgerContainerClick() {
      this.$router.push("/mb");
    },
  },
});
</script>
