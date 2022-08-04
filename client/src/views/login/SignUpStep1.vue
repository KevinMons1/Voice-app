<template>
    <div class="content">
        <main>
            <h1>Sign Up</h1>
            <form @submit.prevent="null">
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <input v-model="firstName" type="text" placeholder="FirstName" v-bind:class="{'warning': false}" required>
                </div>
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <input v-model="lastName" type="text" placeholder="LastName" v-bind:class="{'warning': false}" required>
                </div>
                  <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <input v-model="mailAdress" type="email" placeholder="Mail adress" v-bind:class="{'warning': false}" required>
                </div>
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <div class="input-icon-box">
                        <input v-model="password" type="password" placeholder="Password" v-bind:class="{'warning': false}" required>
                        <VisibilityOnIcon class="password-icon" />
                        <VisibilityOffIcon class="password-icon hide" /> 
                    </div>
                </div>
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <div class="input-icon-box">
                        <input type="password" placeholder="Confirm password" v-bind:class="{'warning': false}" required>
                        <VisibilityOnIcon class="password-icon" />
                        <VisibilityOffIcon class="password-icon hide" /> 
                    </div>
                </div>
                <button @click="handleNext" class="btn-accept">Next</button>
            </form>
        </main>
        <footer>
            <router-link class="other-choice" to="/signin">Sign In</router-link>
        </footer>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'

import ErrorMessageForm from "@/components/services/ErrorMessageForm.vue"
import VisibilityOnIcon from "vue-material-design-icons/Eye.vue"
import VisibilityOffIcon from "vue-material-design-icons/EyeOff.vue"

export default {
    setup (props, context) {

        const dataValue = reactive(props.dataForm)

        const handleNext = () => {
            context.emit('handleNext', dataValue)
        }

        return {
            handleNext,
            ...toRefs(dataValue)
        }
    },
    components: {
        ErrorMessageForm,
        VisibilityOnIcon,
        VisibilityOffIcon,
    }, 
    props: ['dataForm']
}
</script>