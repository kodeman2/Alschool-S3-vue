import { createApp } from "vue";
import "./style.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from "./router";
import App from "./App.vue";
AOS.init({
 useClassNames: true,
 initClassName: false,
 animatedClassName: 'animated',
});



createApp(App).use(router).mount("#app");
