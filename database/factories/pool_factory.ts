import Pool from '#models/pool'
import factory from '@adonisjs/lucid/factories'
import { GiftFactory } from './gift_factory.js'

export const PoolFactory = factory
  .define(Pool, async ({ faker }) => {
    return {
      name: faker.lorem.word(),
      imageUrl: faker.image.urlPicsumPhotos(),
    }
  })
  .relation('gifts', () => GiftFactory)
  .build()
