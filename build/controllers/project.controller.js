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
exports.getProjectByIdController = exports.getProjectController = exports.updateProjectController = exports.createProjectController = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const project_service_1 = require("../services/project.service");
const createProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, download, } = req.body;
    try {
        const base = yield (0, project_service_1.createProjectService)({
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
        });
        res.status(200).json(base);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.createProjectController = createProjectController;
const updateProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, desc, media, content1, media1, content2, media2, content3, media3, content4, media4, download, } = req.body;
    try {
        const project = yield (0, project_service_1.updateProjectService)({
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
            download,
        });
        res.status(200).json(project);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.updateProjectController = updateProjectController;
const getProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield (0, project_service_1.getProjectService)();
        res.status(200).json(project);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getProjectController = getProjectController;
const getProjectByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield (0, project_service_1.getProjectByIdService)(id);
        res.status(200).json(project);
    }
    catch (e) {
        logger_1.default.info(e);
        res.status(500).json(e.message);
    }
});
exports.getProjectByIdController = getProjectByIdController;
