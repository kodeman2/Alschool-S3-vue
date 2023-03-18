import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import Errorpage from "../views/Errorpage.vue";
import Repodetails from "../views/Repodetails.vue";
// routes 
const routes = [
  // homepage route
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  // repository details route
  {
    path: "/repositories/:name",
    name: "repositoryDetails",
    component: Repodetails,
    props: true,
  },
  // error route
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
