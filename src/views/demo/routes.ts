export default {
  path: '/demo',
  component: {
    template: '<router-view />',
  },
  children: [
    {
      path: '',
      name: 'demo',
      component: () => import('./demo'),
    },
  ],
}
