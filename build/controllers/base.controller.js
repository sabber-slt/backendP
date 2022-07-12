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
exports.getBaseController = exports.updateBaseController = exports.createBaseController = void 0;
const base_service_1 = require("../services/base.service");
const logger_1 = __importDefault(require("../utils/logger"));
const createBaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, media, slug } = req.body;
    try {
        const base = yield (0, base_service_1.createBaseService)({ title, content, media, slug });
        res.status(200).json(base);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.createBaseController = createBaseController;
const updateBaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content, media, slug } = req.body;
    console.log(title);
    try {
        const base = yield (0, base_service_1.updateBaseService)({ title, content, media, slug, id });
        res.status(200).json(base);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.updateBaseController = updateBaseController;
const getBaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const base = yield (0, base_service_1.getBaseService)();
        res.status(200).json(base);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getBaseController = getBaseController;
