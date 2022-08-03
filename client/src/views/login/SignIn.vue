<template>
    <div class="connexion-body">
        <div class="image">
            <img src="@/assets/images/background-people.png" alt="People">
        </div>
        <div class="content">
            <main>
            <h1>Sign In</h1>
            <form>
                <input type="email" placeholder="Mail adress" required>
                <div class="input-icon-box">
                    <input type="password" placeholder="Password" required>
                    <VisibilityOnIcon class="password-icon" />
                    <VisibilityOffIcon class="password-icon hide" />
                </div>
                <button class="btn-login">Login</button>
            </form>
            </main>
            <footer>
                <router-link to="#">Forgot password</router-link>
                <router-link to="/signup">Create new account</router-link>
            </footer>
        </div>
    </div>
</template>

<script>
import VisibilityOnIcon from "vue-material-design-icons/Eye.vue"
import VisibilityOffIcon from "vue-material-design-icons/EyeOff.vue"

export default {
    setup () {
        

        return {}
    },
    components: {
        VisibilityOnIcon,
        VisibilityOffIcon
    }
}
</script>

<style lang="scss" >
   @import "./login.scss";
</style>