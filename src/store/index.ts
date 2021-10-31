import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (s) => s.count * 2 
  },
  actions: {
    reset() {
      this.count = 0
    },
    inc() {
      this.count += 1
    }
  }
})