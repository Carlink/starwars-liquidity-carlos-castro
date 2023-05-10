import { defineStore } from 'pinia';

export const useStoreToast = defineStore('toast', {
  state: () => {
    return {
      toast: null
    };
  }
});
