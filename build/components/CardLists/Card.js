"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Card_styles_1 = require("./styles/Card.styles");
const Card = (props) => {
    const { item, shadow, key, width } = props;
    console.log('width', width);
    return (react_1.default.createElement(react_native_1.View, { style: [(0, Card_styles_1.cardStyle)(width).container, shadow === 'true' && (0, Card_styles_1.cardStyle)(width).shadow], key: key },
        react_1.default.createElement(react_native_1.Image, { source: { uri: item === null || item === void 0 ? void 0 : item.image.imageSrc.uri }, style: [(0, Card_styles_1.cardStyle)(width).image] }),
        react_1.default.createElement(react_native_1.View, { style: (0, Card_styles_1.cardStyle)(width).details },
            react_1.default.createElement(react_native_1.Text, { style: [(0, Card_styles_1.cardStyle)(width).row, item === null || item === void 0 ? void 0 : item.profile.styles.dataName] }, item === null || item === void 0 ? void 0 : item.profile.dataName),
            react_1.default.createElement(react_native_1.Text, { style: [(0, Card_styles_1.cardStyle)(width).row, item === null || item === void 0 ? void 0 : item.profile.styles.position] }, item === null || item === void 0 ? void 0 : item.profile.position))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map