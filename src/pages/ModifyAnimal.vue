<template>
  <div :class="$style.monCompte">
    <main :class="$style.moncompte">
      <div :class="$style.moncompteChild" />
      <header :class="$style.fRAME">
        <img :class="$style.fRAMEChild" alt="" src="/line-1.svg" />
        <img :class="$style.fRAMEItem" alt="" src="/line-1.svg" />
        <div :class="$style.header">
          <div
            :class="$style.logoInstance"
            @click="onLogoInstanceContainerClick"
          >
            <div :class="$style.logo">
              <img :class="$style.vectorIcon" alt="" src="/vector1.svg" />
              <img :class="$style.groupIcon" alt="" src="/group1.svg" />
            </div>
            <div :class="$style.menuBurger" @click="onMenuBurgerContainerClick">
              <img :class="$style.menuBurgerChild" alt="" src="/line-1.svg" />
              <img :class="$style.menuBurgerItem" alt="" src="/line-1.svg" />
              <div :class="$style.passionneText" />
            </div>
          </div>
        </div>
      </header>
      <section :class="$style.emailInputFrame">
        <form @submit.prevent="createAnimal">
          <div :class="$style.addressText">
            <div :class="$style.addressTextChild" />
            <div :class="$style.passwordInputFrame">
              <div :class="$style.groupFrameParent">
                <div :class="$style.groupFrame">
                  <img
                    :class="$style.groupFrameChild"
                    alt=""
                    src="/group-121@2x.png"
                  />
                </div>
                
              </div>
            </div>
            <div :class="$style.emailframe">
              <div :class="$style.contentframe">
                <p>{{  error }}</p>
                <label :for="$style.emailInput" :class="$style.adresseEMail"
                  >Nom</label
                >
                <input
                v-model="name"
                  :id="$style.emailInput"
                  :class="$style.frameChild"
                  type="text"
                />
                <div :class="$style.passwordtext">
                  <label :for="$style.passwordInput" :class="$style.motDePasse"
                    >Type</label
                  >
                  <input
                    v-model="type"
                    :id="$style.passwordInput"
                    :class="$style.frameItem"
                    type="text"
                  />
                </div>
                <label :for="$style.birthdayInput" :class="$style.ageInputLabel"
                  >Age</label
                >
                <input
                v-model="age"
                  :id="$style.birthdayInput"
                  :class="$style.rectangleDiv"
                  type="number"
                />
              </div>
            </div>
            <div :class="$style.ageFrame">
              <div :class="$style.groupDiv">
                <div :class="$style.frameChild8" />
                <div :class="$style.enregistrer">
                  <button type="submit">Enregistrer</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nomgroup from "../components/Nomgroup.vue";
import axios, { AxiosError } from 'axios';
axios.defaults.withCredentials = true;

export default defineComponent({
  name: "ModifyAnimal",
  data() {
    return {
      error: '',
      name: '',
      age: 0,
      type: '',
    }
  },
  components: { Nomgroup },
  async beforeMount() {
    await this.getAnimal();
  },
  methods: {
    async createAnimal() {
      try {
          const response = await axios.patch('http://localhost:3030/animals/' + this.$route.params.id, {
            name: this.name,
            age: this.age,
            type: this.type
          }, {
            withCredentials: true,
          })

          console.log(response.status)

          if (response.status === 200) {
            this.$router.push("/listeanimaux");
          }
        } catch (error: any) {
          console.log(error.response.data);
          this.error = error.response.data.message[0];
        }
    },
    async getAnimal() {
      const animal = await axios.get('http://localhost:3030/animals/' + this.$route.params.id,{
        withCredentials: true,
      })

      console.log(animal.data);

      this.name = animal.data.name;
      this.age = animal.data.age;
      this.type = animal.data.type;

      console.log(this.name);
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
<style module>
.checkboxcontainer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ageInputLabel {
  font-weight: 600;
  position: relative;
  z-index: 1;
  font-family: var(--font-montserrat);
}
.moncompteChild {
  width: 40px;
  height: 4px;
  position: relative;
  border-top: 4px solid var(--bleu-nuit);
  box-sizing: border-box;
  display: none;
}
.fRAMEChild {
  position: absolute;
  top: 30px;
  left: 347px;
  border-radius: var(--br-3xs);
  width: 21px;
  height: 4px;
  object-fit: contain;
}
.fRAMEItem {
  position: absolute;
  top: 54px;
  left: 347px;
  border-radius: var(--br-3xs);
  width: 21px;
  height: 4px;
  object-fit: contain;
}
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
  gap: var(--gap-3xs);
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
.passionneText {
  position: absolute;
  height: 16.67%;
  width: 111.11%;
  top: 33.33%;
  right: -5.56%;
  bottom: 50%;
  left: -5.56%;
  border-top: 4px solid var(--bleu-nuit);
  box-sizing: border-box;
}
.menuBurger {
  height: 24px;
  width: 36px;
  position: relative;
  cursor: pointer;
}
.logoInstance {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  cursor: pointer;
}
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
  background-color: var(--bleu-clair);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xl) var(--padding-lg);
  box-sizing: border-box;
  height: 100%;
  max-width: 100%;
  z-index: 1;
}
.fRAME {
  align-self: stretch;
  height: 85px;
  position: sticky;
  top: 0;
  z-index: 99;
  max-width: 100%;
}
.addressTextChild {
  width: 351px;
  height: 614px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--ivoire);
  display: none;
  max-width: 100%;
}
.groupFrameChild {
  width: 65px;
  height: 65px;
  position: relative;
  object-fit: cover;
  z-index: 1;
}
.groupFrame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
}
.chris {
  margin: 0;
  height: 41px;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
}
.temoinText {
  width: 97px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
}
.passionnDanimaux {
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 600;
  z-index: 1;
}
.nomText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.groupFrameParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
}
.passwordInputFrame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs);
}
.adresseEMail {
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-family: var(--font-montserrat);
}
.frameChild {
  height: 46px;
  width: 307px;
  position: relative;
  border-radius: var(--br-smi);
  background-color: var(--bleu-nuit);
  border: none;
  outline: none;
  color: var(--ivoire);
  font-weight: 600;
  text-align: center;
}
.robertrogergmailcom {
  position: relative;
  font-weight: 600;
  white-space: nowrap;
  z-index: 1;
}
.rectangleParent {
  align-self: stretch;
  border-radius: var(--br-smi);
  background-color: var(--bleu-nuit);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-lg) var(--padding-4xs);
  z-index: 1;
  color: var(--color-oldlace-100);
  font-family: var(--font-montserrat);
}
.contentframe {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  position: relative;
}
.motDePasse {
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-family: var(--font-montserrat);
}

.checkboxLabel {
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-family: var(--font-montserrat);
  width: 24px;
  height: 24px;
}
.frameItem {
  height: 46px;
  width: 307px;
  position: relative;
  border-radius: var(--br-smi);
  background-color: var(--bleu-nuit);
  border: none;
  outline: none;
  text-align: center;
  color: var(--ivoire);
}
.frameInner {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--bleu-clair);
}
.ellipseDiv {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild1 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild2 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild3 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild4 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild5 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild6 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.frameChild7 {
  height: 12px;
  width: 12px;
  position: relative;
  border-radius: 50%;
  background-color: var(--ivoire);
}
.ellipseParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  opacity: 0;
  z-index: 1;
}
.vectorIcon1 {
  height: 17px;
  width: 24px;
  position: relative;
  z-index: 1;
}
.rectangleGroup {
  align-self: stretch;
  border-radius: var(--br-smi);
  background-color: var(--bleu-nuit);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-lg) var(--padding-mini);
  gap: var(--gap-xl);
  z-index: 1;
  height: 15px;
}
.passwordtext {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
}
.age {
  position: relative;
  z-index: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  margin-top: 30px;
  margin-left: 20px;
}
.rectangleDiv {
  height: 46px;
  width: 130px;
  position: relative;
  border-radius: var(--br-smi);
  background-color: var(--bleu-nuit);
  z-index: 1;
  border: none;
  font-weight: 600;
  font-family: var(--font-montserrat);
  color: var(--ivoire);
  text-align: center;
  border: none;
  outline: none;
}
.div {
  position: relative;
  font-weight: 600;
  white-space: nowrap;
  z-index: 2;
}
.rectangleContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.emailframeInner {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg);
  color: var(--color-oldlace-100);
  font-family: var(--font-montserrat);
}
.emailframe {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px var(--padding-8xs);
  gap: var(--gap-lgi);
  text-align: center;
  font-size: var(--font-size-mini);
}
.lastnameframe {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs);
}
.frameChild8 {
  height: 53px;
  width: 307px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--orange);
  display: none;
}
.enregistrer {
  position: relative;
  font-size: var(--font-size-lgi);
  font-family: var(--font-montserrat);
  font-weight: 600;
  color: var(--color-white);
  text-align: center;
  z-index: 1;
}
.groupDiv {
  border-radius: var(--br-11xl);
  background-color: var(--orange);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-51xl) var(--padding-mid)
    var(--padding-52xl);
  white-space: nowrap;
  z-index: 1;
}
.ageFrame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-2xs) 0px 0px;
}
.firstnameframe {
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lgi);
}
.addressText {
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-mini);
  background-color: var(--ivoire);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-2xs) var(--padding-lgi)
    var(--padding-3xl);
  box-sizing: border-box;
  gap: var(--gap-14xl);
  max-width: 100%;
}
.emailInputFrame {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl) 0px var(--padding-mid);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--bleu-middle);
  font-family: var(--font-montserrat);
}
.moncompte {
  height: 100vh;
  flex: 1;
  border-radius: var(--br-11xl);
  background-color: var(--bleu-nuit);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 115px;
  box-sizing: border-box;
  gap: var(--gap-11xl);
  max-width: 100%;
}
.monCompte {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
}

@media screen and (max-width: 675px) {
  .moncompte {
    padding-bottom: 75px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 450px) {
  .groupDiv {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .addressText {
    gap: var(--gap-14xl);
  }
}
</style>
