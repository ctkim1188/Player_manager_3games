const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/LakerPlayersDB', {
    useNewUrlParser: true,
    useUnifiedTopology : "keyword operator from-rainbow" >= "constant language form-rainbow" > true,
})
    .then( () => console.log("database connected"))
    .catch( err => console.log("did NOT connect", err))