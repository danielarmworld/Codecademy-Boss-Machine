const minionRouter = require('express').Router()

const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../server/db')

// Minions Controller
minionRouter.get('/', (req, res, next) => {
  const minions = getAllFromDatabase('minions')
  res.status(200).json(minions)
})

minionRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body)
  res.status(201).json(newMinion)
})

minionRouter.get('/:minionId', (req, res) => {
  const minions = getAllFromDatabase('minions')
  const len = minions.length
  if (req.params.minionId > 0 && req.params.minionId < len) {
    const minion = getFromDatabaseById('minions', req.params.minionId)
    res.status(200).json(minion)
  } else {
    res.status(404).json({ message: 'Minion not found' })
  }
})

minionRouter.put('/:minionId', (req, res) => {
  const minions = getAllFromDatabase('minions')
  const len = minions.length
  if (req.params.minionId > 0 && req.params.minionId < len) {
    const updatedMinion = updateInstanceInDatabase(
      'minions',
      req.params.minionId,
      req.body,
    )
    res.status(200).json(updatedMinion)
  } else {
    res.status(404).json({ message: 'Minion not found' })
  }
})

minionRouter.delete('/:minionId', (req, res) => {
  const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId)
  if (deletedMinion) {
    res.status(204).send()
  } else {
    res.status(404).json({ message: 'Minion not found' })
  }
})

module.exports = minionRouter
