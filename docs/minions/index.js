const getMinions = require('./getMinions')
const getMinion = require('./getMinion')

module.exports = {
    paths : {
        '/api/minions' : {
            ...getMinions
        },
        '/api/minions/:minionId' : {
            ...getMinion
        }
    }
}