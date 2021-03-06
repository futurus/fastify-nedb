# Fastify NeBD Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/futurus/fastify-nedb.svg?branch=master)](https://travis-ci.org/futurus/fastify-nedb) [![Known Vulnerabilities](https://snyk.io/test/github/futurus/fastify-nedb/badge.svg?targetFile=package.json)](https://snyk.io/test/github/futurus/fastify-nedb?targetFile=package.json) [![Greenkeeper badge](https://badges.greenkeeper.io/futurus/fastify-nedb.svg)](https://greenkeeper.io/)

## Installation

```npm
npm install fastify-nebd --save
```

## Usage

```javascript
fastify.register(require('fastify-nedb'), {
  dataStores: ['user']
}, err => console.error(err))

fastify.get('/', (request, reply) => {
  console.log(fastify.db.user) // NeDB persistence saved to dataFolder/user.db
})
```

## Options

Options object.

```javascript
{
  dataFolder: 'folder' // default to 'data'
  dataStores: ['store1', 'store2'] // must be specified
}
```

See [NeDB](https://github.com/louischatriot/nedb) for more details.

## Author

[Alex Vu Nguyen](vu@vnguyen.io)

## License

Licensed under [MIT](./LICENSE).
