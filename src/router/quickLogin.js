/**
 * Created by 严俊东 on 2017/3/23.
 */


const QuickLogin = resolve => {
    require.ensure(['./../components/quickLogin/Login.vue'], () => {
        resolve(require('./../components/quickLogin/Login.vue'));
    }, 'quickLogin');
};

export const quickLogin = {
    path: '/vue/quick-login',
    name: 'QuickLogin',
    component: QuickLogin,
    meta: {isPublish: true, requireAuth: false}
};