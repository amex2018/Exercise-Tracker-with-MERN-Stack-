const route = require('express').Router();
const exercise = require('../model/exercise');
let exerciseDB = require('../model/exercise');


// retrieve exercises list
route.get('/', (req, res) =>{
   exerciseDB.find().then(exercise => res.send(exercise))
   .catch(err => {
       res.status(500).send()
   })
})


// create exercise 
route.post('/addexercise', (req, res) => {
    const newexercise = exerciseDB({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    });
     if(!req.body){
         res.status(404).send('No found data!!')
     }
        newexercise.save().then((data) => {
            res.send(data)
            console.log('user is inserted')
        })
        .catch(err => {
            res.status.send('internal server error');
        })
    
    
})


// Api singal exercise retrieve
route.get('/:id', (req, res) =>{   
    exerciseDB.findById(req.params.id).then(exercise => {res.send(exercise)})
    .catch(err => {
        res.status(500).send(err)
    })
})


// API exercise delete
route.delete('/:id', (req, res) => {
    exerciseDB.findByIdAndDelete(req.params.id).then(exercise => {res.send(exercise)})
    .catch(err =>{
        res.status(500).send(err);
    })
})


//Api update exercise information
route.post('/update/:id', (req, res) =>{
    exerciseDB.findById(req.params.id).then(exercise =>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save().then((data) => res.send(data))
        .catch(err =>{
            res.status(500).send(err);
        })
        .catch(err =>{
            res.status(500).send(err);
        })
    })
})
module.exports = route;