import { Food } from "../shared/models/Food";

export const foods_list: Food[] = [
  {
    id: '1',
    name: 'Chicken Biryani',
    cookTime: '10-20',
    price: 250,
    favorite: false,
    origins: ['Hyderabadi'],
    stars: 4.5,
    imageUrl: 'assets/chicken-biryani.jpg',
    tags: ['non-veg', 'chicken', 'indian', 'spicy', 'biryani']
  },
  {
    id: '2',
    name: 'Mutton Biryani',
    cookTime: '10-20',
    price: 280,
    favorite: false,
    origins: ['Hyderabadi'],
    stars: 4.5,
    imageUrl: 'assets/mutton-biryani.jpg',
    tags: ['non-veg', 'biryani', 'mutton', 'indian', 'spicy']
  },
  {
    id: '3',
    name: 'Chicken Lollipop',
    cookTime: '10-20',
    price: 220,
    favorite: false,
    origins: ['Chinese'],
    stars: 4.5,
    imageUrl: 'assets/chicken-lollipop.jpg',
    tags: ['chinese', 'spicy', 'kebabs']
  },
  {
    id: '4',
    name: 'Chicken Shawarma',
    cookTime: '10-20',
    price: 200,
    favorite: false,
    origins: ['Arabian'],
    stars: 4.5,
    imageUrl: 'assets/chicken-shawarma.jpg',
    tags: ['arabian', 'spicy', 'rolls', 'chicken']
  },
  {
    id: '5',
    name: 'Mutton Paya',
    cookTime: '10-20',
    price: 200,
    favorite: false,
    origins: ['Hyderabadi'],
    stars: 4.5,
    imageUrl: 'assets/mutton-paya.jpeg',
    tags: ['soup', 'mutton', 'roti', 'sherwa']
  },
  {
    id: '6',
    name: 'Chicken Tandoori',
    cookTime: '10-20',
    price: 200,
    favorite: false,
    origins: ['Punjabi'],
    stars: 4.5,
    imageUrl: 'assets/chicken-tandoori.jpg',
    tags: ['grilled', 'chicken', 'tandoori', 'spicy']
  },
]
