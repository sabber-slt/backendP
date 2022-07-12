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
exports.getBaseService = exports.updateBaseService = exports.createBaseService = void 0;
const database_1 = __importDefault(require("../utils/database"));
const logger_1 = __importDefault(require("../utils/logger"));
const createBaseService = ({ title, content, media, slug, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const base = yield database_1.default.base.create({
            data: {
                title,
                content,
                media,
                slug,
            },
        });
        return base;
    }
    catch (e) {
        logger_1.default.info(e);
    }
});
exports.createBaseService = createBaseService;
const updateBaseService = ({ title, content, media, slug, id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const base = yield database_1.default.base.update({
        where: { id: idInt },
        data: {
            title,
            content,
            media,
            slug,
        },
    });
    return base;
});
exports.updateBaseService = updateBaseService;
const getBaseService = () => __awaiter(void 0, void 0, void 0, function* () {
    const base = yield database_1.default.base.findMany();
    return base;
});
exports.getBaseService = getBaseService;
