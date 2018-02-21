<template>
    <div class="home">
        <Avatar></Avatar>
        <infoList></infoList>
    </div>
</template>
<script>
import Avatar from './../components/avatar.vue';
import infoList from './../components/infoList.vue';
export default{
    name: 'home',
    data: {

    },
    components: {
        Avatar,
        infoList
    }
}
</script>
<style lang="less">
.home{
    width: 100%;
    height: 100%;
    background-color: #8dddbd;
}
</style>