const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./server/routes/player.routes')

require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(9000, () => {
    console.log("9000 is active")
})