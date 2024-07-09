import { CollegeModel } from "../models/college_model.js";


// Get All College
export const getColleges = async (req, res, next) => {
    try {
        const college = await CollegeModel.find()
        res.status(200).json(college)
    } catch (error) {
        next(error)
    }
};

// Get A college
export const getCollege = async (req, res, next) => {
    try {
        const college = await CollegeModel.findById(req.params.id)
        res.status(200).json(college)
    } catch (error) {
        next(error)
    }
}



//Create A College
export const postCollege = async (req, res, next) => {
    try {
        const postedCollege = await CollegeModel.create(req.body)
        res.status(201).json(postedCollege)
    } catch (error) {
        next(error)
    }
};
//Update A college
export const updateCollege = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const updatedData = await CollegeModel.findByIdAndUpdate(
            { _id: eventId },
            req.body,
            { new: true })

        res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
};
//Delete A College
export const deleteCollege = async (req, res, next) => {
    try {
        const deletedCollege = await CollegeModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedCollege)
    } catch (error) {
        next(error)
    }
}

