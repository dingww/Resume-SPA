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
@rem: 37.5rem;
.avatar{
    padding: 60/@rem 50/@rem 40/@rem;
    .img-wrap{
        width: 150/@rem;
        height: 150/@rem;
        border: 6/@rem solid #d0f4dd;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    }
    h3{
        letter-spacing: 6/@rem;
        text-align: center;
        font-size: 36/@rem;
        text-shadow: 1/@rem 2/@rem 0/@rem  #b0e4cd;
        color: white;
        padding: 30/@rem 0 0;
    }
    p{
        width: 100%;
        font-size: 20/@rem;
        color: #30948d;
        text-align: center;
        margin: 0 auto;
        padding: 10/@rem 0 20/@rem;
        border-bottom: 2/@rem solid white;
    }
}
</style>
