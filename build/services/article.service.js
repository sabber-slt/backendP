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
exports.getArticleByIdService = exports.deleteArticleService = exports.getArticleService = exports.updateArticleService = exports.createArticletService = void 0;
const database_1 = __importDefault(require("../utils/database"));
const logger_1 = __importDefault(require("../utils/logger"));
const createArticletService = ({ title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, content5, media5, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield database_1.default.article.create({
            data: {
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
            },
        });
        return article;
    }
    catch (e) {
        logger_1.default.info(e);
    }
});
exports.createArticletService = createArticletService;
const updateArticleService = ({ id, title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, content5, media5, }) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const article = yield database_1.default.article.update({
        where: { id: idInt },
        data: {
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
        },
    });
    return article;
});
exports.updateArticleService = updateArticleService;
const getArticleService = () => __awaiter(void 0, void 0, void 0, function* () {
    const edu = yield database_1.default.article.findMany();
    return edu;
});
exports.getArticleService = getArticleService;
const deleteArticleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const article = yield database_1.default.article.delete({
        where: { id: idInt },
    });
    return article;
});
exports.deleteArticleService = deleteArticleService;
const getArticleByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const article = yield database_1.default.article.findMany({
        where: { id: idInt },
    });
    return article;
});
exports.getArticleByIdService = getArticleByIdService;
