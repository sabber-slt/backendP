"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const base_controller_1 = require("../controllers/base.controller");
const router = express_1.default.Router();
router.post('/base', base_controller_1.createBaseController);
router.put('/base/:id', base_controller_1.updateBaseController);
router.get('/base', base_controller_1.getBaseController);
exports.default = router;
