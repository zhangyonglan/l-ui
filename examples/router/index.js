import Vue from 'vue';
import Router from 'vue-router';
// import navConf from '@/nav.config.json';
Vue.use(Router);

// let routes=[];

// Object.keys(navConf).forEach(header=>{
//     routes=routes.concat(navConf[header])
// })
// let addComponent=router=>{
//     router.forEach(route=>{
//         if(route.items){
//             addComponent(route.items);
//             routes=routes.concat(route.items);
//         }else{
//             route.component=r=>require.ensure([],()=>r(require(`../docs/${route.name}.md`)))
//         }
//     })
// };
// addComponent(routes);
// let availableRoutes=routes.filter(item=>item.path);

let routes=[
    {
      name: '开始',
      path: '/start',
      component: () => import('@/docs/start.md')
    },{
        path:'/hello',
        component: () => import('@/components/HelloWorld')

    }
]
export default new Router({
    routes:routes
})