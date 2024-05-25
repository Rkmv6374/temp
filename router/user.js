const express  = require ("express")
const router = express.Router();
const usermodel = require('../model/user.js')


//  crud operation on user  profile 
// put operation on user profile  

router.put('/:id',async(req,res)=>
{
    try{
      const userId = req.params.id;
      
    }
    catch(err)
    {

    }
})

// delete 

router.delete('/:id',async(req,res)=>
{
    try{
        const userId = req.params.id;
        if(userId != req.body.id) res.status(505).json("UserId is not authorize with submitted data")
        else{
         
        }
    }
    catch(err)
    {

    }
})