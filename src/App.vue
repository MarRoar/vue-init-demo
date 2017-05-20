<template>
    <div id="app">
        <BannerView v-show="headerShow"></BannerView>
        <router-view></router-view>

        <FooterView></FooterView>
    </div>
</template>

<script>
import BannerView from './components/Banner.vue'
import FooterView from './components/Footer.vue'
import {mapGetters, mapActions} from 'vuex'
    // console.log(FooterView);

export default {
    components: {
        BannerView,
        FooterView
    },
    computed: mapGetters([
        'headerShow'
    ]),
    watch: { //当路由变化后触发的
        $route (to, from) {
            var myTo = to.path;
            if (myTo == '/mine') {
                this.$store.dispatch('hideHeader');
            }
            if (from.path == "/mine") {
                this.$store.dispatch('showHeader');
            }
        }
    },
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
    @import url('./assets/css/common.css');
</style>