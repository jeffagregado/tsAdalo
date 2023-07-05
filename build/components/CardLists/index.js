"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ListContainer_styles_1 = require("./styles/ListContainer.styles");
const Card_1 = __importDefault(require("./Card"));
let isTablet = false;
let isMobile = false;
let isWidth = 0;
console.log('isTablet', isTablet);
const itemWidth = 250;
const numColumns = Math.floor(isWidth / itemWidth);
const ListCards = (props) => {
    const { color, listItems, styles } = props;
    const { width } = react_native_1.Dimensions.get('window');
    // console.log('listItems', listItems)
    const cardWidth = width < 500 ? '100%' : 250;
    (0, react_1.useEffect)(() => {
        isTablet = width <= 768;
        isMobile = width <= 500;
        isWidth = width;
    }, [width]);
    return (react_1.default.createElement(react_native_1.View, { style: [(0, ListContainer_styles_1.cardListStyles)(numColumns).container, isTablet && (0, ListContainer_styles_1.cardListStyles)().mobileContainer] },
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(react_native_1.Text, null, "Loading...") }, listItems &&
            listItems.map((item, i) => (react_1.default.createElement(Card_1.default, { item: item, key: i, shadow: props.card.shadow, width: cardWidth }))))));
};
exports.default = ListCards;
//# sourceMappingURL=index.js.map