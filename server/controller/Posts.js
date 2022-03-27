import PostMessage from "../models/PostMessage.js"

export const getPost = async (req,res)=>{
    try{
         const postMessages = await PostMessage.find();

         res.status(200).json(postMessages);
    }catch(error){
         res.status(404).json({message: error.message})
    }
}

export const createPost = async (req,res)=>{
    const post =req.body;
    const newPost = new PostMessage(post);

    try{
         await newPost.save();
         //http status code
// https://www.restapitutorial.com/httpstatuscodes.html

         res.status(201).json(newPost);
    }catch(error){
         res.status(409).json({message: error.message})
    }
    res.send('post creation')
}