<template>
  <form @submit.prevent="register" :class="$style.signUpFrame">
    <p>Inscription</p>
    <div :class="$style.frameWithEllipses">
      <div :class="$style.motDePasse">Prénom</div>
      <div :class="$style.passwordInput">
        <input v-model="firstName" id="firstName" :class="$style.rectangleGroup" type="text" placeholder="Robert" required />
      </div>
    </div>
    <div :class="$style.frameWithEllipses">
      <div :class="$style.motDePasse">Nom</div>
      <div :class="$style.passwordInput">
        <input v-model="lastName" id="lastName" :class="$style.rectangleGroup" type="text" placeholder="Roger" required />
      </div>
    </div>
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
        <button type="submit" :class="$style.jeMeConnecte">Je me connecte</button>
      </div>
  </form>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default defineComponent({
    data() {
      return {
        email: '',
        password: '',
        lastName: '',
        firstName: '',
        errorLogin: false,
      }
    },
    name: "SignUpFrame",
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:3030/users/create', {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName
          }, {
            withCredentials: true,
          })

          if (response.status === 201) {
            this.$router.push("/");
          }

        } catch (error) {

          if (error.code == 'ERR_BAD_REQUEST') this.errorLogin = true;
        }

          
      }
    }
  });
</script>
<style module>
  .jeMeConnecte {
    position: relative;
    font-size: var(--font-size-mini);
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
    text-align: left;
  }
  .facebookSvgIcon {
    height: 24px;
    width: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .jeMeConnecteAvecF {
    border-radius: var(--br-xl);
    border: 1.5px solid var(--ivoire);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-6xs) var(--padding-sm) var(--padding-6xs)
      var(--padding-3xs);
    gap: var(--gap-5xs);
    z-index: 2;
  }
  .jeMeConnecte1 {
    position: relative;
    font-size: var(--font-size-mini);
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
    text-align: left;
  }
  .jeMeConnecteAvecGChild {
    height: 24px;
    width: 24px;
    position: relative;
  }
  .jeMeConnecteAvecG {
    border-radius: var(--br-xl);
    border: 1.5px solid var(--ivoire);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-6xs) var(--padding-sm) var(--padding-6xs)
      var(--padding-3xs);
    gap: var(--gap-5xs);
    z-index: 2;
  }
  .jeMeConnecteAvecFParent {
    height: 98px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .phcatBoldIcon {
    position: absolute;
    top: -39px;
    left: 98px;
    width: 102px;
    height: 102px;
    overflow: hidden;
    display: none;
  }
  .ou {
    position: absolute;
    top: 0px;
    left: 139px;
    font-size: var(--font-size-mini);
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
    text-align: center;
    z-index: 2;
  }
  .textLabel {
    position: absolute;
    top: 10px;
    left: 0px;
    border-top: 2px solid var(--ivoire);
    box-sizing: border-box;
    width: 132px;
    height: 2px;
    z-index: 2;
  }
  .textLabel1 {
    position: absolute;
    top: 10px;
    left: 168px;
    border-top: 2px solid var(--ivoire);
    box-sizing: border-box;
    width: 132px;
    height: 2px;
    z-index: 2;
  }
  .lineFrame {
    width: 298px;
    height: 18px;
    position: relative;
  }
  .adresseEMail {
    position: relative;
    font-size: var(--font-size-mini);
    font-family: var(--font-montserrat);
    color: var(--color-white);
    text-align: center;
    z-index: 2;
    font-weight: 600;
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
  .robertrogergmailcom {
    position: relative;
    font-size: var(--font-size-mini);
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--color-darkslateblue-300);
    text-align: center;
    white-space: nowrap;
    z-index: 1;
  }
  .rectangleParent {
    align-self: stretch;
    border-radius: var(--br-smi);
    background-color: var(--ivoire);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-lg) var(--padding-4xs);
    z-index: 2;
  }
  .adresseEMailParent {
    align-self: stretch;
    height: 76px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
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
  .frameItem {
    height: 46px;
    width: 307px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--ivoire);
    display: none;
  }
  
  .forgotPasswordIcon {
    height: 17px;
    width: 24px;
    position: relative;
    z-index: 1;
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

  @media screen and (max-width: 450px) {
    .jeMeConnecteAvecFParent {
      height: 98px;
    }
  }
</style>
