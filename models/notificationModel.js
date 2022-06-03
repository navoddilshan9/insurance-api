const mongoose = require('mongoose')

const NotificationSchema = mongoose.Schema({
    
    notification_id: {
        type: String,
        required: true,     
    },
    description: {
        type: String,     
    },
    date_time: {
        type: String,
    },  

})