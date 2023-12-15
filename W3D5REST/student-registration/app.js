let express =  require('express');
let studentRouter = require('./router/studentRouter');
let app = express();
app.use(express.json());

app.use('/api/students', studentRouter);


app.listen(3000 , () => {
    console.log('Server started on http://localhost:3000');
});