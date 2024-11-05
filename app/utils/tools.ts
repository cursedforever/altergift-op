import Gift from '#models/gift'
import { randomUUID } from 'node:crypto'
export const generateUUID = () => {
  return randomUUID()
}

export function getTotalGiftAmount(gifts: Gift[]) {
  return gifts.reduce((acc, gift) => acc + gift.amount, 0) / 100
}
