const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: {
        type: String
    },
    comment: {
        type: String
    }
}, {
        collection: 'pontificatingpeasant'
    })

module.exports = mongoose.model('Comment', commentSchema)