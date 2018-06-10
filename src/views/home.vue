<style lang='less'>
@import "../core/variables.less";
.home {
    width: 100%;
    height: 100%;
    background-color: #8dddbd;
    .avatar {
        padding: 60/@rem 50/@rem 40/@rem;
        .img-wrap {
            width: 150/@rem;
            height: 150/@rem;
            border: 6/@rem solid #d0f4dd;
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
            letter-spacing: 6/@rem;
            text-align: center;
            font-size: 36/@rem;
            text-shadow: 1/@rem 2/@rem 0/@rem #b0e4cd;
            color: white;
            padding: 30/@rem 0 0;
        }
        .profession {
            font-size: 20/@rem;
            color: #30948d;
            text-align: center;
            margin: 0 auto;
            padding: 10/@rem 0 20/@rem;
            border-bottom: 2/@rem solid white;
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
