let express = require("express");

let app = express();

// configuration
app.set("case sensitive routing", true);

app.use('/users',(req,res,next)=>{
    console.log("users");
    next();
})

app.listen(3000, () => {
  console.log("Example app listening on port http://localhost:3000");
});
