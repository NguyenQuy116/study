const express = require('express')
const APIRoutes = require('./routes/api')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/todoApp", APIRoutes)

const port = parseInt(process.env.PORT);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});