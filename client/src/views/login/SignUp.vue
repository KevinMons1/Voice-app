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
                :error="error"
                v-model:firstName="dataForm.firstName"
                v-model:lastName="dataForm.lastName"
                v-model:email="dataForm.email"
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

import { useValidatorsStep1 } from "../../mixins/form/validators"

import HeaderTitle from "@/components/header/HeaderTitle.vue"
import SignUpStep1 from "./SignUpStep1.vue"
import SignUpStep2 from "./SignUpStep2.vue"

export default {
    setup () {
        const step = ref(1)

        const dataForm = reactive({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "",
            languagesSpeak: [],
            languagesLearn: []
        })

        const error = reactive({
            status: true,
            message: "",
            cause: ""
        })

        const handleNext = async (value) => {
            if (step.value === 1) {
                const result = await useValidatorsStep1(dataForm)

                if (result.status === true) {
                    error.status = true

                    step.value++
                } else if (result.status === false) {
                    error.status = result.status
                    error.message = result.message
                    error.cause = result.cause
                }

            }
            else if (step.value === 2) {
                console.log(value);
            }
        }

        return {
            dataForm,
            step,
            error,
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