const express = require('express');
const bodyparser = require('body-parser')
const Blog = require('../models/blog');
const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ urlencoded: true }));


router.get('/blogs',async (req,res) => {
    try{
        const blogs = await Blog.find().sort({date : -1});//fetch from db 
        res.status(201).json(blogs);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})


router.post('/blogs',async (req,res) => {
    //create instance
    const blog = new Blog({
        title:req.body.title,
        imgUrl:req.body.imgUrl,
        content:req.body.content,
    });

    try{
        const newBlog = await blog.save();//save data to db
        res.status(201).json(newBlog);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})




module.exports = router;
