import { randomUUID } from 'node:crypto';
export const generateUUID = () => {
    return randomUUID();
};
export function getTotalGiftAmount(gifts) {
    return gifts.reduce((acc, gift) => acc + gift.amount, 0) / 100;
}
//# sourceMappingURL=tools.js.map