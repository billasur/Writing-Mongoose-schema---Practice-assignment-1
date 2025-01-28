const mongoose = require('mongoose');

const userFieldSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
        },
        roles: {
            type : [String]
        }

    }
)

const profileFieldSchema = new mongoose.Schema(
    {
        firstname : {
            type : String,
        },
        lastname : {
            type : String,
        },
        age : {
            type : Number,
        },

    }
)

const activityTrackingSchema = new mongoose.Schema(
    {
        lastLogin : {
            type: Date
        }
    }
)

module.exports = mongoose.model("User",userFieldSchema)
module.exports = mongoose.model("Profile",profileFieldSchema)
module.exports = mongoose.model("Activity",activityTrackingSchema)