<template>
  <main class="flex flex items-center justify-center flex-col items-center pb-20 mx-auto w-full bg-white max-w-[480px] rounded-[30px]">
    <AnimalCard v-for="animal in animals" :animal="animal"/>
    <button class="flex gap-3.5 px-16 mt-4 w-full font-semibold text-orange-600 bg-white rounded-2xl border-orange-600 border-solid border-[3px] max-w-[351px] flex items-center justify-center" 
    @click="onGroupContainerClick" id="open-modal">
      <span class="self-center text-4xl">+</span>
      <span class="flex-auto text-xl">J'ajoute un animal</span>
    </button>
    <div class="z-10 fixed inset-0 flex items-center justify-center"  v-show="isModalOpen" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class= "bg-[#ff6100] mx-1 max-w-sm rounded-lg shadow-xl overflow-hidden" role="document" id="ajoutAnimal">
    <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div class="flex gap-5 justify-between text-6xl text-white">
            <div class="justify-center items-start py-3 px-7 rounded-full bg-blue-950 h-[101px] w-[101px]">+</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d737a71881011970ee1e51269944c0b77b6a52ac0bdff6c493ca23e0cd45761?apiKey=a051d6c5d07543a3a619fe472f9e9550&" alt="Decorative image" class="shrink-0 self-end mt-14 aspect-[2.33] w-[99px]" />
          </div>
          <form>
            <label for="prenom" class="sr-only">Prénom</label>
            <input v-model="name" id="prenom" type="text" class="w-80 justify-center items-start px-6 py-5 mt-5 bg-orange-50 rounded-xl text-blue-950" placeholder="Prénom" />
            <label for="espece" class="sr-only">Espèce</label>
            <input v-model="type" id="espece" type="text" class="w-80 justify-center items-start px-6 py-4 mt-2.5 bg-orange-50 rounded-xl" placeholder="Espèce" />
            <label for="race" class="sr-only">Race</label> 
            <input v-model="race" id="race" type="text" class="w-80 justify-center items-start px-6 py-5 mt-2.5 bg-orange-50 rounded-xl" placeholder="Race" />
            <label for="anniversaire" class="sr-only">Anniversaire</label>
            <input v-model="age" id="anniversaire" type="text" class="w-80 justify-center items-start px-6 py-4 mt-2.5 bg-orange-50 rounded-xl" placeholder="Age" />
            <button type="submit" @click="closeModal" class="w-80 justify-center items-center px-16 py-4 mt-5 text-center text-orange-50 rounded-xl bg-blue-950">
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
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
        error: '',
      name: '',
      age: '',
      type: '',
      race: '',
        isModalOpen: false,
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
    components: {AnimalCard},
    methods: {
      async createAnimal() {
      try {
          const response = await axios.post('http://localhost:3030/animals/create', {
            name: this.name,
            age: this.age,
            type: this.type
          }, {
            withCredentials: true,
          })

          if (response.status === 201) {
            this.$router.push("/listeanimaux");
          }
        } catch (error: any) {
          console.log(error.response.data);
          this.error = error.response.data.message[0];
        }
    },
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
      this.isModalOpen = !this.isModalOpen; // Modifiez cette ligne pour basculer la modal
    },
    // Vous pourriez avoir besoin d'une méthode pour fermer la modal
    closeModal() {
      this.isModalOpen = false;
    }
    },
  });
</script>
