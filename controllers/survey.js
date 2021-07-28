const User = require('../models/user')
const Survey = require('../models/survey')
exports.updateSurvey=(req,res,next)=>{
 let eachSurvey=[]
 
 req.body.user=`${req.profile._id}`

eachSurvey.push(req.body)
 
//store this in DB
User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: {survey: eachSurvey} }, //since its array we use push
    { new: true }, //it returns the updated data not the old one
    (err, eachSurvey) => {
      if (err) {
        return res.status(400).json({
          error: 'Unable to save the survey',
        })
      }
      next()
    },
  )
}
exports.surveyPost=(req,res)=>{ 
 //since order uses users details-check order models  ,we get user details from the getuserById params
  //order.user -order-model,user-field of order
  console.log(req)
  req.body.user = req.profile._id  //req.profile-params that give users details
  const survey = new Survey(req.body)
  survey.save((err, survey) => {
    if (err) {
      return res.status(400).json({ error: 'Failed to save the survey' }) 
    }
    return res.json(survey)
  })
}

exports.getallSurvey=(req,res)=>{
  let id=req.profile._id
  req.profile.survey.user=undefined
  User.findOne({_id:id}).exec((err,user)=>{
    if (err) {
      return res.status(400).json({ error: 'No Orders found' })
    }
    
    return res.json(user.survey)

  })

}