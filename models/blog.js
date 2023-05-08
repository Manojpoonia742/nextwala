const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
title:{
type:String,
required:true
},
catagory:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
imageSrc:{
    type:String,
    default:"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
},
imageAlt:{
    type:String,
},
href:{
    type:String,
    required:true
}
},
    {
    timestamps:true
});

mongoose.models={}
const Blog = mongoose.model("blog", BlogSchema);
Blog.createIndexes();

export default Blog;