const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: String,
    plantImg: [],
    lightReq: String,
    petSafe: Boolean,
    comment: []
});

module.exports = mongoose.model('Plant', plantSchema);