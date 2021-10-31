
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChIXPArasxixlaYEpEcNyTXlEZbxV3b7w",
  authDomain: "builo-tube.firebaseapp.com",
  projectId: "builo-tube",
  storageBucket: "builo-tube.appspot.com",
  messagingSenderId: "327334058483",
  appId: "1:327334058483:web:ea58de9141b30905295a86"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

/// firebase end

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'
const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})
myApp.use(router)
myApp.use(createPinia())

// Assumes you have a <div id="app"></div> in your index.html
router.isReady().then(() => {
  myApp.mount('#app');
});