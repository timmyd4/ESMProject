//Import express
import express from 'express';

//Set app to use express api
const app = express();

//Configure requests and responses
app.get("/", (req, res) => {
    res.send("Hello World");
})

//Define a port
const PORT = 3000;

//Listen on the port
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))