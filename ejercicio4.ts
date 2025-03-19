// Ejercicio de animales

type TipoAnimal = 'Ovíparo' | 'Vivíparo'

interface Animal {
  color: string,
  edad: number,
  altura: number,
  peso: number,
  reproduccion: TipoAnimal
}

interface Conejo extends Animal {
  raza: string
}

const conejo1: Conejo = {
  color: 'Negro',
  edad: 2,
  altura: 0.5,
  peso: 2,
  reproduccion: 'Vivíparo',
  raza: 'Mini lop'
}