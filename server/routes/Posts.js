import express from 'express';

import { getPost,createPost  } from '../controller/Posts.js'

const router = express.Router();

//localhost:5000/posts
router.get('/', getPost)
router.post('/', createPost)

export default router;