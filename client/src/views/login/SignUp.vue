<template>
    <div class="connexion-body">
         <HeaderTitle />
        <div class="image">
            <img src="@/assets/images/background-people.png" alt="People">
        </div>
        <div class="wrapper">
            <SignUpStep1 
                v-if="step === 1" 
                :dataForm="dataForm" 
                v-model:firstName="dataForm.firstName"
                v-model:lastName="dataForm.lastName"
                v-model:mailAdress="dataForm.mailAdress"
                v-model:password="dataForm.password"
                @handleNext="handleNext" 
            />
            <SignUpStep2 
                v-if="step === 2" 
                :dataForm="dataForm" 
                v-model:country="dataForm.country"
                v-model:languagesSpeak="dataForm.languagesSpeak"
                v-model:languagesLearn="dataForm.languagesLearn"
                @handleNext="handleNext" 
                />
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue"

import HeaderTitle from "@/components/header/HeaderTitle.vue"
import SignUpStep1 from "./SignUpStep1.vue"
import SignUpStep2 from "./SignUpStep2.vue"

export default {
    setup () {
        let step = ref(2)

        const dataForm = reactive({
            firstName: "",
            lastName: "",
            mailAdress: "",
            password: "",
            country: "",
            languagesSpeak: [],
            languagesLearn: []
        })

        const handleNext = (value) => {
            console.log(value);
            if (step.value === 1) {
                step.value++
            }
            else if (step.value === 2) {
                console.log(value);
            }
        }

        return {
            dataForm,
            step,
            handleNext
        }
    },
    components: {
        HeaderTitle,
        SignUpStep1,
        SignUpStep2
    }
}
</script>

<style lang="scss" >
   @import "./login.scss";
</style>