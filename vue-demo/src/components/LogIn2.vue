<template>
    <div class="bg-light p-5 rounded">
        <h1>Log In 2</h1>
        <form @submit.prevent="logIn()">
            {{ $t('loginFormLabel.username') }} : <input v-model="username" type="input" /> <br /><br />
            {{ $t('loginFormLabel.password') }} : <input v-model="password" type="input" /> <br /><br />
            <input type="submit" value="LogIn" />
        </form>
    </div>
    <div style="padding-top:10px">
        <p>accessToken : {{ userStore.getAccessToken }}</p>
    </div>
    <div>
        <p>accessToken : {{ userStore.user.accessToken }}</p>
    </div>
</template>

<script>

import AuthenService2 from "../services/AuthenService2";
import { useUserStore } from '../stores/UserStroe';


export default {

    setup() {
        const userStore = useUserStore();
        return {
            userStore,
        };
    },

    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        logIn() {
            const data = JSON.stringify({
                username: this.username,
                password: this.password,
            });

            alert('data : ' + data);
            const result = AuthenService2.logIn(data);

            result.then((returnData) => {
                console.log(returnData);
            })





        },
    },
};
</script>

<style>

</style>
