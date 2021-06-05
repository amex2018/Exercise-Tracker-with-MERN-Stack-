const route = require('express').Router();
let UserDB = require('../model/user');

// retrieve users
route.get('/', (req, res) =>{
    UserDB.find().then(user => res.send(user))
    .catch(err => {
        res.status(500).send()
    })
})

route.post('/useradd', (req, res) => {
    const newuser = UserDB({
        username: req.body.username
    });

    if(!req.body){
        res.status(404).send('not found');
    }
   newuser.save().then((data) =>{
       res.send(data);
       console.log('user is inserted')
   })
   .catch(err =>{
       res.status(500).send('Internal server errors')
   })
})

module.exports=route;