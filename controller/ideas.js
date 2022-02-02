const ideasRouter = require('express').Router()

const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../server/db')

const checkMillionDollarIdea = require('../server/checkMillionDollarIdea');

// Ideas Controller
ideasRouter.get('/', (req, res, next) => {
  const ideas = getAllFromDatabase('ideas')
  res.status(200).json(ideas)
})

ideasRouter.post('/',checkMillionDollarIdea, (req, res, next) => {
  const newIdeas = addToDatabase('ideas', req.body)
  res.status(201).json(newIdeas)
})

ideasRouter.get('/:ideaId', (req, res) => {
  const ideas = getAllFromDatabase('ideas')
  const len = ideas.length
  if (req.params.ideaId > 0 && req.params.ideaId < len) {
    const idea = getFromDatabaseById('ideas', req.params.ideaId)
    res.status(200).json(idea)
  } else {
    res.status(404).json({ message: 'Idea not found' })
  }
})

ideasRouter.put('/:ideaId',checkMillionDollarIdea, (req, res) => {
  const ideas = getAllFromDatabase('ideas')
  const len = ideas.length
  if (req.params.ideaId > 0 && req.params.ideaId < len) {
    const updatedIdea = updateInstanceInDatabase(
      'ideas',
      req.params.ideaId,
      req.body,
    )
    res.status(200).json(updatedIdea)
  } else {
    res.status(404).json({ message: 'Idea not found' })
  }
})

ideasRouter.delete('/:ideaId', (req, res) => {
  const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId)
  if (deletedIdea) {
    res.status(204).send()
  } else {
    res.status(404).json({ message: 'Idea not found' })
  }
})

module.exports = ideasRouter