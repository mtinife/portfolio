"use strict";

var _interopRequireDefault = require("/run/media/mt/mmt/workspace_1/projects/portfolio/vue-portfolio/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueRouter = require("vue-router");

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _AboutView = _interopRequireDefault(require("../views/AboutView.vue"));

var _ProjectsView = _interopRequireDefault(require("../views/ProjectsView.vue"));

var _ServicesView = _interopRequireDefault(require("../views/ServicesView.vue"));

var _ContactView = _interopRequireDefault(require("../views/ContactView.vue"));

// import Vue from "vue";
// Vue.use(createRouter);
var routes = [{
  path: "/",
  name: "Home",
  component: _HomeView.default
}, {
  path: "/about",
  name: "About",
  component: _AboutView.default
}, {
  path: "/projects",
  name: "Projects",
  component: _ProjectsView.default
}, {
  path: "/services",
  name: "Services",
  component: _ServicesView.default
}, {
  path: "/contact",
  name: "Contact",
  component: _ContactView.default
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes,
  scrollBehavior: function scrollBehavior() {
    return {
      top: 0,
      left: 0
    };
  }
});
var _default = router;
exports.default = _default;