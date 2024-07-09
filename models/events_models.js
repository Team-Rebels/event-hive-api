import { Schema, model, Types } from "mongoose";

//create schemas
const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true,

    },

    collegeId: {
        type: Types.ObjectId, ref: 'college',
        required: true,
        unique: true,
    },

    location: {
        type: String,
        required: true,
    },

    date: {
        required: true,
        type: Date,

    },

    tags: {
        type: Array,
        type: String,
    },



    type: {
        type: Array,
        enum: ['online', 'offline'],
    },


    banner: {
        type: String,

    },

    createdBy:{
        required:true
    }
},

    {
        timestamps: true

    }

)

export const EventModel = model('event', eventSchema)
