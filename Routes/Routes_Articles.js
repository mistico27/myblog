const express = require("express");
const router = express.Router();
const ArticleController = require("../Controllers/ArticlesCont");
///test routes
router.get("/test",ArticleController.test);
router.get("/testII",ArticleController.articlesapp);

///utility
router.post("/create",ArticleController.create);
router.get("/articles/:last?",ArticleController.getArticles);
router.get("/articles/:id?",ArticleController.one);


module.exports= router;