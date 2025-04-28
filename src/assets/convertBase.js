const fs = require("fs");

// Функция для получения случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Соответствие цветов к HEX кодам
const colorHexMap = {
  black: "#000000",
  white: "#FFFFFF",
  silver: "#C0C0C0",
  gold: "#FFD700",
  blue: "#0000FF",
  red: "#FF0000",
  green: "#00FF00",
  yellow: "#FFFF00",
  gray: "#808080",
  pink: "#FFC0CB",
  purple: "#800080",
  spacegray: "#1C1C1E",
  midnight: "#191970",
  starlight: "#EEE8AA",
};

// Функция для поиска HEX по цвету товара
function findHexByColorName(colorName) {
  const lowerColor = colorName.toLowerCase().replace(/\s/g, ""); // убрать пробелы

  // Сначала ищем полное совпадение
  if (colorHexMap[lowerColor]) {
    return colorHexMap[lowerColor];
  }

  // Потом ищем если цвет товара содержит ключ из colorHexMap
  for (const key in colorHexMap) {
    if (lowerColor.includes(key)) {
      return colorHexMap[key];
    }
  }

  // Если ничего не найдено — дефолтный серый
  return "#CCCCCC";
}

// Загружаем базу
const base = JSON.parse(fs.readFileSync("./base.json", "utf-8"));

const newProducts = base.products.map((product) => {
  if (
    !Array.isArray(product.color) ||
    !Array.isArray(product.memory) ||
    !Array.isArray(product.price)
  ) {
    return product; // оставляем товар как есть
  }

  const variants = [];

  product.color.forEach((color) => {
    product.memory.forEach((memory, index) => {
      const basePrice = product.price[index] || product.price[0];
      const discountPercent = getRandomInt(0, 15); // скидка от 0% до 15%
      const discountValue = Math.round((basePrice * discountPercent) / 100);

      const hexColor = findHexByColorName(color);

      variants.push({
        color,
        colorHex: hexColor,
        memory,
        price: basePrice,
        discount: discountValue,
        stock: getRandomInt(3, 20),
        images: [
          `/images/products/${product.name
            .toLowerCase()
            .replace(/ /g, "")}/${color
            .toLowerCase()
            .replace(/\s/g, "")}/1.png`,
          `/images/products/${product.name
            .toLowerCase()
            .replace(/ /g, "")}/${color
            .toLowerCase()
            .replace(/\s/g, "")}/2.png`,
          `/images/products/${product.name
            .toLowerCase()
            .replace(/ /g, "")}/${color
            .toLowerCase()
            .replace(/\s/g, "")}/3.png`,
          `/images/products/${product.name
            .toLowerCase()
            .replace(/ /g, "")}/${color
            .toLowerCase()
            .replace(/\s/g, "")}/4.png`,
        ],
      });
    });
  });

  if (product.camera) {
    product.camera = product.camera
      .replaceAll("MP", "")
      .replaceAll("+", "-")
      .replace("Triple", "")
      .replace("Quad", "")
      .trim(); // на всякий случай убираем пробелы по краям
  }

  return {
    ...product,
    variants,
    color: undefined,
    memory: undefined,
    price: undefined,
    images: undefined,
  };
});

// Собираем итоговый результат
const result = {
  products: newProducts,
  categories: base.categories,
  reviewsSchema: base.reviewsSchema,
};

// Сохраняем
fs.writeFileSync("./newBase.json", JSON.stringify(result, null, 2), "utf-8");

console.log("✅ База переработана с умным определением HEX цветов!");
