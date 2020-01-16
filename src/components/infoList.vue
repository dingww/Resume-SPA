<style lang="less">
@rem: 37.5rem;
.nav {
    width: 100%;
    // overflow: auto;
    padding: 0 40/@rem;
    box-sizing: border-box;
    position: relative;
    padding-top: 40/@rem;
    .about-me{
        width: 75/@rem;
        height: 75/@rem;
        font-size: 16/@rem;
        text-align: center;
        line-height: 75/@rem;
        border-radius: 100%;
        background-color: #2db4af;
        border: 1/@rem dashed #aef7ed;
        // box-shadow: 0 0 10px rgba(210, 248, 238, 0.7);
        display: block;
        color: white;
        position: absolute;
        cursor: pointer;
        top: 10/@rem;
        left: calc(~'50% - 1rem');
        z-index: 1;
    }
    .my-info {
        opacity: 0;
        transition: all 0.3s;
        a {
            width: 75/@rem;
            height: 75/@rem;
            font-size: 12/@rem;
            text-align: center;
            line-height: 75/@rem;
            border-radius: 100%;
            background-color: #40a496;
            box-shadow: 0 0 10px rgba(210, 248, 238, 0.7);
            display: block;
            color: white;
            position: absolute;
            top: 0;
            left: calc(~'50% - 1rem');
            transition: all 0.3s;
            &:hover {
                background-color: #30948d;
            }
        }
        &.show{
            opacity: 1;
            transition: all 0.3s;
            .about {
                top: 20/@rem;
                // left: 40/@rem;
                left: calc(~'50% - 4.5rem');
                transition: all 0.3s;
            }
            .experience {
                top: 100/@rem;
                left: calc(~'50% - 3.3rem');
                transition: all 0.3s;
            }
            .contact {
                top: 120/@rem;
                left: calc(~'50% - 1rem');
                transition: all 0.3s;
            }
            .projects {
                top: 100/@rem;
                left: calc(~'50% + 1.3rem');
                transition: all 0.3s;
            }
            .education {
                top: 20/@rem;
                // right: 40/@rem;
                left: calc(~'50% + 2.5rem');
                transition: all 0.3s;
            }
        }
    }
}
</style>
<template>
    <div class="nav">
        <div class="about-me" @click="onShowAboutMe">关于我</div>
        <div class="my-info" :class="isShowInfo ? 'show' : 'hide'">
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
            this.isShowInfo = !this.isShowInfo;
        }
    }
};
</script>
