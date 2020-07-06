import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [{
      path: 'heads',
      name: 'BrowseHeads',
      component: RobotHeads,
    }, {
      path: 'arms',
      name: 'BrowseArms',
      component: RobotArms,
    }, {
      path: 'bases',
      name: 'BrowseBases',
      component: RobotBases,
    }, {
      path: 'torsos',
      name: 'BrowseTorsos',
      component: RobotTorsos,
    },
    ],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid);
    },
  }],
});
