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
exports.getEduByIdService = exports.deleteEduService = exports.getEduService = exports.updateEduService = exports.createEdutService = void 0;
const database_1 = __importDefault(require("../utils/database"));
const logger_1 = __importDefault(require("../utils/logger"));
const createEdutService = ({ title, desc, media, content1, code1, content2, code2, content3, code3, content4, code4, content5, code5, content6, code6, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const edu = yield database_1.default.edu.create({
            data: {
                title,
                desc,
                media,
                content1,
                code1,
                content2,
                code2,
                content3,
                code3,
                content4,
                code4,
                content5,
                code5,
                content6,
                code6,
            },
        });
        return edu;
    }
    catch (e) {
        logger_1.default.info(e);
    }
});
exports.createEdutService = createEdutService;
const updateEduService = ({ id, title, desc, media, content1, code1, content2, code2, content3, code3, content4, code4, content5, code5, content6, code6, }) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const edu = yield database_1.default.edu.update({
        where: { id: idInt },
        data: {
            title,
            desc,
            media,
            content1,
            code1,
            content2,
            code2,
            content3,
            code3,
            content4,
            code4,
            content5,
            code5,
            content6,
            code6,
        },
    });
    return edu;
});
exports.updateEduService = updateEduService;
const getEduService = () => __awaiter(void 0, void 0, void 0, function* () {
    const edu = yield database_1.default.edu.findMany();
    return edu;
});
exports.getEduService = getEduService;
const deleteEduService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const article = yield database_1.default.edu.delete({
        where: { id: idInt },
    });
    return article;
});
exports.deleteEduService = deleteEduService;
const getEduByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const article = yield database_1.default.edu.findMany({
        where: { id: idInt },
    });
    return article;
});
exports.getEduByIdService = getEduByIdService;
