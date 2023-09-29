const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'https://api.udyamuplift.in', // Only allow requests from your website
    // origin: 'http://localhost:3000', // Only allow requests from your website
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and authentication headers
};

app.use(cors(corsOptions));
app.use(express.json());

const connectToMongo = require("./src/mongodb/config");
connectToMongo();

//routes
app.use("/api/user", require("./src/api/user"));
app.use("/api/admin", require("./src/api/admin"));


app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})