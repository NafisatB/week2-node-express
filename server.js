require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

// Middleware (Json parsing)

app.use(express.json());

// custom logging of middleware
app.use((req, res, next)=>{
  console.log(`${req.body} ${req.url} - ${new Date}`)
  next();
});

// Serve a static HTML page at /
app.use(express.static(path.join(__dirname, "public")));

// GET / "My week 2 API"
app.get("/api", (req, res)=>{
  res.send("My Week 2 API!");
})

// POST /user {name, email}

app.post("/user",(req, res)=>{
  const {name, email} = req.body;
  if(!name || !email){
    return res.status(400).json({
      error: "Missing required fields: name and email",
    });
  }else {
    return res.json({message: `Hello, ${name},your email is ${email}`})
  }
});

// GET /user/:id

app.get("/user/:id", (req, res)=>{
  const id = req.params.id;
  res.send(`User ${id} profile`)
})

// start server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
});

