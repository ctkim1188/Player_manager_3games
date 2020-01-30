const PlayerController = require('../controllers/player.controller')

module.exports = app => {
    app.get('/api/lakers/players', PlayerController.displayAll),
    app.get('/api/lakers/:id', PlayerController.findPlayer),
    app.post('/api/lakers/add', PlayerController.addToRoster),
    app.delete('/api/lakers/:id', PlayerController.deletePlayer),
    app.put('/api/lakers/:id', PlayerController.updatePlayer)
}