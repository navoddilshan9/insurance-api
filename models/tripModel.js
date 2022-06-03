const mongoose = require('mongoose')

const TripSchema = mongoose.Schema({
    
    trip_id: {
        type: String,
        required: true,     
    },
    date: {
        type: String,     
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    destination: {
        type: String,     
    },
    distance_travelled: {
        type: String,     
    },  

})