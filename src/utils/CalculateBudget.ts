export const calculateBudget = (
    pricePerUnit: number,
    quantity: number,
    discount: number = 0,
    taxRate: number = 0,
    additionalCosts: number = 0
  ): number => {
    const subtotal = pricePerUnit * quantity;
    const discountAmount = subtotal * (discount / 100);
    const subtotalAfterDiscount = subtotal - discountAmount;
    const taxAmount = subtotalAfterDiscount * (taxRate / 100);
    const total = subtotalAfterDiscount + taxAmount + additionalCosts;
  
    return total;
  };
  