"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardStyle = void 0;
const react_native_1 = require("react-native");
const cardStyle = (width) => react_native_1.StyleSheet.create({
    container: {
        width: width,
        backgroundColor: '#fff',
        border: '1px solid #d2d2',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        height: 250,
        width: '100%',
    },
    details: {
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    position: {
        fontSize: 16,
    },
    row: {
        padding: 5,
    },
    shadow: Object.assign({}, react_native_1.Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        android: {
            elevation: 4,
        },
        web: {
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        },
    })),
});
exports.cardStyle = cardStyle;
//# sourceMappingURL=Card.styles.js.map