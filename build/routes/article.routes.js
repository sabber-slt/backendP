"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const article_controller_1 = require("../controllers/article.controller");
const router = express_1.default.Router();
router.post('/article', article_controller_1.createArticleController);
router.put('/article/:id', article_controller_1.updateArticleController);
router.get('/article', article_controller_1.getArticleController);
router.get('/article/:id', article_controller_1.getArticleByIdController);
router.delete('/article/:id', article_controller_1.deleteArticleController);
exports.default = router;
