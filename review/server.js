const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const getDatabase = () => mongoose.connection.db;
const multer = require("multer");
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const fs = require("fs");
const path = require("path");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/reviewDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const Review = mongoose.model("Review", new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true },
  message: String,
  saveInfo: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
}));

const ProductDel = mongoose.model("Product", new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  fruittype: String,
  image: String,
  selectimage:String,
  bannerimage: String,  
  description: String,
  createdAt: { type: Date, default: Date.now },
}));


module.exports = ProductDel;
// Review posting to db

app.post("/submit-review", async (req, res) => {
  try {
    const { name, phone, rating, message, saveInfo } = req.body;

    const newReview = new Review({
      name,
      phone,
      rating,
      message,
      saveInfo,
      date: new Date(),
    });

    await newReview.save();
    res.status(201).send({ message: "Review submitted successfully!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to submit the review." });
  }
});

// Review API

app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews." });
  }
});

// Product get Api

app.get("/products", async (req, res) => {
  try {
    const database = getDatabase();
    const collection = database.collection("products");
    const productss = await collection.find().toArray();
    res.status(200).json(productss);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ." });
  }
});

// Product get Api useing id

app.get("/products/:id" , async (req,res) =>{ 

  try{

    const product = await ProductDel.findById(req.params.id);
    if(!product){

      res.status(404).send({message : "product not found"  })
    } 
    res.send(product)
  }
  catch(error){
    res.status(500).send({message: "error retrieving product", error});
  }

 })

// Add image in multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir ="C:/xampp/htdocs/2024/React/fruiting_desert/fruiting-desert/src/images/products";

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// product post api 

app.post("/addproduct", upload.fields([{ name: "image", maxCount: 1 },{ name: "selectimage", maxCount: 1 }]), async (req, res) => {
  const { name, price, rating, fruittype } = req.body; 
  const imageFile = req.files.image ? req.files.image[0] : null;
  const selectImageFile = req.files.selectimage ? req.files.selectimage[0] : null;

  // Validate that all fields are provided
  if (!name || !price || !rating || !fruittype || !imageFile || !selectImageFile) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    console.log('Files uploaded:', { image: req.files.image, selectimage: req.files.selectimage });

    // Get your existing database connection
    const database = getDatabase();
    const collection = database.collection("products");

    // Prepare the product object
    const newProduct = {
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      fruittype, 
      image: `${imageFile.filename}`,
      selectimage: `${selectImageFile.filename}`,
      createdAt: new Date(),
    };

    // Insert the product into the collection
    await collection.insertOne(newProduct);

    res.status(201).json({
      message: "Product added successfully",
      image: imageFile.path,
      selectimage: selectImageFile.path,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});

// app.post("/addproduct", upload.single("image"), async (req, res) => {
//   const { name, price, rating, fruittype } = req.body; 
//   const imageFile = req.file;
//   if (!name  || !price || !rating || !fruittype || !imageFile ){
//     return res
//       .status(400)
//       .send({ message: "All fields are required!" });
//   }
//   try {
//     console.log('File uploaded:', req.file);

//     // Get your existing database connection
//     const database = getDatabase(); 
//     const collection = database.collection("products");

//     // Prepare the product object
//     const newProduct = {
//       name,
//       price: parseFloat(price),
//       rating: parseFloat(rating),
//       fruittype, 
//       image: `${imageFile.filename}`,
//       selectimage: `${imageFile.filename}`,
//       createdAt: new Date(),
//     };
//     // Insert the product into the collection
    
//     await collection.insertOne(newProduct);

//     res.status(201).json({
//       message: "Product added successfully",
//       image: imageFile.path,
//       data: newProduct,
//     });
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).json({ message: "Failed to add product" });
//   }
// });

//update api 

app.put('/product/:id', upload.fields([{name:"image" ,maxCount:'1'},{name :"selectimage",maxCount:'1'}]), async (req, res) => {

  const { id } = req.params; // Get the product ID from the URL
  const { name, price, rating, fruittype } = req.body;
  const imageFile = req.files.image ? req.files.image[0] : null;
  const selectImageFile = req.files.selectimage ? req.files.selectimage[0] : null;

  if (!name || !price || !rating || !fruittype || !imageFile || !selectImageFile) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    // const { id } = req.params;
    // const { name, price, rating, fruittype } = req.body;
    // const imageFile = req.files.image  ? req.files.image[0] : null; 
    // const selactImageFile = req.files.selectimage ? req.files.selectimage[0]: null;

    let updatedData = {
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      fruittype,
      image:imageFile.filename,
      selectimage :selectImageFile.filename,
      updatedAt: new Date(),
    };

    const updatedProduct = await ProductDel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Image get api 

app.get("/getImage/:name", async (req, res) => {
  try {
    const imageName = req.params.name; // Assuming the image name is passed as a URL parameter
    console.log(imageName);
   
    const image = path.resolve("../images/products", imageName);
    console.log(image);


    // Check if the file exists
    if (fs.existsSync(image)) {
      // Set the correct content type for images
      res.setHeader("Content-Type", "image/png"); 
      res.sendFile(image);
    } else {
      res.status(404).json({ message: "Image not found" });
    }
  } catch (error) {
    console.error("Error fetching the image:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Delete API  
app.delete('/products/:key', async (req, res) => {
  const { key } = req.params;
  
  try {
    // Ensure the key is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(key)) {
      return res.status(400).json({ message: 'Invalid product ID.' });
    }

    // Use Mongoose model to delete the product by ID
    const deletedProduct = await ProductDel.findByIdAndDelete(key);

    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    console.error('Error while deleting the product:', error);
    res.status(500).json({ message: 'An error occurred while deleting the product.', error });
  }
});



// Start the server
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
