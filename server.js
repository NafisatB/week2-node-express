const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/echo', (req, res) =>{
    res.json({echoed: req.body});
});


app.get('/', (req, res) => {
  res.send('Hello from Express.js!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
