var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var producerSongsGeneralSchema = new Schema({
producerId: {type: Number, index: true },
    songs: [
        {
            songId: Number,
            counterTotal: Number,
            counterInternal: Number,
            counterAgeGroup1: Number,
            counterAgeGroup2: Number,
            counterLocal: Number
        }
    ],
    ListeningNow: [
        {
            userId: Number,
            songId: Number
        }
    ],
    totalCounter: Number,
    internalCounter: Number,
    ageGroup1Coutner: Number,
    ageGroup2Counter: Number,
    counterLocal: Number,
    FBHISTORY: {
        history: String
    },
    YTHISTORY: {
        history: String
    }
});