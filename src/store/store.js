import { defineStore } from "pinia";

export const userStore  = defineStore('ids', {

    state: () => ({

        userToken: null,

        userId: null,

    }),

    getters: {

        getToken: (state) => state.userToken,

        getUserId: (state) => state.userId,

    },

    actions: {

        setUserToken(userToken) {

            this.userToken = userToken;

        },

        setUserId(userId) {

            this.userId = userId;

        },
              
    },

    persist: true,  

});