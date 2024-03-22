import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Connexion from "./pages/Connexion.vue";
import Creation from "./pages/Creation.vue";
import ListeAnimaux from "./pages/ListeAnimaux.vue";
import Traitement from "./pages/Traitement.vue";
import PriseRDV from "./pages/PriseRDV.vue";
import Documents from "./pages/Documents.vue";
import ProfilAnimal from "./pages/ProfilAnimal.vue";
import AjouterModifierAnimal from "./pages/AjouterModifierAnimal.vue";
import MB from "./pages/MB.vue";
import Blog from "./pages/Blog.vue";
import ArticleBlog from "./pages/ArticleBlog.vue";
import MonCompte from "./pages/MonCompte.vue";
import ModifyAnimal from "./pages/ModifyAnimal.vue";
import Rdv from "./pages/Rdv.vue";
import "./global.css";
import './index.css';


interface Route {
  path: string;
  name: string;
  component: any;
  meta: {
    showHeader: boolean;
  };
  }


const routes: Route[] = [
  {
    path: "/",
    name: "Connexion",
    component: Connexion,
    meta: { showHeader: false } as { showHeader: boolean },
  },
  {
    path: '/rdv/animal/:id',
    name: "TakeRdv",
    component: Rdv,
    meta: { showHeader: true } as { showHeader: boolean },
  },
  {
    path: "/creation",
    name: "Creation",
    component: Creation,
    meta: { showHeader: false },
  },
  {
    path: "/listeanimaux",
    name: "ListeAnimaux",
    component: ListeAnimaux,
    meta: { showHeader: true },
  },
  {
    path: "/traitement",
    name: "Traitement",
    component: Traitement,
    meta: { showHeader: true },
  },
  {
    path: "/priserdv",
    name: "PriseRDV",
    component: PriseRDV,
    meta: { showHeader: true },
  },
  {
    path: "/documents",
    name: "Documents",
    component: Documents,
    meta: { showHeader: true },
  },
  {
    path: "/profil-animal/:id",
    name: "ProfilAnimal",
    component: ProfilAnimal,
    meta: { showHeader: true },
  },
  {
    path: "/createAnimal",
    name: "addAnimal",
    component: AjouterModifierAnimal,
    meta: { showHeader: true },
  },
  {
    path: "/updateanimal/:id",
    name: "ModifyAnimal",
    component: ModifyAnimal,
    meta: { showHeader: true },
  },
  {
    path: "/mb",
    name: "MB",
    component: MB,
    meta: { showHeader: true },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { showHeader: true },
  },
  {
    path: "/article-blog",
    name: "ArticleBlog",
    component: ArticleBlog,
    meta: { showHeader: true },
  },
  {
    path: "/mon-compte",
    name: "MonCompte",
    component: MonCompte,
    meta: { showHeader: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title.toString() : "Bobby";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description.toString());
  }
  next();
});

const addMetaTag = (value: string) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = document.createElement("meta");
    element.setAttribute("name", "description");
    element.setAttribute("content", value);
    document.head.appendChild(element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
