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
exports.getProjectByIdService = exports.getProjectService = exports.updateProjectService = exports.createProjectService = void 0;
const database_1 = __importDefault(require("../utils/database"));
const logger_1 = __importDefault(require("../utils/logger"));
const createProjectService = ({ title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, download, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield database_1.default.project.create({
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
                download,
            },
        });
        return project;
    }
    catch (e) {
        logger_1.default.info(e);
    }
});
exports.createProjectService = createProjectService;
const updateProjectService = ({ id, title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, download, }) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const project = yield database_1.default.project.update({
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
            download,
        },
    });
    return project;
});
exports.updateProjectService = updateProjectService;
const getProjectService = () => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield database_1.default.project.findMany();
    return project;
});
exports.getProjectService = getProjectService;
const getProjectByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idInt = parseInt(id);
    const project = yield database_1.default.project.findMany({
        where: { id: idInt },
    });
    return project;
});
exports.getProjectByIdService = getProjectByIdService;
