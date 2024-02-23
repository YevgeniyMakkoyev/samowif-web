import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import SolanaWallets from "solana-wallets-vue";
import "solana-wallets-vue/styles.css";

const walletOptions = {
    wallets: [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ],
    autoConnect: false,
};

const app = createApp(App)
app.use(SolanaWallets, walletOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')