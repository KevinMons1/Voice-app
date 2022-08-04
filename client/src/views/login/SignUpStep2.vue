<template>
    <div class="content">
        <main>
            <h1>Sign Up</h1>
            <form @submit.prevent="null">
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <MultipleSelect 
                        :options="countriesJSON" 
                        :multiple="false" 
                        @update:value="handleChange"
                        title="Select your country"
                        :type="0"
                        v-bind:class="{'warning': false}"
                    />
                </div>
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />
                    <MultipleSelect 
                        :options="languagesJSON" 
                        :multiple="true" 
                        @update:value="handleChange"
                        title="Languages you speak"
                        :type="1"
                        v-bind:class="{'warning': false}" 
                    />
                </div>
                <div class="input-box">
                    <ErrorMessageForm v-if="false" message="" type="warning" />              
                    <MultipleSelect 
                        :options="languagesJSON" 
                        :multiple="true" 
                        @update:value="handleChange"
                        title="What languages you want to learn"
                        :type="2"
                        v-bind:class="{'warning': false}" 
                    />
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
import { reactive, toRefs } from 'vue'

import ErrorMessageForm from "@/components/services/ErrorMessageForm.vue"
import MultipleSelect from '@/components/multipleSelect/MultipleSelect.vue'

import countriesJSON from "@/assets/json/countries.json"
import languagesJSON from "@/assets/json/languages.json"

export default {
    setup (props, context) {

        const dataValue = reactive(props.dataForm)

        const handleNext = () => {
            context.emit('handleNext', dataValue)
        }

        const handleChange = (e) => {
            console.log(e.value);
            console.log(dataValue.country);
            if (e.value === 0) {
                dataValue.country = e.value
            } else if (e.value === 1) {
                dataValue.languagesSpeak = e.value
            } else if (e.value === 2) {
                dataValue.languagesLearn = e.value
            }
        }

        return {
            handleNext,
            handleChange,
            countriesJSON,
            languagesJSON,
            ...toRefs(dataValue)
        }
    },
    components: {
        ErrorMessageForm,
        MultipleSelect
    }, 
    props: ['dataForm']
}
</script>