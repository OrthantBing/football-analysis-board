import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import formationConstPlugin from "./store/constants/formations";

const app = createApp(App)
app.use(router);
app.use(formationConstPlugin);

app.mount('#app')
