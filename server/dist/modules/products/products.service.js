"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            {
                id: 1,
                establishmentId: 1,
                name: "Arroz 5kg",
                description: "Arroz tipo 1",
                price: 22.9,
                image: "https://images.unsplash.com/photo-1604908554166-29e95dbb59fd",
            },
            {
                id: 2,
                establishmentId: 1,
                name: "Feijão Carioca",
                description: "Feijão selecionado",
                price: 8.5,
                image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
            },
            {
                id: 3,
                establishmentId: 2,
                name: "Pão Francês",
                description: "Pão quentinho",
                price: 0.6,
                image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
            },
        ];
    }
    findByEstablishment(establishmentId) {
        return this.products.filter((p) => p.establishmentId === Number(establishmentId));
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map