const express = require('express');

const postsRouter = require("./routers/postsRouter");
const categoryRouter = require('./routers/categoryRouter');
const tagRouter = require('./routers/tagRouter');

const app = express();

const port = 3000;

app.use(express.json());

app.use('/', postsRouter);
app.use('/category', categoryRouter)
app.use('/tag', tagRouter)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
