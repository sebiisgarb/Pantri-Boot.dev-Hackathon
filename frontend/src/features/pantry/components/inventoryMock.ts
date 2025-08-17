export type Item = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category:
    | "Bakery"
    | "Dairy"
    | "Meat"
    | "Vegetables"
    | "Fruits"
    | "Beverages"
    | "Snacks";
  img?: string;
};

/* 20 mock items, echilibrate pe categorii  */
export const mockItems: Item[] = [
  // 🥖 Bakery – 3
  {
    id: "1",
    name: "Whole-wheat Bread",
    quantity: 2,
    unit: "loaves",
    category: "Bakery",
  },
  { id: "2", name: "Croissants", quantity: 4, unit: "pcs", category: "Bakery" },
  {
    id: "3",
    name: "Burger Buns",
    quantity: 6,
    unit: "pcs",
    category: "Bakery",
  },

  // 🥛 Dairy – 3
  {
    id: "4",
    name: "Organic Milk",
    quantity: 1,
    unit: "litre",
    category: "Dairy",
  },
  {
    id: "5",
    name: "Cheddar Cheese",
    quantity: 250,
    unit: "g",
    category: "Dairy",
  },
  {
    id: "6",
    name: "Greek Yogurt",
    quantity: 3,
    unit: "cups",
    category: "Dairy",
  },

  // 🍖 Meat – 3
  {
    id: "7",
    name: "Chicken Breast",
    quantity: 500,
    unit: "g",
    category: "Meat",
  },
  { id: "8", name: "Ground Beef", quantity: 750, unit: "g", category: "Meat" },
  {
    id: "9",
    name: "Turkey Slices",
    quantity: 200,
    unit: "g",
    category: "Meat",
  },

  // 🥦 Vegetables – 4
  {
    id: "10",
    name: "Carrots",
    quantity: 5,
    unit: "pcs",
    category: "Vegetables",
  },
  {
    id: "11",
    name: "Spinach",
    quantity: 1,
    unit: "bag",
    category: "Vegetables",
  },
  {
    id: "12",
    name: "Bell Peppers",
    quantity: 3,
    unit: "pcs",
    category: "Vegetables",
  },
  {
    id: "13",
    name: "Broccoli Florets",
    quantity: 400,
    unit: "g",
    category: "Vegetables",
  },

  // 🍎 Fruits – 3
  { id: "14", name: "Apples", quantity: 6, unit: "pcs", category: "Fruits" },
  { id: "15", name: "Bananas", quantity: 8, unit: "pcs", category: "Fruits" },
  {
    id: "16",
    name: "Blueberries",
    quantity: 200,
    unit: "g",
    category: "Fruits",
  },

  // 🥤 Beverages – 2
  {
    id: "17",
    name: "Orange Juice",
    quantity: 1,
    unit: "carton",
    category: "Beverages",
  },
  {
    id: "18",
    name: "Sparkling Water",
    quantity: 4,
    unit: "cans",
    category: "Beverages",
  },

  // 🍿 Snacks – 2
  {
    id: "19",
    name: "Salted Pretzels",
    quantity: 1,
    unit: "bag",
    category: "Snacks",
  },
  {
    id: "20",
    name: "Dark Chocolate",
    quantity: 2,
    unit: "bars",
    category: "Snacks",
  },
  { id: "21", name: "Bagels", quantity: 6, unit: "pcs", category: "Bakery" },
  {
    id: "22",
    name: "Pita Bread",
    quantity: 4,
    unit: "pcs",
    category: "Bakery",
  },
  {
    id: "23",
    name: "Gluten-free Loaf",
    quantity: 1,
    unit: "loaf",
    category: "Bakery",
  },
  {
    id: "24",
    name: "Blueberry Muffin",
    quantity: 4,
    unit: "pcs",
    category: "Bakery",
  },
  {
    id: "25",
    name: "Tortillas",
    quantity: 10,
    unit: "pcs",
    category: "Bakery",
  },
  {
    id: "26",
    name: "Sourdough Starter",
    quantity: 150,
    unit: "g",
    category: "Bakery",
  },
  {
    id: "27",
    name: "Cinnamon Roll",
    quantity: 3,
    unit: "pcs",
    category: "Bakery",
  },

  // 🥛 Dairy – 6
  { id: "28", name: "Butter", quantity: 200, unit: "g", category: "Dairy" },
  {
    id: "29",
    name: "Mozzarella",
    quantity: 1,
    unit: "ball",
    category: "Dairy",
  },
  {
    id: "30",
    name: "Cottage Cheese",
    quantity: 250,
    unit: "g",
    category: "Dairy",
  },
  { id: "31", name: "Parmesan", quantity: 120, unit: "g", category: "Dairy" },
  {
    id: "32",
    name: "Hazelnut Creamer",
    quantity: 500,
    unit: "ml",
    category: "Dairy",
  },
  {
    id: "33",
    name: "Whipped Cream",
    quantity: 1,
    unit: "can",
    category: "Dairy",
  },

  // 🍖 Meat – 7
  { id: "34", name: "Pork Chops", quantity: 2, unit: "pcs", category: "Meat" },
  { id: "35", name: "Salami", quantity: 150, unit: "g", category: "Meat" },
  { id: "36", name: "Bacon", quantity: 200, unit: "g", category: "Meat" },
  { id: "37", name: "Beef Steak", quantity: 1, unit: "pcs", category: "Meat" },
  { id: "38", name: "Lamb Mince", quantity: 400, unit: "g", category: "Meat" },
  { id: "39", name: "Hot Dogs", quantity: 8, unit: "pcs", category: "Meat" },
  {
    id: "40",
    name: "Turkey Bacon",
    quantity: 180,
    unit: "g",
    category: "Meat",
  },

  // 🥦 Vegetables – 7
  {
    id: "41",
    name: "Red Onions",
    quantity: 4,
    unit: "pcs",
    category: "Vegetables",
  },
  {
    id: "42",
    name: "Cherry Tomatoes",
    quantity: 250,
    unit: "g",
    category: "Vegetables",
  },
  {
    id: "43",
    name: "Cucumber",
    quantity: 2,
    unit: "pcs",
    category: "Vegetables",
  },
  {
    id: "44",
    name: "Sweet Corn",
    quantity: 2,
    unit: "cobs",
    category: "Vegetables",
  },
  {
    id: "45",
    name: "Zucchini",
    quantity: 3,
    unit: "pcs",
    category: "Vegetables",
  },
  {
    id: "46",
    name: "Kale",
    quantity: 1,
    unit: "bunch",
    category: "Vegetables",
  },
  {
    id: "47",
    name: "Mushrooms",
    quantity: 300,
    unit: "g",
    category: "Vegetables",
  },

  // 🍎 Fruits – 6
  { id: "48", name: "Pear", quantity: 5, unit: "pcs", category: "Fruits" },
  { id: "49", name: "Kiwi", quantity: 6, unit: "pcs", category: "Fruits" },
  { id: "50", name: "Mango", quantity: 2, unit: "pcs", category: "Fruits" },
  { id: "51", name: "Grapes", quantity: 400, unit: "g", category: "Fruits" },
  { id: "52", name: "Pineapple", quantity: 1, unit: "pcs", category: "Fruits" },
  { id: "53", name: "Lemon", quantity: 4, unit: "pcs", category: "Fruits" },

  // 🥤 Beverages – 6
  {
    id: "54",
    name: "Green Tea",
    quantity: 20,
    unit: "bags",
    category: "Beverages",
  },
  { id: "55", name: "Cola", quantity: 6, unit: "cans", category: "Beverages" },
  {
    id: "56",
    name: "Almond Milk",
    quantity: 1,
    unit: "litre",
    category: "Beverages",
  },
  {
    id: "57",
    name: "Cold Brew Coffee",
    quantity: 500,
    unit: "ml",
    category: "Beverages",
  },
  {
    id: "58",
    name: "Energy Drink",
    quantity: 2,
    unit: "cans",
    category: "Beverages",
  },
  {
    id: "59",
    name: "Lemonade",
    quantity: 1,
    unit: "bottle",
    category: "Beverages",
  },

  // 🍿 Snacks – 5
  { id: "60", name: "Trail Mix", quantity: 1, unit: "bag", category: "Snacks" },
  {
    id: "61",
    name: "Granola Bars",
    quantity: 5,
    unit: "pcs",
    category: "Snacks",
  },
  {
    id: "62",
    name: "Potato Chips",
    quantity: 2,
    unit: "bags",
    category: "Snacks",
  },
  {
    id: "63",
    name: "Rice Crackers",
    quantity: 1,
    unit: "pack",
    category: "Snacks",
  },
  {
    id: "64",
    name: "Peanut Butter Cups",
    quantity: 6,
    unit: "pcs",
    category: "Snacks",
  },
];
