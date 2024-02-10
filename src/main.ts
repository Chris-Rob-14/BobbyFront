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
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/creation",
    name: "Creation",
    component: Creation,
  },
  {
    path: "/listeanimaux",
    name: "ListeAnimaux",
    component: ListeAnimaux,
  },
  {
    path: "/traitement",
    name: "Traitement",
    component: Traitement,
  },
  {
    path: "/priserdv",
    name: "PriseRDV",
    component: PriseRDV,
  },
  {
    path: "/documents",
    name: "Documents",
    component: Documents,
  },
  {
    path: "/profil-animal/:id",
    name: "ProfilAnimal",
    component: ProfilAnimal,
  },
  {
    path: "/createAnimal",
    name: "addAnimal",
    component: AjouterModifierAnimal,
  },
  {
    path: "/updateanimal/:id",
    name: "ModifyAnimal",
    component: ModifyAnimal,
  },
  {
    path: "/mb",
    name: "MB",
    component: MB,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/article-blog",
    name: "ArticleBlog",
    component: ArticleBlog,
  },
  {
    path: "/mon-compte",
    name: "MonCompte",
    component: MonCompte,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "Bobby";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
