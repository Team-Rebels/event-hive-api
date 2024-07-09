import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";




export const remoteCollegeUploads = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/event-hive/college/*',
    })
})
export const remoteeventUploads = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/event-hive/event/*',
    })
})