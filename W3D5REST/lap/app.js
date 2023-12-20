let express = require("express")
let studentRouter = require("./router/studentRouter");
let app = express();
let cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/students", studentRouter)

app.listen(3000, () => {
    console.log('Server is started on 3000');
})