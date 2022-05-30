require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const PORT = 5000;
const mongoURl = process.env.MONGODB_URL;
const cors = require('cors')
const morgan = require('morgan');

const UserRoutes = require('./routes/user');
const TaskRoutes = require('./routes/task');


app.use(express.json());
app.use(cors())

// Morgan as a logger to see incoming requests
app.use(morgan('dev'));

mongoose.connect(mongoURl, (error)=>{
    if(error){
        console.error(`There is error, ${error}`);
    }else {
        console.log("Succefully connected to Database");
    }
})

// app.get('/', (req,res)=>{
//     res.send("Hello");
// })

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/tasks', TaskRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})