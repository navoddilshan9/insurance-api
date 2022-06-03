const mongoose = require('mongoose')

const AccidentSchema = mongoose.Schema({
    
    description: {
        type: String,     
    },
    date: {
        type: String,     
    },
    time: {
        type: String,
        required: true,
    },
    location_coordinates: {
        type: String,
        required: true,
    },   

})