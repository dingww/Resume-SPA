<template>
    <div class="avatar"> 
        <div class="img-wrap">
            <img src="./../assets/images/lyf.jpeg"/>
        </div>
        <h3>丁文婉</h3>
        <p>前端工程师</p>
    </div>
</template>
<script>
export default{
    name: 'Avatar',
    data(){
        return{}
    }
}
</script>
<style lang="less">
.avatar{
    padding: 140px 100px 120px;
    .img-wrap{
        width: 400px;
        height: 400px;
        border: 16px solid #d0f4dd;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    h3{
        letter-spacing: 6px;
        text-align: center;
        font-size: 72px;
        text-shadow: 4px 4px 0px  #b0e4cd;
        color: white;
        padding: 60px 0 0;
    }
    p{
        width: 440px;
        font-size: 36px;
        color: #30948d;
        text-align: center;
        margin: 0 auto;
        padding: 40px 0 60px;
        border-bottom: 4px solid white;
    }
}
</style>
