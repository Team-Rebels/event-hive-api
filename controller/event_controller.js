import { EventModel } from "../models/events_models.js";


//post controller


export const getEvent = async (req, res, next) =>{
   try {
    const addData = await EventModel.create(re.body)
    res.status(201).json(addData)
    
   } catch (error) {
    next(error)
    
   } 
}