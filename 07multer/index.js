const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');
const { error } = require('console');

const app = express();
const port = process.env.PORT || 3000;

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/myupload')
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = 
        callback(null, file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)) //keep same extension as file uploaded
    }
});

var upload = multer({
    storage: storage,
}).single('profile_pic'); //location from where image is coming

app.set('views', path.join(__dirname, 'views')); //use default path for index.ejs

//set for ejs
app.set("view engine","ejs");

//static folder
app.use(express.static("./public"))

app.get('/', (req,res) => {
    res.render('index');
});

//description for routes
app.post('/upload', (req,res) => {
    upload(req, res, (error) => {
        if (error){
            res.render('index', {message: error})
        } else {
            res.render('index', {message: 'no erroe occured, file uploaded successfully', filename: `myupload/${req.file.filename}`}); //this will save file to myupload folder on clicking submit button
        }
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`))
