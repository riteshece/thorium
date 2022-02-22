const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})



 router.get('/movie',function(req,res){
     let movieName=['pink','Piku','black','jung','Mirzapur']
     res.send(movieName)
 })




  router.get('/movie/:index',function(req,res){
    let movieName=['pink','Piku','black','jung','Mirzapur']
      let rit=req.params.index
      if(rit>movieName.length-1)
      {
          res.send("not exist")
       }
       else{
           res.send(movieName[rit])
       } 

  })



 router.get('/films',function(req,res){
     const film=[
         {
        "id":1 ,"name":"school"
       },
        {
        "id":2 ,"name":"college"
       }, 
       {
        "id":3, "name":"hostel"
       },
        {
        "id":4 ,"name":"mess"
       }
    ]
    res.send(film)
})




router.get('/films/:id', function(req,res){
      let rit2=req.params.id;

      const film=[
        {
       "id":1 ,"name":"insidious"
      },
       {
       "id":2 ,"name":"women in black"
      }, 
      {
       "id":3, "name":"conjuring"
      },
       {
       "id":4 ,"name":"looper"
      }
   ]

      if(rit2>=film.lendth){
        res.send("not exist")
    }
    else
    { for(let i=0;i<film.length;i++)
        { 
            if(film[i].id==rit2){
              res.send(film[i])
        }
    }
    } 
    res.send(film)
})
 
module.exports = router;