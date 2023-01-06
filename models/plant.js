const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
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
    comments: [commentSchema],
    userSelling: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Plant', plantSchema);
