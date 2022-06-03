const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    
    payment_no: {
        type: String,
        required: true,     
    },
    payment_date_time: {
        type: String,     
    },
    payment_amount: {
        type: String,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },

})