<style lang='less'>
@import "../core/variables.less";
.home {
    width: 100%;
    height: 100vh;
    background-color: #5dd0bd;
    .avatar {
        padding: 60/@rem 50/@rem 30/@rem;
        .img-wrap {
            width: 100/@rem;
            height: 100/@rem;
            border: 6/@rem solid #b7ebe0;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .name {
            // letter-spacing: 6/@rem;
            text-align: center;
            font-size: 32/@rem;
            font-weight: bold;
            text-shadow: 1/@rem 2/@rem 0/@rem #c0f1d2;
            color: white;
            padding: 10/@rem 0 0;
        }
        .profession {
            font-size: 14/@rem;
            -webkit-font-smoothing: antialiased;
            color: #30948d;
            text-align: center;
            margin: 0 auto;
            padding: 10/@rem 0 15/@rem;
            border-bottom: 1/@rem solid #B6EBDF;
        }
    }
}
</style>
<template>
    <div class="home">
        <Avatar type="home"></Avatar>
        <infoList></infoList>
    </div>
</template>
<script>
import Avatar from "./../components/avatar.vue";
import infoList from "./../components/infoList.vue";
export default {
    name: "home",
    data: function() {
        return {};
    },
    components: {
        Avatar,
        infoList
    }
};
</script>
