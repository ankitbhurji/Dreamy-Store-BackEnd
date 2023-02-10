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



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res)=>{
    res.send('this is test')
})



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

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});