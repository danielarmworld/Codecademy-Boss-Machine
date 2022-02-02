const documentation = require('./documentation')
const server = require('./server')
const components = require('./components')
const minions = require('./minions')

module.exports = {
  ...documentation,
  ...components,
  ...minions,
}
