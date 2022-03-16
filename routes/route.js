const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');
const middleware = require('../middlewares/auth')

router.post('/author', authorController.createAuthor);

router.post('/blog', blogController.createBlog);

router.get('/blogs',blogController.getBlogs);

router.put('/blogs/:blogId',middleware.auth,blogController.updateBlog);

router.delete('/blogs/:blogId', blogController.deleteById);

router.delete('/blogs', blogController.deleteByQuery);

router.post('/login', authorController.authorLogIn);



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyMzA1YzhjNDFmMGEyZDI4NzAyZGViMiIsImlhdCI6MTY0NzM3NTI0OH0.989X8Y1HOLAaVJ_R90Mj0A0Uh2d969iJwYnLesVHofQ
//id-62305c8c41f0a2d28702deb2

module.exports = router;