<style lang='less'>
@import "../core/variables.less";
html{
	background-color: #fff;
}
body{
    width: 1000px !important;
    overflow-x: hidden;
    margin: 0 auto !important;
    position: relative;
    font-size: 14/@rem;
}
.static-page{
    width: 100%;
    background-color: @reColor_FFFFFF;
    // padding: 0 10/@rem;
    box-sizing: border-box;
    padding: 20px 0;
    .info-item{
        margin-top: 15/@rem;
        &:nth-child(1){
            margin-top: 0;
        }
        .title{
            width: 100%;
            height: 30/@rem;
            line-height: 30/@rem;
            font-size: 18/@rem;
            color: #07988b;
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
            margin-top: 5/@rem;
            overflow: auto;
            .avatar{
                margin-top: 10/@rem;
                .img-wrap{
                    width: 90/@rem;
                    height: 90/@rem;
                    border: 2/@rem dotted #07988b; // #caedde
                    // box-shadow: 0 0 8/@rem #07988b;
                    border-radius: 50%;
                    overflow: hidden;
                    // &.img_02{
                    //     border: none;
                    // }
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
                        margin-top: 10/@rem;
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
                height: 90/@rem;
                margin-top: 10/@rem;
                float: right;
                .intro-item{
                    width: 100%;
                    height:24/@rem;
                    line-height:24/@rem;
                    font-size: 14/@rem;
                    color: @reColor_333333;
                    svg{
                        width: 16/@rem;
                        height: 16/@rem;
                        float: right;
                        margin-left: 10/@rem;
                        use{
                            fill: #07988b;
                        }
                    }
                    span{
                        float: right;
                        position: relative;
                        top: -5/@rem;
                    }
                    ul{
                        list-style-type: decimal !important;
                        li{
                            list-style-type: decimal !important;
                        }
                    }
                    
                }
            }
            .edu-title{
                line-height: 30/@rem;
                margin-top: 5/@rem;
                &:nth-child(1){
                    margin-top: 0;
                }
                .edu-time{
                    color: #07988b;
                    font-size: 12/@rem;
                }
                .company{
                    color: #07988b;
                }
                .degree{
                    color: #07988b;
                }
            }
            .edu-content{
                // margin-top: 10/@rem;
                line-height: 24/@rem;
                text-align: justify;
                display: flex;
                label{
                    width: 120px;
                    color: #07988b;
                    // font-weight: bold;
                }
                ul{
                    width: 880px;
                    padding: 0;
                    li{
                        list-style-type: circle;
                        // list-style-color: #07988b;
                    }
                }
            }
            .content-item{
                line-height: 30/@rem;
                margin-top: 5/@rem;
                &:nth-child(1){
                    margin-top: 0;
                }
                .work-title{
                    span{
                        margin-right: 20/@rem;
                        &.work-time{
                            color: #07988b;
                            font-size: 12/@rem;
                        }
                        &.project-name{
                            color: #07988b;
                            font-weight: bold;
                            margin-right: 0/@rem;
                            float: right;
                        }
                    }
                }
                .work-content{
                    text-align: justify;
                    line-height: 24/@rem;
                    // margin-top: 10/@rem;
                    .part{
                        display: flex;
                        label{
                            width: 120px;
                            color: #07988b;
                        }
                        ul{
                            width: 880px;
                            padding: 0;
                            li{
                                // span{
                                //     color: #07988b;
                                //     font-size: 24px;
                                //     font-weight: 900;
                                //     margin-right: 4px;
                                // }
                                list-style-type: circle;
                            }
                        }
                    }
                }
            }
            .self-evaluate{
                padding-left: 26px;
                li{
                    list-style-type: circle;
                    line-height: 24/@rem;
                    text-align: justify;
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
                <!-- <svg aria-hidden="true">
                    <use xlink:href=#icon-gerenxinxi1></use>
                </svg> -->
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
                <!-- <svg aria-hidden="true">
                    <use xlink:href=#icon-jiaoyu></use>
                </svg> -->
                <span>教育背景</span>
            </h3>
            <div class="content">
                <h4 class="edu-title">
                    <span class="edu-time">2014.08 ~ 2017.06</span><span> 中山大学</span>
                    <span class="degree">硕士</span>
                    <span>无线电物理</span>
                </h4>
                <!-- <div class="edu-content">主要研究电波传播算法，发表过一篇国际期刊论文和两篇国际会议论文，两次获得一等研究生教育奖学金。</div> -->
                <h4 class="edu-title">
                    <span class="edu-time">2010.09 ~ 2014.06</span><span> 湖北师范大学</span>
                    <span class="degree">本科</span>
                    <span>电子信息工程</span>
                </h4>
                <!-- <div class="edu-content">
                    在校期间学习成绩优异，多次获得奖学金。课余时间积极参与学校社团活动，具备良好的交流协调能力。
                </div> -->
            </div>
        </div>
         <div class="info-item">
            <h3 class="title">
                <!-- <svg aria-hidden="true">
                    <use xlink:href=#icon-jiaoyu></use>
                </svg> -->
                <span>工作经历</span>
            </h3>
            <div class="content">
                <h4 class="edu-title">
                    <span class="edu-time">2018.09 ~ 至今</span><span class="company"> 三盟科技</span>
                    <span class="prof">web前端开发工程师</span>
                </h4>
                <div class="edu-content">
                    <label>工作描述：</label>
                    <ul>
                        <li>主要参与项目的开发以及产品的迭代开发，对可视化有一定的了解</li>
                        <li>主要技术栈为：webpack + es6 + react + mobx/dva + echarts。</li>
                        <!-- <li>做过一个项目的技术负责人，包括：制定项目开发计划、进度跟踪以及进度汇报。</li> -->
                    </ul>
                </div>
                <h4 class="edu-title">
                    <span class="edu-time">2017.05 ~ 2018.09</span><span class="company"> 炫米科技</span>
                    <span class="prof">前端开发工程师</span>
                </h4>
                <div class="edu-content">
                    <label>工作描述：</label>
                    <ul>
                        <li>主要负责公司产品的迭代开发，对可视化有一定的了解</li>
                        <li>主要技术栈为：webpack + es6 + react/vue + mobx + canvas。</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="info-item">
            <h3 class="title">
                <!-- <svg aria-hidden="true">
                    <use xlink:href=#icon-works></use>
                </svg> -->
                <span>项目经历</span>
            </h3>
            <div class="content">
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2019.04 ~ 至今（中途有间断）</span><span class="company-name">三盟科技</span><span class="project-name">智能数据分析平台</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>该产品是一款数据可视化分析工具。用户可以通过本地上传或连接数据库的方式，将数据创建成数据集，然后在仪表板模块中将数据集的数据通过不同的图表展示出来，运用筛选、选钻取、联动等操作来实现数据分析；</li>
                                <li>该产品主要包括：数据源、数据集、仪表板以及URL映射4个模块；</li>
                                <li>该产品前端技术栈为：webpack + es6 + react + mobx + echarts。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <li>参与平台50%的模块开发、bug修复及功能优化；</li>
                                <li>在前端开发人员严重不足、多次被压缩工期（总压缩30%）的条件下，保证了每个迭代周期的版本发布。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2019.11 ~ 2020.01</span><span class="company-name">三盟科技</span><span class="project-name">贵州轻工职业技术学院诊改项目</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>该项目是学校购买公司的标准化产品，为学校搭建自己的信息化平台，以帮助学校通过国家复核；</li>
                                <li>需要给学校搭建3个系统：大数据决策与预警系统、质量保证系统以及管理系统；</li>
                                <li>主要工作内容是对学校的数据进行搜集、处理、展示、个性化功能的开发以及后期维护。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <div>本人主要负责诊改平台的前端开发和技术负责人的工作：</div>
                                <li>完成个性化需求的开发及bug修复；</li>
                                <li>兼职本项目技术负责人，包括制定研发计划、任务分配、进度跟踪以及以日报的形式每天进行进度汇报；</li>
                                <li>与学校沟通协调资源，推进项目进度。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2018.09 ~ 2019.03</span><span class="company-name">三盟科技</span><span class="project-name">就创业服务平台</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>该产品是利用大数据及相关算法，解决学生精准就业、企业精准招聘以及学校相关部门精准管理与质量提升的服务平台；</li>
                                <li>该产品根据用户角色分三个端：学生端、学校端和企业端，为了提高用户体验，该产品除了PC版还有公众号版本；</li>
                                <li>前端技术栈为：webpack + es6 + react + dva + echarts。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <li>参与学生端和学校端PC版本的开发及后期维护，其中学生端由本人独立开发完成；</li>
                                <li>公众号的开发（包括3个端），本人在保证需求的前提下仅用3周完成开发。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2018.06 ~ 2018.09</span><span class="company-name">炫米科技</span><span class="project-name">艺维官网</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>该项目是一个帮助美术馆、画廊、个人建立、布置及推广自己的3D平台，有兼容PC端和移动端，并由本人开发了小程序版本；</li>
                                <li>前端主要技术栈为：webpack + es6 + react + playcanvas。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <li>本人主要负责网站整体改版的前端开发及对应的小程序开发；</li>
                                <li>2周内独立完成了改版的70%开发任务；</li>
                                <li>3周独立完成了小程序的开发。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2018.06 ~ 至今</span><span class="company-name">炫米科技</span><span class="project-name">白标app</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>白标app是realibox网站应用模块生成的一个定制的app，主要功能为通过商品的3d展示及AR体验以达到导购的目的；</li>
                                <li>主要技术栈为webpack + es6 + vue + playcanvas。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <li>app前端部分（除AR功能模块）由本人独立完成；</li>
                                <li>接手三天内掌握vue的使用并上手进行项目的开发；</li>
                                <li>与ios开发对接，以混合开发的形式进行app的开发。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2017.05 ~ 2018.02</span><span class="company-name">炫米科技</span><span class="project-name">realibox（炫米科技主要产品）</span>
                    </h4>
                    <div class="work-content"> 
                        <div class="part">
                            <label>项目描述：</label>
                            <ul>
                                <li>realibox是一个主打3d可视化的应用平台；</li>
                                <li>该平台包括3d模型的上传、管理、编辑及发布等功能；</li>
                                <li>前端主要技术栈为：webpack + es6 + react + playcanvas。</li>
                            </ul>
                        </div>
                        <div class="part">
                            <label>责任描述：</label>
                            <ul>
                                <li>本人经历了产品从无到有的过程，在两周一个迭代周期的紧张开发过程中，每次都能在迭代周期内完成开发任务；</li>
                                <li>网站的60%页面及功能模块由本人完成（除3d部分外），解决过上百个bug；</li>
                                <li>本人在该项目过程中学习并了解了playcanvas、three.js库的使用及3d相关的技术。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2018.04 ~ 2018.06</span><span class="company-name">炫米科技</span><span class="project-name">白标app</span>
                    </h4>
                    <div class="work-content"> 
                        白标app是realibox网站应用模块生成的一个定制的app，主要功能为通过商品的3d展示及AR体验以达到导购的目的。主要技术栈为webpack + es6 + vue + playcanvas（产品的3d部分）。app前端部分（除AR功能模块）由本人独立完成，接手三天内掌握vue的使用并上手进行项目的开发，且对ios混合开发模式有一定的理解。
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2017.10 ~ 2018.04</span><span class="company-name">炫米科技</span><span class="project-name">realibox（主打产品）</span>
                    </h4>
                    <div class="work-content"> 
                        realibox是一个主打3d可视化的应用网站。主要技术栈为webpack + es6 + react + playcanvas（产品的3d部分）。本人经历了产品从无到有的过程，在两周一个迭代周期的紧张开发过程中，几乎每次都能在迭代周期内完成开发任务，网站的60%页面都由本人完成（除3d部分外），解决过上百个bug。同时在该项目过程中学习并了解了与3d相关的技术。
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2017.08 ~ 2017.10</span><span class="company-name">炫米科技</span><span class="project-name">完美黄金3D试戴项目（微信公众号）</span>
                    </h4>
                    <div class="work-content"> 
                        该项目包括两部分:为完美黄金公众号商城开发3d展示及试戴功能模块、为该商城开发一个珠宝后台管理系统。本人独立完成了珠宝后台管理系统的开发，并且参与了商城中珠宝的3d展示模块的开发，且该项目的后期维护工作由本人完成。
                    </div>
                </div>
                <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2017.05 ~ 2017.07</span><span class="company-name">炫米科技</span><span class="project-name">云鞋淘</span>
                    </h4>
                    <div class="work-content"> 
                        该项目是一个将3d与传统鞋行业结合的一个应用型网站，主要前端技术栈为webpack + es6 + react + nodejs + playcanvas。参与了该项目（除3d部分）40%的前端开发工作，通过该项目掌握了react框架，学习了es6新增的一些技术并得到了实践，最后凭借在该项目的表现直接通过了试用期。
                    </div>
                </div> -->
                <!-- <div class="content-item">
                    <h4 class="work-title">
                        <span class="work-time">2017.02 ~ 2017.05</span><span class="company-name">广州市中洪计算机服务有限公司（实习）</span><span class="project-name">某高校人事管理系统</span>
                    </h4>
                    <div class="work-content"> 
                        该项目是一个为某高校开发的人事管理系统，本人主要负责产品的静态页面开发，使用的技术为html + css + jquery。该项目有50%的页面是由本人完成，工作效率得到了项目负责人的认可。
                    </div>
                </div> -->
            </div>
        </div>
        <!-- <div class="info-item">
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
        </div> -->
        <div class="info-item">
            <h3 class="title">
                <!-- <svg aria-hidden="true">
                    <use xlink:href=#icon-evaluate></use>
                </svg> -->
                <span>自我评价</span>
            </h3>
            <div class="content">
                <ul class="self-evaluate">
                    <li>熟悉html5、css3、javascript</li>
                    <li>熟悉react，有react、vue、小程序等开发经验；</li>
                    <li>熟悉svn、git等代码管理工具，熟悉webpack，能独立搭建前端项目框架；</li>
                    <li>对可视化有一定的了解，正在持续学习相关的技术；</li>
                    <li>英语六级，良好的英文阅读能力。</li>
                    <!-- <li>在项目研发方面有一定的管理经验。</li> -->
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
