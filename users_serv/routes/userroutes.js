const express = require('express')
const router = express.Router()
const {
  createUser,
  getUserByUsername
} = require('../controlers/usercontroler')

router.post('/', createUser)
router.get('/:username', getUserByUsername)

module.exports = router
