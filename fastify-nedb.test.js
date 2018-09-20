'use strict'

const Fastify = require('fastify')

const fastifyNeDB = require('./fastify-nedb')

describe('fastify-nedb', () => {
  let fastify

  beforeEach(async () => (fastify = Fastify()))

  afterEach(async () => fastify.close())

  test('should throw an error if no datastore is specified', async () => {
    try {
      await fastify.register(fastifyNeDB, {})
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      fastify.close()
    }
  })

  test('should create datastores', async () => {
    const dataStores = ['user', 'comment']

    await fastify
      .register(fastifyNeDB, {
        dataStores: dataStores
      })
      .ready()

    for (const dataStore of dataStores) {
      expect(fastify.db[dataStore]).toBeDefined()
    }
    expect(fastify.db.notExist).toBeUndefined()
  })
})
