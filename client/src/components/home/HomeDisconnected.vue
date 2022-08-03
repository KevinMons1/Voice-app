<template>
    <div class="home-disconnected">
        <div class="width-max">
            <HeaderTitle />
            <main>
                <div class="left">
                    <h1>Learn languages by <span>talking</span> and <span>meet</span> new people</h1>
                    <p>Welcome to your most effective language learning application! Talk to strangers in the language of your choice to force your brain to learn in the best way.</p>
                    <nav>
                        <router-link to="/signin">Login</router-link>
                        <router-link to="/signup">Create new account</router-link>
                    </nav>
                </div>
                <div class="right">
                    <img src="@/assets/images/background-people.png" alt="People">
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue"

export default {
    setup () {
        

        return {}
    },
    components: {
        HeaderTitle
    }
}
</script>

<style lang="scss" scoped>
    .home-disconnected {
        display: flex;
        justify-content: center;
        height: 100vh;
        padding: $padding-md;

        main {
            @include _flexbox();

            .left {
                width: 50%;

                h1 {
                    font-size: $font-size-title-xl;
                }

                p {
                   margin: $margin-lg 0;
                }
                
                span {
                    font-size: $font-size-title-xl;
                    color: $color-orange-main; 
                }

                nav {
                    display: flex;
                    justify-content: space-around;

                    a {
                        width: 175px;
                    }

                    a:nth-child(1) {
                        @include _button("1");
                    }

                    a:nth-child(2) {
                        @include _button("2");
                    }
                }
            }

            .right {
                width: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    
</style>