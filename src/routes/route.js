const express =require('express');
const router =express.Router();
let players = [ 
    {
          
         "name": "manish",
         "dob": "1/1/1995",
         "gender":"male",
         "city": "jalandhar",
         "sports": [ " swimming"],
         "bookings": [

            {
                "bookingNumber":1,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "12345",
                "bookedOn":"31/08/2021",
                "bookedFor":" 01/09/2021"
            },
            {
                "bookingNumber":2,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "123456",
                "bookedOn":"31/08/2021",
                "bookedFor":" 03/09/2021"
            }

         ]
  },
 
 
  {
    "name": "Ranjit",
    "dob": "1/3/1998",
    "gender":"male",
    "city": "jalandhar",
    "sports": [ " swimming"],
    "bookings": [   ]

 },

  {

    "name": "mohan",
    "dob": "1/2/1999",
    "gender":"male",
    "city": "jalandhar",
    "sports": [ " swimming"],
    "bookings": [  ]




  }

]

let a = players.length;

// Part 1 ==> Add new player.

router.post('/player',function(req,res){

let ele = req.body.nplayer.name;
let ele2 = req.body.nplayer
for (let i=0;i<a;i++){
if(ele === players[i].name ){
    console.log(ele)
    res.send("player already exists")
    
   
}
else if (i === a-1){

    players.push(ele2)
    console.log(ele2)
    res.send({data :players , status : true})
   
}

}





})





module.exports = router;