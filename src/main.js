import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About'
//import Home1 from './components/Home1'
import Setting from './components/Setting' 
import User from './components/User' 
import PageNotFound from './components/PageNotFound' 



Vue.use(VueRouter);
const routes =[
  //{path:'/',component:Home1},
  {path:'/about',component:About},
  {path:'/setting',component:Setting},
  {path:'/user/:id',component:User},
  {path:'*',component:PageNotFound}

]
const router =new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.filter("Ucase",function(val){
  return val.toUpperCase()
})
Vue.filter("currencyConvert",function(val){
return val*75.78
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
