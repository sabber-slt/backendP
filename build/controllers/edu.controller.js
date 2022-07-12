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
exports.getEduByIdController = exports.deleteEduController = exports.getEduController = exports.updateEdutController = exports.createEduController = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const edu_service_1 = require("../services/edu.service");
const createEduController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, desc, media, content1, code1, content2, code2, content3, code3, content4, code4, content5, code5, content6, code6, } = req.body;
    try {
        const edu = yield (0, edu_service_1.createEdutService)({
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
        });
        res.status(200).json(edu);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.createEduController = createEduController;
const updateEdutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, desc, media, content1, code1, content2, code2, content3, code3, content4, code4, content5, code5, content6, code6, } = req.body;
    try {
        const edu = yield (0, edu_service_1.updateEduService)({
            id,
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
        });
        res.status(200).json(edu);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.updateEdutController = updateEdutController;
const getEduController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const edu = yield (0, edu_service_1.getEduService)();
        res.status(200).json(edu);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getEduController = getEduController;
const deleteEduController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const edu = yield (0, edu_service_1.deleteEduService)(id);
        res.status(200).json(edu);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.deleteEduController = deleteEduController;
const getEduByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const edu = yield (0, edu_service_1.getEduByIdService)(id);
        res.status(200).json(edu);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getEduByIdController = getEduByIdController;
