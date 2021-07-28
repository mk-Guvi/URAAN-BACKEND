const express = require('express')
const router = express.Router()

const { isSignedIn, isAuthenticated,getUserById} = require('../controllers/auth')
const {surveyPost,updateSurvey,getallSurvey}=require("../controllers/survey")

router.param("userId", getUserById)

router.post('/survey/:userId', isSignedIn, isAuthenticated, updateSurvey,surveyPost)

router.get('/survey/getallsurvey/:userId',isSignedIn,isAuthenticated,getallSurvey)


module.exports = router