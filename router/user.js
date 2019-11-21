const express = require('express');
const router = express.Router();
const data = require('../data');
const perfumeData = data.perfume;
const userData = data.users;

//get information from log in page
router.post('/',async(req,res)=>{
    let username = req.body.personame;
    let userpassward = req.body.passward;
    const personinfor={
        
    };
    try{
       personinfor=await userData.getOneuser(username,userpassward);  
    }catch(e){
        res.status(400).json(e);
    } 
    const personreview=await perfumeData.getUserreview(per);



});

router.post('/new',async(req,res)=>{

})