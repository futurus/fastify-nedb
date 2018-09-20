const fp = require('fastify-plugin')
const NeDB = require('nedb')
const path = require('path')
const fs = require('fs-extra')

const defaultOptions = require('./package.json').config

function fastifyNeDB (fastify, opts, next) {
  const { dataFolder, dataStores } = Object.assign({}, defaultOptions, opts)

  if (!dataStores || !Array.isArray(dataStores)) {
    return next(new Error('Need to specify at least one data store.'))
  }

  const db = {}

  // Create data folder
  if (!fs.existsSync(path.resolve(`./${dataFolder}`))) { fs.mkdirSync(path.resolve(`./${dataFolder}`)) }

  // Create persistence data stores and load them
  for (const dataStore of dataStores) {
    db[dataStore] = new NeDB({
      filename: `${dataFolder}/${dataStore}.db`,
      autoload: true
    })
  }

  fastify.db = db

  next()
}

module.exports = fp(fastifyNeDB, {
  fastify: '1.x',
  name: 'fastify-nedb'
})
