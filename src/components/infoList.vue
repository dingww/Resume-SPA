<style lang="less">
@rem: 37.5rem;
.nav {
    width: 100%;
    padding: 0 40/@rem;
    box-sizing: border-box;
    position: relative;
    padding-top: 40/@rem;
    .about-me{
        width: 60/@rem;
        height: 60/@rem;
        font-size: 14/@rem;
        text-align: center;
        line-height: 60/@rem;
        border-radius: 100%;
        background-color: #2db4af;
        border: 4/@rem solid #d0f4ef;
        display: block;
        color: white;
        position: absolute;
        top: 100/@rem;
        left: 154/@rem;
    }
    .my-info {
        a {
            width: 70/@rem;
            height: 70/@rem;
            font-size: 14/@rem;
            text-align: center;
            line-height: 70/@rem;
            border-radius: 100%;
            background-color: #40a496;
            display: block;
            color: white;
            position: absolute;
            top: 0;
            &:hover {
                background-color: #30948d;
            }
            &.about {
                top: 100/@rem;
                left: 40/@rem;
            }
            &.experience {
                top: 30/@rem;
                left: 80/@rem;
            }
            &.contact {
                top: -10/@rem;
                left: 154/@rem;
            }
            &.projects {
                top: 30/@rem;
                right: 80/@rem;
            }
            &.education {
                top: 100/@rem;
                right: 40/@rem;
            }
        }
    }
}
</style>
<template>
    <div class="nav">
        <div class="about-me" @click="onShowAboutMe">关于我</div>
        <div class="my-info" v-show="isShowInfo">
            <router-link class="about" to="/about">个人信息</router-link>
            <router-link class="education" to="/education">教育背景</router-link>
            <router-link class="experience" to="/experience">工作经验</router-link>
            <router-link class="projects" to="/projects">项目经验</router-link>
            <router-link class="contact" to="/contact">联系我</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "infoList",
    data: function() {
        return {
            isShowInfo: false
        };
    },
    components: {},
    created: function() {},
    beforeMount: function() {},
    mounted: function() {
        let _this = this;
    },
    beforeUpdate: function() {},
    methods: {
        onShowAboutMe: function() {
            console.log("das");
            this.isShowInfo = !this.isShowInfo;
        }
    }
};
</script>
