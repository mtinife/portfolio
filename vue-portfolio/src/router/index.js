import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";

Vue.use(createRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Micah M Tinife | Software Developer",
      metaTag: [
        {
          name: "description",
          content: "The home page to Micah Tinife's portfolio",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
