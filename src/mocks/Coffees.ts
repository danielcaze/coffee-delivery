export const Coffees = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: '9.90',
    icon: '/src/assets/coffees/expresso-tradicional.png',
    stock: '10',
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: '9.90',
    icon: '/src/assets/coffees/expresso-americano.png',
    stock: '10',
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: '9.90',
    icon: '/src/assets/coffees/expresso-cremoso.png',
    stock: '10',
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: '9.90',
    icon: '/src/assets/coffees/expresso-gelado.png',
    stock: '10',
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/cafe-com-leite.png',
    stock: '10',
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/expresso-gelado.png',
    stock: '10',
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/capuccino.png',
    stock: '10',
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/macchiato.png',
    stock: '10',
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/mocaccino.png',
    stock: '10',
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com leite'],
    price: '9.90',
    icon: '/src/assets/coffees/chocolate-quente.png',
    stock: '10',
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcólico', 'Gelado'],
    price: '9.90',
    icon: '/src/assets/coffees/cubano.png',
    stock: '10',
  },
  {
    name: 'Havaiano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial'],
    price: '9.90',
    icon: '/src/assets/coffees/havaiano.png',
    stock: '10',
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: '9.90',
    icon: '/src/assets/coffees/arabe.png',
    stock: '10',
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcólico'],
    price: '9.90',
    icon: '/src/assets/coffees/irlandes.png',
    stock: '10',
  },
]

type CoffeeTypeWithoutId = typeof Coffees[0]

export interface CoffeeType extends CoffeeTypeWithoutId {
  id: string
}
