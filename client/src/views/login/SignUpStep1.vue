<template>
    <div class="content">
        <main>
            <h1>Sign Up</h1>
            <form @submit.prevent="handleNext">
                <div :class="error.cause === 'firstName' ? 'input-box input-error' : 'input-box'">
                    <ErrorMessageForm v-if="error.cause === 'firstName'" :message="error.message" type="warning" />
                    <input v-model="firstName" name="fistName" autocomplete="true" type="text" placeholder="FirstName" v-bind:class="{'warning': false}" required>
                </div>
                <div :class="error.cause === 'lastName' ? 'input-box input-error' : 'input-box'">
                    <ErrorMessageForm v-if="error.cause === 'lastName'" :message="error.message" type="warning" />
                    <input v-model="lastName" name="lastName" autocomplete="true" type="text" placeholder="LastName" v-bind:class="{'warning': false}" required>
                </div>
                <div :class="error.cause === 'email' ? 'input-box input-error' : 'input-box'">
                    <ErrorMessageForm v-if="error.cause === 'email'" :message="error.message" type="warning" />
                    <input v-model="email" name="email" autocomplete="true" type="email" placeholder="Mail adress" v-bind:class="{'warning': false}" required>
                </div>
                <div :class="error.cause === 'password' ? 'input-box input-error' : 'input-box'">
                    <ErrorMessageForm v-if="error.cause === 'password'" :message="error.message" type="warning" />
                    <div class="input-icon-box">
                        <input v-model="password" name="password" autocomplete="true" :type="typePassword" placeholder="Password" v-bind:class="{'warning': false}" required>
                        <div @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'">
                            <VisibilityOnIcon v-if="typePassword === 'password'" class="password-icon" />
                            <VisibilityOffIcon v-if="typePassword === 'text'" class="password-icon" /> 
                        </div>
                    </div>
                </div>
                <div :class="error.cause === 'confirmPassword' ? 'input-box input-error' : 'input-box'">
                    <ErrorMessageForm v-if="error.cause === 'confirmPassword'" :message="error.message" type="warning" />
                    <div class="input-icon-box">
                        <input v-model="confirmPassword" :type="typeConfirmPassword" placeholder="Confirm password" v-bind:class="{'warning': false}" required>
                         <div @click="typeConfirmPassword === 'password' ? typeConfirmPassword = 'text' : typeConfirmPassword = 'password'">
                            <VisibilityOnIcon v-if="typeConfirmPassword === 'password'" class="password-icon" />
                            <VisibilityOffIcon v-if="typeConfirmPassword === 'text'" class="password-icon" /> 
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn-accept">Next</button>
            </form>
        </main>
        <footer>
            <router-link class="other-choice" to="/signin">Sign In</router-link>
        </footer>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/reactivity'

import ErrorMessageForm from "@/components/services/ErrorMessageForm.vue"
import VisibilityOnIcon from "vue-material-design-icons/Eye.vue"
import VisibilityOffIcon from "vue-material-design-icons/EyeOff.vue"

export default {
    setup (props, context) {

        console.log(props.error);

        const dataValue = reactive(props.dataForm)
        const typePassword = ref('password')
        const typeConfirmPassword = ref('password')

        const handleNext = () => {
            context.emit('handleNext', dataValue)
        }

        return {
            typePassword,
            typeConfirmPassword,
            handleNext,
            ...toRefs(dataValue)
        }
    },
    components: {
        ErrorMessageForm,
        VisibilityOnIcon,
        VisibilityOffIcon,
    }, 
    props: ['dataForm', 'error']
}
</script>