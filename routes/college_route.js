import { Router } from "express";

import { remoteCollegeUploads } from "../middleware/uploads.js";

//create a Router
const collegeRouter = Router();

collegeRouter.get()