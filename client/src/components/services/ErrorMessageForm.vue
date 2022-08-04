<template>
    <div :class="type">
        <small>{{ message }}</small>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue"

export default {
    setup (props) {
        const messageError = reactive({
            message: props.message,
            type: props.type
        })

        return {
            ...toRefs(messageError)
        }
    },
    props: ['message', 'type']
}
</script>

<style lang="scss" scoped>
    .warning {
        small {
            color: $color-red-main;
        }
    }
</style>