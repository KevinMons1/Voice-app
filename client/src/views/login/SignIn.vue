<template>
    <div class="connexion-body">
        <HeaderTitle />
        <div class="image">
            <img src="@/assets/images/background-people.png" alt="People">
        </div>
        <div class="wrapper">
            <div class="content">
                <main>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-box">
                            <ErrorMessageForm v-if="false" message="" type="warning" />
                            <input type="email" placeholder="Mail adress" v-bind:class="{'warning': false}" required>
                        </div>
                        <div class="input-box">
                            <ErrorMessageForm v-if="false" message="" type="warning" />
                            <div class="input-icon-box">
                                <input type="password" placeholder="Password" v-bind:class="{'warning': false}" required>
                                <VisibilityOnIcon class="password-icon" />
                                <VisibilityOffIcon class="password-icon hide" /> 
                            </div>
                        </div>
                        <button class="btn-accept">Login</button>
                    </form>
                </main>
                <footer>
                    <router-link class="password-forget" to="#">Forgot password</router-link>
                    <router-link class="other-choice" to="/signup">Create new account</router-link>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

import VisibilityOnIcon from "vue-material-design-icons/Eye.vue"
import VisibilityOffIcon from "vue-material-design-icons/EyeOff.vue"

import ErrorMessageForm from "@/components/services/ErrorMessageForm.vue"
import HeaderTitle from "@/components/header/HeaderTitle.vue"


export default {
    setup () {
        const mailAdress = ref(false)
        const password = ref(false)

        return {
            mailAdress,
            password
        }
    },
    components: {
        VisibilityOnIcon,
        VisibilityOffIcon,
        ErrorMessageForm,
        HeaderTitle
    }
}
</script>

<style lang="scss" >
   @import "./login.scss";
</style>