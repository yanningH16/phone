const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const First = (resolve) => {
  import('@/components/home/first').then((module) => {
    resolve(module)
  })
}

const home = [{
  path: '/home',
  component: Home,
  name: 'home',
  meta: { title: '首页' }
},
{
  path: '/first',
  component: First,
  name: 'first',
  meta: { title: '次页' }
}]

export default home
