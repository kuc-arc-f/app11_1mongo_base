var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

import LibMongo from "../libs/LibMongo"
import LibAuth from "../libs/LibAuth"
import LibCsrf from "../libs/LibCsrf"
import LibCommon from "../libs/LibCommon"

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    var result = await LibMongo.get_array("users") 
    var param = {"docs": result };
    res.json(param)            
  } catch (err) {
    console.log(err);
    res.status(500).send();    
  }     
});

/******************************** 
* 
*********************************/
router.get('/add', function(req, res, next) {
  LibCsrf.set_token(req, res) 
  res.render('users/add', {});
});
/******************************** 
* 
*********************************/
router.post('/add', async function(req, res, next){
    try{ 
        if(LibCsrf.valid_token(req, res)== false){ return false; }
        let data = req.body
        console.log( data );
        let hashed_password = bcrypt.hashSync(data.password, 10);
        var item = {
            name: "",
            mail: data.email ,  
            password: hashed_password ,
            created_at: new Date()
        };        
        await LibMongo.add_item("users" ,item )
        req.flash('success', 'Complete, save User'); 
        res.redirect('/')          
    } catch (e) {
        console.log(e);
        req.flash('err', 'Error ,save User');
        res.redirect('/')        
    }    
});

module.exports = router;
