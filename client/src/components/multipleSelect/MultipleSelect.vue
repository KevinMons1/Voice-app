<template>
    <Multiselect 
        v-model="value"
        :options="options" 
        :mode="type === 0 ? 'single' : 'tags'" 
        :close-on-select="false"
        :placeholder="title"
    />
</template>
<script>
import { ref, watch } from "vue"
import Multiselect from '@vueform/multiselect'
import "@vueform/multiselect/themes/default.css"

export default {
    setup (props, context) {
        const value = ref([])

        watch(value, (newValue) => {
            context.emit('update:value', {
                value: newValue,
                type: props.type
            })
        })

        return {value}
    },
    components: {
        Multiselect
    },
    props: ['title', 'options', 'type']
}
</script>

<style lang="scss">
    .multiselect {
        @include _input-connexion();
        position: relative;
        min-height: 41px;

        cursor: pointer;

        &.is-active {
            box-shadow: none;
        }

        .multiselect-placeholder {
            text-align: start;
        }

        .multiselect-caret {
            display: none;
        }

        .multiselect-clear {
            flex-grow: none;

            .multiselect-clear-icon {
                width: $font-size-text;
                height: $font-size-text;
            }
        }

        .multiselect-tags {
            margin: 0 5px;
            padding: 0;

            .multiselect-tag:nth-child(1) {
                margin: 0 5px 0 0;
            }

            .multiselect-tags-search-wrapper {
                margin: 0 5px;
            }
        }

        .multiselect-tag {
            padding: $padding-xxs;

            background: $color-orange-main;
            color: $color-black-main;

            font-size: $font-size-text;
            font-weight: normal; 
        }

        .multiselect-option.is-selected {
            background-color: $color-orange-main;
        }

        .multiselect-dropdown {
            padding: $padding-xs;

            background: #fff;
            border: 1px solid $color-grey-light;
            border-radius: $border-rectangle;

            z-index: 20;
            overflow: auto;

            &.is-hidden {
                display: none;
            }

            li {
                padding: $padding-xxs;
                text-align: start;
                list-style: none;
            }
        }
    }
</style>