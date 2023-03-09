const userController = require('./userController')
const router = require('express').Router()

router.get('/getUsers',userController.getUser)
router.post('/addUser',userController.addUser)
router.post('/updateUser',userController.updateUser)
router.delete('/deleteUser',userController.deleteUser)

module.exports = router 