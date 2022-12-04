import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  // state
  state: () => {
    return {
      user: {},
      fullName: '',
      accessToken: '',
    };
  },
  // actions
  actions: {
    setUser(userData) {
      this.user = userData;
    },
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
      localStorage.setItem("jwtToken", JSON.stringify(accessToken));
    },
    removeAccToken() {
      this.accessToken = "";
      localStorage.removeItem("jwtToken");
    },
  },
  // getters
  getters: {
    getFullName(state) {
      return state.user ? state.user.firstname + " " + state.user.lastname : "";
    },
    getAccessToken(state) {
      return  state.accessToken;
    },
  },
});
