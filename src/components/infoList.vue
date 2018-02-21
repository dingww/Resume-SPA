<template>
    <div class="nav">
        <router-link to="/experience">工作经验</router-link>
        <router-link to="/projects">项目经验</router-link>
        <router-link to="/education">教育背景</router-link>
        <router-link to="/about">联系我</router-link>
    </div>
</template>
<script>
export default{
    name: 'infoList',
}
</script>
<style lang="less">
.nav{
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    position: relative;
    padding-top: 40px;
    
    a{
        width: 220px;
        height: 80px;
        font-size: 36px;
        text-align: center;
        line-height: 80px;
        border-radius: 8px;
        background-color: #40a496;
        display: block;
        color: white;
        position: absolute;
        top: 0;
        &:hover{
            background-color: #30948d;
        }
        &:nth-child(1){
            left: 280px;
        }
        &:nth-child(2){
            top: 150px;
            right: 280px;
        }
        &:nth-child(3){
            top: 300px;
            left: 280px;
        }
        &:nth-child(4){
            top: 450px;
            right: 280px;
        }

    }
    
}
</style>