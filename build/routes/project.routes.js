"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../controllers/project.controller");
const router = express_1.default.Router();
router.post('/project', project_controller_1.createProjectController);
router.put('/project/:id', project_controller_1.updateProjectController);
router.get('/projects', project_controller_1.getProjectController);
router.get('/projects/:id', project_controller_1.getProjectByIdController);
exports.default = router;
