const express = require('express');
const app = express();
const port = 3001;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});