const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const path = require('path');
const hbs = require('hbs');
const multer = require("multer");

require("./conn/connection");

const Upload = require("./modele/modele.js")


const staticPath = path.join(__dirname, '../');
const partialsPath = path.join(__dirname, '../templetes/partials');
const viewsPath = path.join(__dirname, '../templetes/views');


// set multer diskstorage  

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})


const upload = multer({ storage:storage });

// set static path----------------------------------------------
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// set view ingin _________________________________________________

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);




// set hbs   rout________________________________________________________


app.get('/', (req, res) => {
    res.render("index.hbs");
});



app.get('/upload', (req, res) => {
    res.render("upload.hbs");
});

app.get('/booking', (req, res) => {
  res.render("booking.hbs");
});


app.get('/product', (req, res) => {
  res.render("product.hbs");
});


app.get('/contact/api', async(req, res) => {
  try{
    const findData = await Upload.find();
    res.send(findData);
    
  }catch(err){
     res.send(err);
  }
  });
  


app.post('/upload', upload.single('productImage'),(req, res) => {

  const newupload = new Upload({
    productName:req.body.productName,
    productPrice:req.body.productPrice,
    productDescription:req.body.productDescription,
    productImage:req.file.path


  });

  newupload.save().then( ()=>{
    console.log("file uploaded");
  }).catch( (err)=>{
    console.log(err);
  });

  res.render("upload.hbs");

});



app.get('/', (req, res) => {
    res.send('Hello, World! This is your Express server.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
