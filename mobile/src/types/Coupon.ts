export type Coupon = {
  id: number;
  title: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  image: string;
  establishmentId: number;
  establishmentName: string;
  expiresAt: string;
  category?: string;
};