"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleByIdController = exports.deleteArticleController = exports.getArticleController = exports.updateArticleController = exports.createArticleController = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const article_service_1 = require("../services/article.service");
const createArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, content5, media5, } = req.body;
    try {
        const article = yield (0, article_service_1.createArticletService)({
            title,
            desc,
            media,
            content1,
            media1,
            content2,
            media2,
            content3,
            media3,
            content4,
            media4,
            content5,
            media5,
        });
        res.status(200).json(article);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.createArticleController = createArticleController;
const updateArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, content5, media5, } = req.body;
    try {
        const article = yield (0, article_service_1.updateArticleService)({
            id,
            title,
            desc,
            media,
            content1,
            media1,
            content2,
            media2,
            content3,
            media3,
            content4,
            media4,
            content5,
            media5,
        });
        res.status(200).json(article);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.updateArticleController = updateArticleController;
const getArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield (0, article_service_1.getArticleService)();
        res.status(200).json(article);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getArticleController = getArticleController;
const deleteArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const article = yield (0, article_service_1.deleteArticleService)(id);
        res.status(200).json(article);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.deleteArticleController = deleteArticleController;
const getArticleByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const article = yield (0, article_service_1.getArticleByIdService)(id);
        res.status(200).json(article);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getArticleByIdController = getArticleByIdController;
