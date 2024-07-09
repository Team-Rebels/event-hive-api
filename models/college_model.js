import { Schema, model } from "mongoose";
// import 'dotenv/config'
import { toJSON } from "@reis/mongoose-to-json";

//create schema

const collegeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    

},
{
    timestamps: true
}

);





 collegeSchema.plugin(toJSON)
export  const CollegeModel = model('college', collegeSchema);