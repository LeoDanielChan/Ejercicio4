// Definir un tipo de usuarios:
interface IUser {
  id: number,
  nombre: string,
  edad: number,
  contraseña: string,
  activo: boolean
}

//Crear un arreglo de usuarios
const usuarios: IUser[] = [
  {
    id: 1,
    nombre: 'Panfilo',
    edad: 30,
    contraseña: '',
    activo: false
  },
  {
    id: 2,
    nombre: 'Emperador',
    edad: 30,
    contraseña: '',
    activo: true
  },
  {
    id: 3,
    nombre: 'Space Marins',
    edad: 30,
    contraseña: '',
    activo: false
  },
  {
    id: 4,
    nombre: 'Zeus',
    edad: 30,
    contraseña: '',
    activo: true,
  },
  {
    id: 5,
    nombre: 'Arceus',
    edad: 30,
    contraseña: '',
    activo: false,
  }
]
//Filtrar los usuarios activos (true)
const usuariosActivos = usuarios.filter(user => user.activo === true)

console.log(usuariosActivos)