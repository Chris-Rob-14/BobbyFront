<!---<template>
  <div class="BurgerMenu">
    <button @click="isOpen = !isOpen" class="focus:outline-none">
     <svg
        v-if="!isOpen"
        width="37"
        height="29"
        viewBox="0 0 37 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.4791 2.5L13.4791 2.5"
          stroke="#0A2864"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M34.4791 26.5L13.4791 26.5"
          stroke="#0A2864"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <line
          x1="34.4791"
          y1="14.5"
          x2="2.47906"
          y2="14.5"
          stroke="#0A2864"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 37 29"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      @/assets/burgermenu/icons8-menu.gif
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl"
    >
      <main :class="$style.mbInner">
        <section :class="$style.vectorParent">
          <div :class="$style.vector">
            <div :class="$style.text">
              <img :class="$style.frameIcon" alt="" src="/vector3.svg" />
              <div :class="$style.mesAnimaux" @click="onMesAnimauxTextClick">
                Mes animaux
              </div>
            </div>
          </div>
          <div :class="$style.frameParent">
            <div :class="$style.vectorGroup">
              <div :class="$style.vector1" />
              <div :class="$style.text1">
                <div :class="$style.text2">
                  <img :class="$style.textIcon" alt="" src="/vector-15.svg" />
                  <div :class="$style.monCalendrier">Mon calendrier</div>
                </div>
              </div>
              <div :class="$style.vector2" />
              <div :class="$style.calendarFrame">
                <img
                  :class="$style.blogFrameIcon"
                  alt=""
                  src="/vector-23.svg"
                  @click="onBlogFrameIconClick"
                />
                <div :class="$style.blog" @click="onBlogTextClick">Blog</div>
              </div>
              <div :class="$style.threeLineFrame">
                <div :class="$style.annuaireFrame">
                  <div :class="$style.lineFrame" />
                  <div :class="$style.monCalendrierFrame">
                    <div :class="$style.monCompteFrameParent">
                      <img
                        :class="$style.monCompteFrame"
                        alt=""
                        src="/vector-31.svg"
                      />
                      <div :class="$style.annuaire">Annuaire</div>
                    </div>
                  </div>
                  <div :class="$style.lineFrame1" />
                </div>
                <div :class="$style.followBobbyText">
                  <div :class="$style.icroundaccountcircleFrame">
                    <img
                      :class="$style.icroundAccountCircleIcon"
                      alt=""
                      src="/icroundaccountcircle.svg"
                    />
                    <div
                      :class="$style.monCompte"
                      @click="onMonCompteTextClick"
                    >
                      Mon compte
                    </div>
                  </div>
                </div>
              </div>
              <div :class="$style.vector3" />
            </div>
            <div :class="$style.facebookBrandLogo">
              <div :class="$style.socialMediaFollowText">
                <div :class="$style.suivezBobbySurContainer">
                  <p :class="$style.suivezBobbySur">Suivez Bobby sur les</p>
                  <p :class="$style.rseauxSociaux">réseaux sociaux !</p>
                </div>
                <div :class="$style.brandicoFacebookrectVectorWrapper">
                  <div :class="$style.brandicoFacebookrectVector">
                    <img
                      :class="$style.suivezBobbyText"
                      alt=""
                      src="/vector-42.svg"
                    />
                    <img
                      :class="$style.brandicofacebookRectIcon"
                      alt=""
                      src="/brandicofacebookrect.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
-->

<template>
  <main class="flex flex-col items-center pb-14 mx-auto w-full bg-white max-w-[480px] rounded-[30px]" @click="$emit('onMenuBurgerContainerClick')">
    <nav class="flex flex-col pb-10 mt-12 w-full text-xl font-semibold max-w-[312px] text-blue-950">
      <router-link to="/listeanimaux" class="flex gap-5">
          <img loading="lazy" src="@\assets\menu\icons8-empreinte-de-chat-24.png" alt="Mes animaux icon" class="shrink-0 w-7 aspect-square fill-blue-800" />
        <span class="flex-auto my-auto">Mes animaux</span>
        </router-link>
        <router-link to="/" class="flex gap-5 mt-20">
          <img loading="lazy" src="@\assets\menu\icons8-calendrier-25.png" alt="Calendrier icon" class="shrink-0 w-7 aspect-square fill-blue-800" />
        <span class="flex-auto my-auto">Mes calendrier</span>
        </router-link>
        <router-link to="/Blog" class="flex gap-5 mt-20">
          <img loading="lazy" src="@\assets\menu\icons8-blog-25.png" alt="Blog icon" class="shrink-0 w-7 aspect-square fill-blue-800" />
        <span class="flex-auto my-auto">Blog</span>
        </router-link>
        <router-link to="/" class="flex gap-5 mt-20">
          <img loading="lazy" src="@\assets\menu\icons8-téléphone-qui-sonne-25.png" alt="Annuaire icon" class="shrink-0 w-7 aspect-square fill-blue-800" />
        <span class="flex-auto my-auto">Annuaire</span>
        </router-link>
        <router-link to="/Mon-compte" class="flex gap-5 mt-20">
          <img loading="lazy" src="@\assets\menu\icons8-avatar-25.png" alt="Mon compte icon" class="shrink-0 w-7 aspect-square fill-blue-800" />
        <span class="flex-auto my-auto">Mon compte</span>
        </router-link>
      <!--<a href="#" class="flex gap-5 mt-20">
        <img loading="lazy" src="@\assets\menu\icons8-avatar-25.png" alt="Mon compte icon" class="shrink-0 aspect-square w-[30px]" />
        <span class="flex-auto my-auto">Mon compte</span>
      </a>-->
    </nav>
    <section class="flex flex-col justify-center px-5 mt-12 max-w-full w-[210px]">
      <h2 class="text-xl font-semibold text-center text-orange-600">
        Suivez Bobby sur les<br />réseaux sociaux !
      </h2>
      <div class="flex gap-5 justify-between self-center mt-8">
        <router-link to="/">
          <img loading="lazy" src="@\assets\menu\icons8-instagram-50.png" alt="Instagram icon" class="shrink-0 aspect-square fill-blue-800 w-[51px]" />
        </router-link>
        <router-link to="/">
          <img loading="lazy" src="@\assets\menu\icons8-facebook-50.png" alt="Social media icon 2" class="shrink-0 aspect-square w-[51px]" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MB',
  emits: ["onMenuBurgerContainerClick"],
});
</script>