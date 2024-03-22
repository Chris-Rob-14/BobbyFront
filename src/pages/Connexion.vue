<template>
  <div class="flex flex-col justify-center mx-auto w-full bg-white shadow-sm max-w-[480px] rounded-[30px]">
    <header class="flex flex-col items-center px-6 py-16 w-full bg-blue-800">
      <img loading="lazy" src="@/assets/logo/Logo.png" alt="Logo" class="aspect-[5.56] w-[340px]" />
      <div class="mt-16 w-64 text-base font-semibold text-center text-orange-50 underline">
        <span class="leading-5">Je ne suis pas encore inscrit ?</span>
        <router-link to="/Creation">
          <span class="leading-5"> Créer mon compte</span>
        </router-link>
      </div>
      <button class="flex gap-2 px-3 py-2 mt-12 max-w-full text-base font-semibold text-orange-50 whitespace-nowrap rounded-3xl border-2 border-orange-50 border-solid w-[219px]">
        <span class="grow my-auto">Je me connecte avec</span>
        <img loading="lazy" src="@/assets/icons/facebook.png" alt="Facebook logo" class="shrink-0 w-6 aspect-square" />
      </button>
      <button class="flex gap-2 px-3 py-2 mt-4 max-w-full text-base font-semibold text-orange-50 whitespace-nowrap rounded-3xl border-2 border-orange-50 border-solid w-[219px]">
        <span class="grow my-auto">Je me connecte avec</span>
        <img loading="lazy" src="@/assets/icons/google.png" alt="Google logo" class="shrink-0 w-6 aspect-square" />
      </button>
      <div class="flex gap-2.5 items-center my-16 text-base font-semibold text-center text-orange-50 whitespace-nowrap">
        <div class="shrink-0 self-stretch my-auto h-0.5 bg-orange-50 border-2 border-orange-50 border-solid w-[130px]"></div>
        <span class="self-stretch">ou</span>
        <div class="shrink-0 self-stretch my-auto h-0.5 bg-orange-50 border-2 border-orange-50 border-solid w-[130px]"></div>
      </div>
      <form @submit.prevent="login" :class="$style.signUpFrame">
    <div :class="$style.frameWithEllipses">
      <div :class="$style.motDePasse">Adresse e-mail</div>
      <div :class="$style.passwordInput">
        <input v-model="email" id="email" :class="$style.rectangleGroup" type="email" placeholder="Robert.roger@gmail.com" required />
        </div>
      </div>
    <div :class="$style.frameWithEllipses">
      <div :class="$style.motDePasse">Mot de passe</div>
      <div :class="$style.passwordInput">
        <input v-model="password" id="password" :class="$style.rectangleGroup" type="password" placeholder="Mot de passe" required />
        </div>
        <div :class="$style.motDePasse1">Mot de passe oublié ?</div>
      </div>
      <div v-if="errorLogin">Erreur dans votre saisie</div>
      <div :class="$style.boutonSeConnecter">
        <div :class="$style.boutonSeConnecterChild" />
        <button type="submit"  :class="$style.seConnecter">Je me connecte</button>
      </div>
  </form>
    </header>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default defineComponent({
    name: 'Connexion',
    data() {
      return {
        email: '',
        password: '',
        errorLogin: false,
      }
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3030/auth/login', {
            email: this.email,
            password: this.password
          }, {
            withCredentials: true,
          })
          if (response.status === 201) {
            this.$router.push("/listeanimaux");
          }
        } catch (error) {
          if (error.code == 'ERR_BAD_REQUEST') this.errorLogin = true;
        }
      }
    }
  });
</script>


<style module>
.seConnecter{
  width: 250px;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: #FF6100 !important;
    text-align: center;
    margin-top: 30px;
    position: relative;
    font-size: var(--font-size-mini);
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
}
 
  .frameChild {
    width: 307px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--ivoire);
  border: none;
  font-size: var(--font-size-mini);
  color: var(--color-darkslateblue-300);
  z-index: 1;
  }

  .motDePasse {
    position: relative;
    font-size: var(--font-size-mini);
    font-family: var(--font-montserrat);
    color: var(--color-white);
    text-align: center;
    z-index: 2;
    font-weight: 600;
  }
  
  .rectangleGroup {
    align-self: stretch;
    border-radius: var(--br-smi);
    background-color: var(--ivoire);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-sm) var(--padding-lg) var(--padding-mini);
    gap: var(--gap-xl);
    z-index: 2;
    border: none;
    outline: none;
  }
  .motDePasse1 {
    position: relative;
    font-size: var(--font-size-mini);
    text-decoration: underline;
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
    text-align: center;
    z-index: 2;
  }
  .passwordInput {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .frameWithEllipses {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .signUpFrame {
    margin: 0;
    align-self: stretch;
    height: 415px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-mini);
  }

  @media screen and (max-width: 675px) {
    .connexion1 {
      padding-top: var(--padding-12xl);
      padding-bottom: var(--padding-25xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .logo {
      flex-wrap: wrap;
    }

    .boutonSeConnecter {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
