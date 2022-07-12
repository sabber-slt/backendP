"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const edu_controller_1 = require("../controllers/edu.controller");
const router = express_1.default.Router();
router.post('/edu', edu_controller_1.createEduController);
router.put('/edu/:id', edu_controller_1.updateEdutController);
router.get('/edu', edu_controller_1.getEduController);
router.get('/edu/:id', edu_controller_1.getEduByIdController);
router.delete('/edu/:id', edu_controller_1.deleteEduController);
exports.default = router;
