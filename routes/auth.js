const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { signout, signup, signin } = require('../controllers/auth')

router.post(
  '/signup',
  [
    check('firstname')
      .isLength({ min: 3 })
      .withMessage('firstName should be atleast 3 char'),
    // check('lastname')
    //   .isLength({ min: 3 })
    //   .withMessage('lastName should be atleast 3 char'),
    check('email').isEmail().withMessage('Email required'),
    check('password')
      .isLength({ min: 3 })
      .withMessage('password should be atleast 3 char'),
  ],
  signup,
)
router.post(
  '/signin',
  [
    check('email').isEmail().withMessage('Email required'),
    check('password').isLength({ min: 1 }).withMessage('password required'),
  ],
  signin,
)
router.get('/signout', signout)

module.exports = router
