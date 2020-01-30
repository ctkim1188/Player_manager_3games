const Players = require('../models/player.models')

module.exports.displayAll = (req, res) => {
    Players.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err, {message: "something went wrong"}))
}

module.exports.addToRoster = (req, res) => {
    Players.create(req.body)
        .then(newPlayer => res.json({player : newPlayer}))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Players.deleteOne({ _id : req.params.id })
        .then(delPlayer => res.json(delPlayer))
        .catch(err => res.json(err, {message : "did NOT delete"}))
}

module.exports.updatePlayer = (req, res) => {
    Players.findOneAndUpdate({ _id : req.params.id }, req.body, {runValidators:true, new: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err))
}

module.exports.findPlayer = (req, res) => {
    Players.findOne({_id : req.params.id})
        .then(thePlayer => res.json(thePlayer))
        .catch(err => res.json(err))
}