<style lang='less'>
@import "../core/variables.less";
html{
	background-color: #fff;
}
body{
    width: 960px !important;
    overflow-x: hidden;
    margin: 0 auto !important;
    position: relative;
}
.static-page{
    width: 100%;
    background-color: @reColor_FFFFFF;
    padding: 30/@rem;
    box-sizing: border-box;
    .info-item{
        margin-top: 20/@rem;
        .title{
            width: 100%;
            height: 40/@rem;
            line-height: 40/@rem;
            font-size: 18/@rem;
            color: @reColor_333333;
            position: relative;
            overflow: hidden;
            svg{
                display: inline-block;
                overflow: hidden;
                width: 26/@rem;
                height: 26/@rem;
                position: relative;
                top: -8/@rem;
                use{
                    fill: #07988b;
                }
            }
            span{
                display: inline-block;
                overflow: hidden;
            }
        }
        .content{
            font-size: 14/@rem;
            margin-top: 10/@rem;
            overflow: auto;
            .avatar{
                .img-wrap{
                    width: 100/@rem;
                    height: 100/@rem;
                    border: 2/@rem solid #caedde; // #caedde
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    float: left;
                }
                .name-wrap{
                    float: left;
                    margin-left: 20/@rem;
                    .name{
                        font-size: 32/@rem;
                        font-weight: bold;
                        color: @reColor_333333;
                        margin-top: 15/@rem;
                    }
                    .profession{
                        height: 30/@rem;
                        line-height: 30/@rem;
                        font-size: 14/@rem;
                        color: @reColor_333333;
                        text-align: center;
                        margin-top: 10/@rem;
                        // border-top: 1px solid #caedde;
                    }
                }
            }
            .brief-intro{
                width: 200/@rem;
                height: 120/@rem;
                float: right;
                .intro-item{
                    width: 100%;
                    height: 28/@rem;
                    line-height: 28/@rem;
                    font-size: 14/@rem;
                    color: @reColor_333333;
                    svg{
                        width: 16/@rem;
                        height: 16/@rem;
                        float: right;
                        margin-left: 10/@rem;
                        use{
                            fill: #afddd0;
                        }
                    }
                    span{
                        float: right;
                        position: relative;
                        top: -5/@rem;
                    }
                    
                }
            }
                
        }
    }
}
</style>
<template>
    <div class="static-page">
        <div class="info-item">
            <h3 class="title">
                <svg aria-hidden="true">
                    <use xlink:href=#icon-gerenxinxi1></use>
                </svg>
                <span>个人信息</span>
            </h3>
            <div class="content">
                <avatar />
                <ul class="brief-intro"> 
                    <li class="intro-item" :key="index" v-for="(item, index) in detailList">
                        <svg aria-hidden="true">
                            <use :xlink:href="'#' + item.icon"></use>
                        </svg>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="info-item">
            <h3 class="title">
                <svg aria-hidden="true">
                    <use xlink:href=#icon-jiaoyu></use>
                </svg>
                <span>教育背景</span>
            </h3>
            <div class="content">
                <h4 class="edu-title">
                    <span>2014.08 ~ 2017.06 中山大学</span>
                    <span>无线电物理</span>
                    <span>硕士</span>
                </h4>
                <div class="edu-content">主要研究电波传播算法，发表过一篇国际期刊论文和两篇国际会议论文，两次获得一等研究生教育奖学金。</div>
                <h4 class="edu-title">
                    <span>2010.09 ~ 2014.06 湖北师范大学</span>
                    <span>电子信息工程</span>
                    <span>本科</span>
                </h4>
                <div class="edu-content">
                    在校期间学习成绩优异，多次获得学习奖学金。课余时间积极参与学校社团活动，参与过校园歌手大赛、运动会等活动的组织与宣传工作，具备良好的交流协调能力。
                </div>
            </div>
        </div>
        <div class="info-item">
            <h3 class="title">
                <svg aria-hidden="true">
                    <use xlink:href=#icon-works></use>
                </svg>
                <span>工作经历</span>
            </h3>
            <div class="content">
                <h4 class="work-title">
                    <span>2017.05 ~ 至今 炫米科技</span>   
                    <span>web前端开发工程师</span> 
                </h4>
                <div class="work-content"> 
                    主要技术栈为webpack + es6 + react/vue + playcanvas（产品的3d部分）。负责公司主产品多个模块的开发工作，并在每两周一个迭代版本的情况下以较高质量完成了目标任务，得到了项目主管的肯定；2天上手vue进行项目的开发，独立完成了3d展示APP产品的研发；拥有2个PC端项目和两个移动端项目的前端开发经验。
                </div>
                <h4 class="work-title">
                    <span>2017.02 ~ 2017.05 中洪计算机服务有限公司</span>   
                    <span>web前端开发实习生</span> 
                </h4>
                <div class="work-content"> 
                    参与了一个为某高校开发的人事管理系统，本人主要负责产品的静态页面开发，使用的技术为html+css+jquery。该项目有50%的页面是由本人完成，工作效率得到了项目负责人的认可。
                </div>
            </div>
        </div>
        <div class="info-item">
            <h3 class="title">
                <svg aria-hidden="true">
                    <use xlink:href=#icon-projects></use>
                </svg>
                <span>项目经验</span>
            </h3>
            <div class="content">
                <h4></h4>
                <div></div>
            </div>
        </div>
        <div class="info-item">
            <h3 class="title">
                <svg aria-hidden="true">
                    <use xlink:href=#icon-evaluate></use>
                </svg>
                <span>自我评价</span>
            </h3>
            <div class="content">
                <ul>
                    <ol>熟悉HTML5、CSS、SASS、Javascript，熟悉playcanvas、了解Three.js；</ol>
                    <ol>有React、Vue、jQuery等框架的项目经验，有基于webGL的开发经验；</ol>
                    <ol>熟悉Webpack、Git等前端开发工具；</ol>
                    <ol>较强的英文文档阅读能力、学习能力和解决问题的能力。</ol>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from './../components/avatar.vue';
export default {
    name: 'static',
    data: function() {
        return {
            detailList: [{
                label: '出生年月',
                icon: 'icon-tubiaozhizuomoban-',
                value: '1992.01',

            },{
                label: '电话',
                icon: 'icon-h1',
                value: '15521273128',

            },{
                label: '邮箱',
                icon: 'icon-youxiang',
                value: '15521273128@163.com',

            },{
                label: '地点',
                icon: 'icon-dizhi',
                value: '广州',

            },]
        }
    },
    components: {Avatar}
}
</script>
