const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: String,
    plantImg: [],
    maintenance: String,
    lightReq: String,
    waterReq: String,
    petSafe: Boolean,
    comment: []
});

module.exports = mongoose.model('Plant', plantSchema);