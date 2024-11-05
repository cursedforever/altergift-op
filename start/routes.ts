/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PoolsController = () => import('#controllers/pools_controller')
const HomeController = () => import('#controllers/home_controller')
const GiftsController = () => import('#controllers/gifts_controller')
const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.get('/', [HomeController, 'render']).as('home')

    router
      .group(() => {
        router.get('/login', [AuthController, 'renderLogin']).as('auth.login')
        router.post('/login', [AuthController, 'handleLogin']).as('auth.handleLogin')

        router.get('/register', [AuthController, 'renderRegister']).as('auth.register')
        router.post('/register', [AuthController, 'handleRegister']).as('auth.handleRegister')

        router.post('/logout', [AuthController, 'handleLogout']).as('auth.logout')
      })
      .as('auth')

    router
      .group(() => {
        router.get('/:pool_slug', [PoolsController, 'show']).as('pools.show')
        router
          .get('/:pool_slug/participate', [PoolsController, 'renderParticipate'])
          .as('pools.participate')
      })
      .prefix('/pools')

    router.post('/gifts', [GiftsController, 'handleCreate']).as('gifts.create')
    router.patch('/gifts/:gift_id', [PoolsController, 'handleUpdate']).as('gifts.update')
    router.delete('/gifts/:gift_id', [PoolsController, 'handleDelete']).as('gifts.delete')
  })
  .use(middleware.silentAuth())
