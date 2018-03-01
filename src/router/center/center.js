const Center = (resolve) => {
  import('@/components/center/center').then((module) => {
    resolve(module)
  })
}

const evalute = [{
  path: '/center',
  component: Center,
  name: 'center',
  meta: { title: '个人中心' }
}]

export default evalute
