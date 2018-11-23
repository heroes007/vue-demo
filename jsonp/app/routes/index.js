var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp',(req,res)=>{
    res.jsonp({
        data:"一些信息",
        msg:"吃饭睡觉打豆豆",
        code:200
    })
})

router.get('/getMsg',(req,res) => {
    res.header("Access-Control-Allow-Origin","*")

    res.json({
        data:"一些信息",
        msg:"吃饭睡觉打豆豆",
        code:200
    })
})

module.exports = router;
