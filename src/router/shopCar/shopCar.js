const ShopCar = resolve => {
  import('@/components/shopCar/shopCar').then(module => {
    resolve(module)
  })
}

const shopCar = [
  {
    path: '/shopCar',
    component: ShopCar,
    name: 'shopCar',
    meta: { title: '收货评价' }
  }
]

export default shopCar
