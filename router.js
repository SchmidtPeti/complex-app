const express = require('express');
const router = express.Router();
const userContoller = require('./controllers/userContoller');

router.get('/',userContoller.home)
router.post('/register',userContoller.register);

router.get('/about',(req,res) => {
    res.send("This is our about page");
});

module.exports = router;