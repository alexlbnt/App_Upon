export declare function getPopularProducts(): Promise<({
    id: number;
    name: string;
    price: number;
    discount: number;
    image: string;
    establishmentId: number;
    establishmentName: string;
} | {
    id: number;
    name: string;
    price: number;
    image: string;
    establishmentId: number;
    establishmentName: string;
    discount?: undefined;
})[]>;
