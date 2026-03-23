"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./modules/users/user.entity");
const category_entity_1 = require("./modules/categories/category.entity");
const establishment_entity_1 = require("./modules/establishments/establishment.entity");
const coupon_entity_1 = require("./modules/coupons/coupon.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'upon_db',
    entities: [user_entity_1.User, category_entity_1.Category, establishment_entity_1.Establishment, coupon_entity_1.Coupon],
    synchronize: true,
});
async function runSeed() {
    try {
        console.log('🔗 Conectando ao Banco...');
        await AppDataSource.initialize();
        const userRepo = AppDataSource.getRepository(user_entity_1.User);
        const categoryRepo = AppDataSource.getRepository(category_entity_1.Category);
        const establishmentRepo = AppDataSource.getRepository(establishment_entity_1.Establishment);
        const couponRepo = AppDataSource.getRepository(coupon_entity_1.Coupon);
        console.log('🧹 Limpando dados antigos...');
        await AppDataSource.query('TRUNCATE TABLE coupons CASCADE');
        await AppDataSource.query('TRUNCATE TABLE establishments CASCADE');
        await AppDataSource.query('TRUNCATE TABLE categories CASCADE');
        await AppDataSource.query('TRUNCATE TABLE users CASCADE');
        console.log('👤 Criando usuário admin...');
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash('123456', salt);
        const admin = userRepo.create({
            name: 'João Lojista',
            email: 'joao@email.com',
            passwordHash: hash,
        });
        await userRepo.save(admin);
        console.log('🏷️ Criando categorias...');
        const bCategory = categoryRepo.create({ name: 'Burgers', icon: 'fast-food', color: '#ff6b6b' });
        const pCategory = categoryRepo.create({ name: 'Pizzas', icon: 'pizza', color: '#feca57' });
        const dCategory = categoryRepo.create({ name: 'Doces', icon: 'ice-cream', color: '#ff9ff3' });
        const savedCategories = await categoryRepo.save([bCategory, pCategory, dCategory]);
        console.log('🏪 Criando estabelecimentos...');
        const est1 = establishmentRepo.create({
            name: 'Burger Palace',
            description: 'O melhor hambúrguer artesanal da cidade',
            logo: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            rating: 4.8,
            isOpen: true,
            distance: '2.5 km',
            category: bCategory,
        });
        const est2 = establishmentRepo.create({
            name: 'Napoli Pizzaria',
            description: 'Pizzas originais italianas feitas no forno a lenha',
            logo: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            isOpen: true,
            distance: '4.1 km',
            category: pCategory,
        });
        await establishmentRepo.save([est1, est2]);
        console.log('🎟️ Criando cupons...');
        const coupons = [
            couponRepo.create({
                title: '30% OFF - Cheeseburger Duplo',
                discountType: 'percentage',
                discountValue: 30,
                price: 25,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                expiresAt: '24h',
                category: 'food',
                establishment: est1,
            }),
            couponRepo.create({
                title: 'R$ 15 OFF - Combo Família',
                discountType: 'fixed',
                discountValue: 15,
                price: 69,
                image: 'https://images.unsplash.com/photo-1554448202-b25c345b1287?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                expiresAt: 'Hoje',
                category: 'combos',
                establishment: est1,
            }),
            couponRepo.create({
                title: '50% OFF - Pizza Marguerita Grande',
                discountType: 'percentage',
                discountValue: 50,
                price: 35,
                image: 'https://images.unsplash.com/photo-1604381536171-460d3cfab5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                expiresAt: '48h',
                category: 'food',
                establishment: est2,
            })
        ];
        await couponRepo.save(coupons);
        console.log('✅ Banco de dados populado com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro no seed:', error);
    }
    finally {
        await AppDataSource.destroy();
    }
}
runSeed();
//# sourceMappingURL=seed.js.map