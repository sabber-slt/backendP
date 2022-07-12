"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = __importDefault(require("./utils/logger"));
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const edu_routes_1 = __importDefault(require("./routes/edu.routes"));
const article_routes_1 = __importDefault(require("./routes/article.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', base_routes_1.default);
app.use('/api', project_routes_1.default);
app.use('/api', edu_routes_1.default);
app.use('/api', article_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger_1.default.info(`Server listening on port ${PORT}`);
});
