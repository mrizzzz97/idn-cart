import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        register: 'register.html',
        shop: 'shop.html',
        checkout: 'checkout.html',
        wishlist: 'wishlist.html',
        account: 'account.html',
        view: 'view.html',
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})
