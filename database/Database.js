export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'Air Jordan',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 399,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: require('./images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: 2,
    category: 'Air Jordan',
    productName: 'Air Jordan 1 Retro High OG Patent Bred',
    productPrice: 499,
    description:
      'The Air Jordan 1 Retro High OG Patent Bred treats the iconic colorway to a glossy makever. Aside from the shoes patent leather construction, the essential design DNA remains intac',
    isOff: false,
    productImage: require('./images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat1.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'Nike AF1 X Travis Scott',
    productPrice: 99,
    description:
      'The slip-on features flowing, sculpted lines, along with a series of targeted vents that provide enhanced breathability and a distinctive aesthetic.',
    isOff: true,
    offPercentage: 18,
    productImage: require('./images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/boatairpods1.png'),
      require('./images/accessories/boatairpods2.png'),
      require('./images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'Nike Air Force 1 Black Fly',
    productPrice: 199,
    description:
      'Built for big kids, the Nike Dunk Low GS ‘Black White’ showcases a simplistic two-tone color scheme that accentuates the sneaker’s clean lines, born from the same designer — Peter Moore — that also created the Air Jordan 1. ',
    isOff: false,
    productImage: require('./images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/boatbassheads1.png'),
      require('./images/accessories/boatbassheads1.png'),
      require('./images/accessories/boatbassheads1.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'bRockerz 255 Pro+',
    productPrice: 129,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('./images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      require('./images/accessories/boatrockerz1.png'),
      require('./images/accessories/boatrockerz2.png'),
      require('./images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Nike Air Force 1 White',
    productPrice: 99,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('./images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/boultairbass1.png'),
      require('./images/accessories/boultairbass1.png'),
      require('./images/accessories/boultairbass1.png'),
    ],
  },
];
