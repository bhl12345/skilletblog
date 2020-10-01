let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');


const commentRoute = require('../server/routes/comment-routes')


mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(cors());
server.use('/comments', commentRoute)


const port = process.env.PORT || 4000;
 server.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error Handling
server.use((req, res, next) => {
    next(createError(404));
});

server.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});