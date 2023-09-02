import { Router } from "express";
import { byBirthDay, getUsers, getUsersSalaryLessThan, getUsersSalaryMoreThan, searchCountry, searchJob, searchNameAndEmail } from "../controllers/controller.js";

const router  = Router()

router.get('/users', getUsers)
router.get('/users/salaryMore', getUsersSalaryMoreThan)
router.get('/users/salaryLess', getUsersSalaryLessThan)
router.get('/users/search/nameAndEmail', searchNameAndEmail)
router.get('/users/search/job', searchJob)
router.get('/users/search/country', searchCountry)
router.get('/users/search/birthday', byBirthDay)

export  default router 