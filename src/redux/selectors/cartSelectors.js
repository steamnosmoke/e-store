import { createSelector } from "@reduxjs/toolkit";

// Получаем корзину из state
export const selectCartItems = (state) => state.cart.cart;

// Подсчёт общего количества товаров
export const selectTotalCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((sum, item) => sum + item.count, 0)
);

// Подсчёт общей суммы до скидки
export const selectSubtotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((sum, item) => sum + item.subTotal, 0)
);

// Подсчёт суммы скидок
export const selectDiscount = createSelector([selectCartItems], (cart) =>
  cart.reduce((sum, item) => sum + item.discount, 0)
);

// Подсчёт итого после скидки
export const selectTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((sum, item) => sum + item.total, 0)
);
