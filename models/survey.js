const mongoose = require('mongoose')
const { Schema, model } = mongoose

const surveySchema=new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
    name: {
        type: String,
        required:true
      },
      age:{
        type: Number,
        required:true
      },
      gender:{
        type: String,
        enum: ["male", "female","other"]
      },
      occupation:{
        type: String,
        required:true
      },
      education:{
        type: String,
        required:true
      },
      address:{
        type: String,
        required:true
      },
      city:{
        type: String,
        required: true,
        trim: true,
      },
      state:{
        type: String,
        required: true,
        
        trim: true,
      },
      pincode:{
        type:Number,
        required:true,
        maxlength: 6,
  
      },
      marital_status:{
        type: String,
        enum: ["married","unmarried"]
      }

},
{ timestamps: true }, //whenever a new entry is created in this schema it will store its time in db
)
const Survey = model('Survey', surveySchema)

module.exports = Survey