import { link } from "fs";
import { title } from "process";

export const products = [
  {
    id: 1,
    name: 'Sambar Powder',
    slug: 'sambar-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Authentic South Indian sambar powder made from freshly roasted spices for rich aroma and taste.',
    price: 120,
  },
  {
    id: 2,
    name: 'Rasam Powder',
    slug: 'rasam-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Traditional rasam powder with pepper, cumin, and coriander for a comforting, spicy flavor.',
    price: 260
  },
  {
    id: 3,
    name: 'Idli Podi (Gunpowder)',
    slug: 'idli-podi',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Spicy idli podi made with lentils, red chilies, and sesame seeds. Perfect with ghee or oil.',
    price: 150
  },
  {
    id: 4,
    name: 'Curry Powder',
    slug: 'curry-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'A versatile curry masala blend suitable for vegetables, gravies, and dry curries.',
    price : 180
  },
  {
    id: 5,
    name: 'Garam Masala',
    slug: 'garam-masala',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Premium garam masala prepared using whole spices for intense flavor and aroma.',
    price : 200
  },
  {
    id: 6,
    name: 'Chilli Powder',
    slug: 'chilli-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Pure red chilli powder with vibrant color and medium spice level.',
    price : 150
  },
  {
    id: 7,
    name: 'Coriander Powder',
    slug: 'coriander-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Freshly ground coriander seeds for a mild, citrusy flavor in everyday cooking.',
    price: 190
  },
  {
    id: 8,
    name: 'Pepper Powder',
    slug: 'pepper-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Finely ground black pepper with strong aroma and heat.',
    price : 220
  }
];

export const shopCategories = [
  {
    title: "Sweets",
    link: "sweets",
    children: [
      {
        title: "Traditional Sweets",
        link: "traditional"
      },
      {
        title: "Dry Fruit Sweets",
        link: "dry-fruit"
      },
      {
        title: "Milk-Based Sweets",
        link: "milk"
      },
      {
        title: "Bengali Sweets",
        link: "bengali"
      }
    ]
  },
  {
    title: "Pickles",
    link: "pickles",
    children: [
      {
        title: "Veg Pickles",
        link: "veg"
      },
      {
        title: "Non-Veg Pickles",
        link: "non-veg"
      }
    ]
  },
  {
    title: "Podi's and Masalas",
    link: "podis-masalas"
  },
  {
    title: "Snacks",
    link: "snacks",
    children: [
      {
        title: "Namkeen",
        link: "namkeen"
      },
      {
        title: "Chips and Fryums",
        link: "chips"
      }
    ]
  },
  {
    title: "Papads",
    link: "papads"
  }
];


export const mainPageCategories = [
  {
    title: "Namkeen",
    image: "https://ik.imagekit.io/mywebsiteecommerce/namkeen.webp?updatedAt=1766378856730",
    link: "namkeen"
  },

  {
    title: "Veg Pickles",
    image: "https://ik.imagekit.io/mywebsiteecommerce/veg-pickel.webp?updatedAt=1766378856803",
    link: "veg-pickles"
  },
  {
    title: "Non-Veg Pickles",
    image: "https://ik.imagekit.io/mywebsiteecommerce/non-veg.webp?updatedAt=1766378856744",
    link: "non-veg-pickles"
  },
  {
    title: "Podi's and Masalas",
    image: "https://ik.imagekit.io/mywebsiteecommerce/podis-masalas.webp?updatedAt=1766378856769",
    link: "podis-masalas"
  }, 
  { title: "Gifting",
    image: "https://ik.imagekit.io/mywebsiteecommerce/gifting.png?updatedAt=1766378857282",
    link: "gifting"
  },
  {
    title: "Baklava",
    image: "https://ik.imagekit.io/mywebsiteecommerce/baklava.webp?updatedAt=1766378856752",
    link: "baklava"
  }
];