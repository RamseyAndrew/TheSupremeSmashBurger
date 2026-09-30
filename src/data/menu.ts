// PLACEHOLDER MENU — awaiting real menu and pricing from client.
// Replace names, descriptions, prices, and image URLs with confirmed items.

export interface MenuItem {
  id: string;
  category: "burger" | "fries" | "drink";
  name: string;
  description: string;
  price: number; // KES
  imageUrl: string;
  tag?: string; // e.g. "BEST SELLER", "NEW", "SPICY"
}

export const menuItems: MenuItem[] = [
  {
    id: "classic-smash",
    category: "burger",
    name: "The Classic Smash",
    description:
      "Double smashed beef patty, American cheese, house sauce, pickles, white onions on a toasted brioche bun.",
    price: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1678110707493-8d05425137ac?w=600&h=600&fit=crop&auto=format",
    tag: "BEST SELLER",
  },
  {
    id: "supreme-double",
    category: "burger",
    name: "The Supreme Double",
    description:
      "Two smashed patties, double cheese, caramelised onions, supreme special sauce, shredded lettuce.",
    price: 950,
    imageUrl:
      "https://images.unsplash.com/photo-1600688640154-9619e002df30?w=600&h=600&fit=crop&auto=format",
    tag: "SIGNATURE",
  },
  {
    id: "spicy-red",
    category: "burger",
    name: "Spicy Red",
    description:
      "Smashed patty, pepper jack cheese, jalapeños, sriracha slaw, chipotle mayo on a sesame brioche.",
    price: 850,
    imageUrl:
      "https://images.unsplash.com/photo-1688246780164-00c01647e78c?w=600&h=600&fit=crop&auto=format",
    tag: "HOT",
  },
  {
    id: "mushroom-truffle",
    category: "burger",
    name: "Truffle Melt",
    description:
      "Single smashed patty, Swiss cheese, sautéed mushrooms, truffle aioli, rocket on a potato bun.",
    price: 900,
    imageUrl:
      "https://images.unsplash.com/photo-1768933227584-f9be340e7f1a?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: "flamin-cajun-fries",
    category: "fries",
    name: "Flamin Cajun Fries",
    description:
      "Seasoned crispy fries with a fiery Cajun kick. An all-time favourite.",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&h=600&fit=crop&auto=format",
    tag: "FAN FAVE",
  },
  {
    id: "loaded-fries",
    category: "fries",
    name: "Loaded Supreme Fries",
    description:
      "Crispy fries topped with melted cheese sauce, crispy onions, and house special sauce.",
    price: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=600&fit=crop&auto=format",
    tag: "NEW",
  },
];

export const categories = ["All", "Burgers", "Fries"] as const;
export type CategoryFilter = (typeof categories)[number];
