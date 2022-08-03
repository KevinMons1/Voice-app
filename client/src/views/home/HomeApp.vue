<template>
    <div>
        <HomeDisconnected v-show="showHome === false" />
        <HomeConnected v-show="showHome === true" />
    </div>
</template>

<script>
import { ref } from "vue"

import HomeDisconnected from "@/components/home/HomeDisconnected.vue"
import HomeConnected from "@/components/home/HomeConnected.vue"

export default {
    setup () {
        const showHome = ref(false)

        return {
            showHome
        }
    },
    components: {
        HomeDisconnected,
        HomeConnected
    }
}
</script>

<style lang="scss" scoped>

</style>