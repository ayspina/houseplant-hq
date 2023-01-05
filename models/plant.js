const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    content: String
});

const plantSchema = new Schema({
    name: String,
    plantImg: [],
    maintenance: String,
    lightReq: String,
    waterReq: String,
    petSafe: Boolean,
    price: Number,
    stillAvailable: Boolean,
    location: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Plant', plantSchema);
