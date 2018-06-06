<style lang='less'>
@rem: 37.5rem;
.home{
    width: 100%;
    height: 100%;
    background-color: #8dddbd;
}
</style>
<template>
    <div class="static-page">
        <div class="info-item">
            <h3>个人信息</h3>
            <div class="content"></div>
        </div>
        <div class="info-item">
            <h3>教育背景</h3>
            <div class="content"></div>
        </div>
        <div class="info-item">
            <h3>工作经历</h3>
            <div class="content"></div>
        </div>
        <div class="info-item">
            <h3>项目经验</h3>
            <div class="content"></div>
        </div>
        <div class="info-item">
            <h3>自我评价</h3>
            <div class="content"></div>
        </div>
    </div>
</template>
<script>
import infoList from './../components/infoList.vue';
export default{
    name: 'static',
    data: {
        
    },
    components: {}
}
</script>
