import AddList from './AddList'
import Homepage from './Homepage'
import Lists from './Lists'

const config = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/create',
    element: <AddList />
  },
  {
    path: '/lists',
    element: <Lists />
  }
]

export default config