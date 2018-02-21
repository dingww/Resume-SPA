import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import Experience from './views/experience.vue';
import Education from './views/education.vue';
import Projects from './views/projects.vue';
import About from './views/about.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['./views/home.vue'], resolve)
    },{
        path: '/experience',
        component: Experience
    },{
        path: '/projects',
        component: Projects
    },{
        path: '/education',
        component: Education
    },{
        path: '/about',
        component: About
    }]
})