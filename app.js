const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let firstArr = ["first arr"]
let lastArr = ["last arr"]

app.post('/addTask', (req,res)=>{
const addTask = req.body.addNewTask
firstArr.push(addTask)
res.redirect('/')
})

app.post('/removeTask',(req,res)=>{
    const addtaskkToRemove = req.body.checkk
    console.log(addtaskkToRemove)
   
   if(typeof addtaskkToRemove === 'string'){
    lastArr.push(addtaskkToRemove)
    firstArr.splice(firstArr.indexOf(addtaskkToRemove), 1)
   }else if(typeof addtaskkToRemove === 'object'){
    for(let i = 0; i < addtaskkToRemove.length; i++){
        lastArr.push(addtaskkToRemove[i])
        firstArr.splice(firstArr.indexOf(addtaskkToRemove[i]), 1)
    }
   }
    res.redirect('/')
})

app.get('/', (req,res)=> {
    res.render("index",{firstArr: firstArr, lastArr: lastArr})
})


app.listen(3000)