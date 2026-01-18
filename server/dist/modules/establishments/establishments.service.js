"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentsService = void 0;
const common_1 = require("@nestjs/common");
let EstablishmentsService = class EstablishmentsService {
    constructor() {
        this.establishments = [
            {
                id: 1,
                categoryId: 1,
                name: "Supermercado Bom Preço",
                description: "Os melhores preços da cidade",
                image: "https://images.unsplash.com/photo-1580910051074-7b26f8c4e1f4",
                distance: "1.2 km",
                isOpen: true,
                rating: 4.5,
            },
            {
                id: 2,
                categoryId: 1,
                name: "Mercado Central",
                description: "Variedade e qualidade",
                image: "https://images.unsplash.com/photo-1601600576337-c1d8a0d13747",
                distance: "2.8 km",
                isOpen: false,
                rating: 4.2,
            },
            {
                id: 3,
                categoryId: 2,
                name: "Padaria Pão Quente",
                description: "Pães frescos todos os dias",
                image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
                distance: "900 m",
                isOpen: true,
                rating: 4.8,
            },
        ];
    }
    findByCategory(categoryId) {
        return this.establishments.filter((e) => e.categoryId === Number(categoryId));
    }
    findOne(id) {
        return this.establishments.find((e) => e.id === Number(id));
    }
};
exports.EstablishmentsService = EstablishmentsService;
exports.EstablishmentsService = EstablishmentsService = __decorate([
    (0, common_1.Injectable)()
], EstablishmentsService);
//# sourceMappingURL=establishments.service.js.map