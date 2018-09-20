const fp = require('fastify-plugin')

function fastify-nedb (fastify, opts, next) {
  // Do something with NeDB here

  next()
}


module.exports = fp(fastify-nedb, {
  fastify: '1.x',
  name: 'fastify-nedb'
})
