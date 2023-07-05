"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardListStyles = void 0;
const react_native_1 = require("react-native");
const cardListStyles = (columns = 1) => react_native_1.StyleSheet.create({
    container: Object.assign({}, react_native_1.Platform.select({
        web: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, 250px)',
            gridGap: 20,
            padding: 20,
        },
        ios: {
            display: 'flex',
            flexBasis: `${100 / columns}%`,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            padding: 20,
        },
    })),
    mobileContainer: Object.assign({}, react_native_1.Platform.select({
        web: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            justifyItems: 'center',
        },
        ios: {
            justifyContent: 'center',
        },
    })),
});
exports.cardListStyles = cardListStyles;
//# sourceMappingURL=ListContainer.styles.js.map