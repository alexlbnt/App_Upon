"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularProducts = getPopularProducts;
const popularProducts_1 = require("../mocks/popularProducts");
async function getPopularProducts() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return popularProducts_1.popularProducts;
}
//# sourceMappingURL=popular.service.js.map