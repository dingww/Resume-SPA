import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Experience from "./views/experience.vue";
import Education from "./views/education.vue";
import Projects from "./views/projects.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import Static from "./views/static.vue";
import config from './core/config.js';

Vue.use(Router);
let routes = [];
if (config.isStatic) {
    routes = [
        {
            path: "/",
            component: Static,
        }
    ];
} else {
    routes = [
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/experience",
            component: Experience
        },
        {
            path: "/projects",
            component: Projects
        },
        {
            path: "/education",
            component: Education
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "contact",
            component: Contact
        }
    ];
}

export default new Router({
    routes: routes
});
