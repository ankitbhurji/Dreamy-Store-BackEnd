require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
var cors = require('cors');
app.use(cors());
connetion = require('./Database/db');
connetion();

const Admin = require('./routes/StoreAdmin');
const Discover = require('./routes/StoreProducts');

app.use('/api/storeadmin', Admin)
app.use('/api/storeproducts', Discover)





app.get("/health", (_, res)=>{
    res.send({
        status: "SERVER IS HEALTHY!", 
        Time: new Date()
    });
});

app.use((req, res, next)=>{
    res.status(404).send("ENTER VALID URL!")
});

app.use((err, req, res, next)=>{
    res.status(500).send("SOMETHING WENT WRONG!")
});

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
});