const express = require('express');
const router = express.Router();
const { 
    mainPageController, 
    myPageController, 
    myQuestPageController, 
    questPageController,
    tokenController 
} = require('../controller')

// Main Page API
router.post('/emailSignIn', mainPageController.emailSignIn.post)
router.post('/emailSignUp', mainPageController.emailSignUp.post)
router.post('/applyMentor', mainPageController.applyMentor.post)
router.get('/main', mainPageController.main.get)
// Token Handler API
router.get('/accessTokenHandler', tokenController.accessTokenHandler.get)
router.get('/refreshTokenHandler', tokenController.refreshTokenHandler.get)
// User Modal & My Page API
router.get('/signOut', myPageController.signOut.get)
router.get('/userInfoSetting/pageload', myPageController.setAccount.get)
router.post('/userInfoSetting/setAccount', myPageController.setAccount.post)
router.get('/mentorInfoSetting/pageload', myPageController.setMentor.get)
router.post('/mentorInfoSetting/setMentor', myPageController.setMentor.post)
// Question Page API 생성
router.post('/askQuestion', questPageController.sendQ.post)
router.get('/getQuestion', myQuestPageController.getQ.get)
questPageController.sendQ
module.exports = router;