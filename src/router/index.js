import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import Errorpage from "../views/Errorpage.vue";
import Repodetails from "../views/Repodetails.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/repositories/:name",
    name: "repositoryDetails",
    component: Repodetails,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Errorpage",
    component: Errorpage,
  },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;
