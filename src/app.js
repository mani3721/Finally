const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const index = require('./routes/index');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.set("views", __dirname, "/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/contact',index)

app.use("/javascript", express.static('javascript'))



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
