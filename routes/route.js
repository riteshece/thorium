const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');


router.post('/author', authorController.createAuthor);

router.post('/blog', blogController.createBlog);

router.get('/blogs', blogController.getBlogs);

router.put('/blogs/:blogId', blogController.updateBlog);

router.delete('/blog/:blogId', blogController.deleteById);






module.exports = router;