<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import './assets/less/index.less';
export default {
    name: 'app',
    components: {

    }
}
</script>
<style lang='less'>

#app{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>