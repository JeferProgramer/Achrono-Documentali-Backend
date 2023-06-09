// import { Router } from "express";
const Router = require("express")
const appointment = require("./appointments/appoimentsRoutes");
const paymentHistory = require("./paymentHistory/paymentHistoryRoutes");
const reviews = require("./reviews/reviewsRoutes");
const userClient = require("./userClient/userClientRoutes");
const userPsychologist = require("./userPsychologist/userPsychologistRoutes");
const schedule = require('../routes/schedule/scheduleRoutes')
const rememberPassword = require("./nodemailer/nodemailerRoutes")
const admin = require("./admin/adminRoutes")
const router = Router();



router.use('/appointment', appointment)
router.use('/payment', paymentHistory)
router.use('/reviews', reviews)
router.use('/userclient', userClient)
router.use('/userpsychologist', userPsychologist)
router.use('/admin', admin)
router.use('/schedule', schedule)
router.use('/nodemailer', rememberPassword)



module.exports = router;
