<template>
  <div :class="$style.monCompte">
    <main :class="$style.moncompte">
      <div :class="$style.moncompteChild" />
      <header :class="$style.fRAME">

      </header>

      <section :class="$style.emailInputFrame">
          <div :class="$style.addressText">
            <p>Prise de rendez-vous pour : {{  animal.name }}</p>
            <div v-if="!researchDone">
                <form @submit.prevent="veterinariesByCity">
                    <label for="city">Ville souhaitée:</label>
                    <div :class="$style.enregistrer">
                      <button type="submit" :class="$style.groupDiv">Enregistrer</button>
                    </div>
                  </form>
                </div>
                <div v-if="researchDone">
                <p>Vétérinaires pour la ville : {{ city }}</p>
                <VetoRdvs v-for="veto in veterinaries" :veto="veto"/>
            </div>
          </div>
        </section>
        
      </main>
    </div>
    <div class="flex flex-col items-center mx-auto w-full bg-white max-w-[480px] rounded-[30px]">
      <main>
        <section class="flex flex-col justify-center mt-5 w-full text-xs tracking-wide max-w-[348px] text-zinc-400">
          <div class="flex gap-5 justify-between items-start px-4 py-3 rounded-2xl border-2 border-solid border-blue-950">
            <!--<div class="flex-auto my-auto">Ville, localisation, code postal,...</div>-->
            <input v-model="city" type="text" :class="$style.city"  placeholder="Ville, localisation, code postal" required/>
          <img loading="lazy" src="@\assets\icons\icons8-chercher-25.png" type="submit"/>
        </div>
      </section>
      <section class="flex flex-col px-4 py-4 mt-5 w-full text-xs tracking-wide bg-orange-50 rounded-2xl max-w-[353px]">
        <div class="flex gap-5 justify-between text-base tracking-wider">
          <div class="flex gap-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/896383355b72da0b66ed03da2e45acae0e8f60a96b756d2cc4d14b2ef2b98e19?apiKey=a051d6c5d07543a3a619fe472f9e9550&" alt="Doctor profile" class="shrink-0 aspect-square w-[61px]" />
            <div class="flex flex-col self-start">
              <h2 class="text-blue-950">Dr Bahareh<br />Shacoori-Boittin</h2>
              <p class="mt-3.5 font-medium text-orange-600">Kinesitherapeute</p>
            </div>
          </div>
          <div class="flex gap-1 self-start px-2 py-1.5 whitespace-nowrap bg-sky-100 rounded-xl text-blue-950">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33f3db350cf24468cee9b2dbe0bccdc5eb05e391b84b1c3279aa5980b5dc741?apiKey=a051d6c5d07543a3a619fe472f9e9550&" alt="Location icon" class="shrink-0 w-3.5 aspect-square" />
            <div>12Km</div>
          </div>
        </div>
        <div class="flex gap-2 mt-5 text-blue-800 whitespace-nowrap">
          <button class="justify-center px-3.5 py-2 rounded-xl border border-blue-800 border-solid">9h00</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">11h00</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">13h00</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">15h00</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">17h00</button>
        </div>
        <div class="flex gap-2 mt-2 text-blue-800 whitespace-nowrap">
          <button class="justify-center px-3.5 py-2 rounded-xl border border-blue-800 border-solid">9h30</button>
          <button class="justify-center px-3.5 py-2 rounded-xl border border-blue-800 border-solid">11h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">13h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">15h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">17h30</button>
        </div>
        <div class="flex gap-2 mt-2 text-blue-800 whitespace-nowrap">
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">10h00</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">12h00</button>
          <button class="justify-center px-2.5 py-2 rounded-xl border border-blue-800 border-solid">14h00</button>
          <button class="justify-center px-2.5 py-2 rounded-xl border border-blue-800 border-solid">16h00</button>
          <button class="justify-center px-2.5 py-2 rounded-xl border border-blue-800 border-solid">18h00</button>
        </div>
        <div class="flex gap-2 mt-2 text-blue-800 whitespace-nowrap">
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">10h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">12h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">14h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">16h30</button>
          <button class="justify-center px-3 py-2 rounded-xl border border-blue-800 border-solid">18h30</button>
        </div>
      </section>
    </main>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';
import VetoRdvs from "../components/vetoRdvs.vue";

axios.defaults.withCredentials = true;

    export default defineComponent({
    data() {
        return {
            animal: {
                type: Object
            },
            city: '',
            researchDone: false,
            veterinaries: {
                type: Object
            }
        };
    },
    async beforeMount() {
        await this.getAnimalInformations();
    },
    name: "TakeRdv",
    methods: {
        async veterinariesByCity() {
            const response = await axios.get('http://localhost:3030/veterinaries/city/' + this.city, {
                withCredentials: true,
            });
            this.veterinaries = response.data;
            this.researchDone = true;
            console.log(this.veterinaries);
        },
        async getAnimalInformations() {
            const response = await axios.get('http://localhost:3030/animals/' + this.$route.params.id, {
                withCredentials: true,
            });
            this.animal = response.data;
        },
        onLogoInstanceContainerClick() {
            this.$router.push("/listeanimaux");
        },
        onMenuBurgerContainerClick() {
            this.$router.push("/mb");
        },
    },
    components: { VetoRdvs }
});
</script>

<style module>
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
  border: none;
    width: 150px;
    color: white;
    font-weight: 600;
    font-family: var(--font-montserrat);
}
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
  display: flex;
    justify-content: center;
    margin-top: 20px;
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
  font-size: large;
    font-weight: 600;
    height: fit-content;
}

.city{
  outline: none;
  font-size: 1rem;
  width: 265px;
  font-family: var(--font-montserrat);
    font-weight: 600;
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
  height: auto;
  flex: 1;
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