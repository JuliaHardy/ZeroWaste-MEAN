const mongoose = require('mongoose');
const UserSchema = require('../models/user').UserSchema;

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5
    },
    description: {
        type: String,
        required: true,
        maxlength: 220,
        minlength: 10
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    eventDate: {
        type: Date,
        required: true
    },

    likesUserList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dislikesUserList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: UserSchema,
    participants: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventLocation: {
        type: String,
        required: true,
    }

});

const Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getAllEvents = function (callback) {
    Event.find(callback);
};

module.exports.addEvent = function (newEvent, callback) {
    newEvent.save(callback);
<<<<<<< HEAD
};

module.exports.deleteEvent = function (idEvent, callback) {
    Event.findByIdAndRemove(idEvent, callback);
=======
>>>>>>> 83353720f7f792dd43f6ada05b515ff8c1fa8115
};