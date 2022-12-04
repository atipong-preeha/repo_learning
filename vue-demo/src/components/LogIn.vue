<template>
    
    <div class="bg-light p-5 rounded">
        <h1>Log In</h1>
        <form @submit.prevent="handleLogin()">
            {{ $t('loginFormLabel.username') }} : <input v-model="username" type="input" /> <br /><br />
            {{ $t('loginFormLabel.password') }} : <input v-model="password" type="input" /> <br /><br />
            <input type="submit" :value="$t('buttonLogin.login')" />&nbsp;&nbsp;{{ $t('buttonLogin.login') }}
            <input type="button" :value="$t('buttonLogin.logout')" @click="handleLogOut()" />
        </form>
        <br />
        <div v-if="error.state" class="alert alert-danger">
            {{ error.message }}
        </div>
        <br />
        <div>
            <p>accessToken : {{ userStore.getAccessToken }}</p>
        </div>
        <br />
        <div>
            <p>accessToken : {{ userStore.user.accessToken }}</p>
        </div>
        
    </div>
</template>

<script>
import AuthenService from '@/services/AuthenService';
import { useUserStore } from '@/stores/UserStroe';
//import { useI18n } from 'vue-i18n';



export default {


    setup() {
        const userStore = useUserStore();
        // const { t } = useI18n();

        return {
            userStore,
            //t
        };
    },

    data() {
        return {
            username: '',
            password: '',
            error: {
                state: false,
                message: ''
            },
        };
    },
    methods: {
        handleLogin() {
            const data = {
                username: this.username,
                password: this.password,
            }

            AuthenService.logIn(data)
                .then((response) => {

                    // if success
                    if (response.status === 200) {
                        const data = response.data.body;
                        console.log('success !!!')
                        console.log('accessToken : ' + data.accessToken);
                        // add to state
                        this.userStore.setUser(data);
                        this.userStore.setAccessToken(data.accessToken);
                        this.error.state = false;
                        this.error.message = '';
                    }
                })
                .catch((error) => {
                    console.log('error !!!');
                    console.log(error);
                    this.error.state = true;
                    this.error.message = error.response.data.body.message;
                });
        },
        handleLogOut() {
            this.userStore.removeAccToken();
        },
    },
};
</script>

<style>

</style>
