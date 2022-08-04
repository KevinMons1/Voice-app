<template>
    <div>
        <LandingPage v-show="showHome === false" />
        <HomeConnected v-show="showHome === true" />
    </div>
</template>

<script>
import { ref } from "vue"

import LandingPage from "@/components/landing/LandingPage.vue"
import HomeConnected from "@/components/home/HomeConnected.vue"

export default {
    setup () {
        const showHome = ref(false)

        return {
            showHome
        }
    },
    components: {
        LandingPage,
        HomeConnected
    }
}
</script>

<style lang="scss" scoped>

</style>