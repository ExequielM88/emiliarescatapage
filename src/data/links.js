import ImgAdop from "@/assets/imgDataLink/linkIAdop.svg"
import ImgHome from "@/assets/imgDataLink/linkIHome.svg"
import ImgSobre from "@/assets/imgDataLink/linkISobre.svg"
import ImgCont from "@/assets/imgDataLink/linkICont.svg"
import ImgDona from "@/assets/imgDataLink/linkIDona.svg"

const links = [
  {
    id: 1,
    name: 'Inicio',
    link: '/',
    image: ImgHome
  },
  {
    id: 2,
    name: 'Sobre nosotros',
    link: '/sobre-nosotros',
    image: ImgSobre
  },
  {
    id: 3,
    name: 'Adopciones',
    link: '/adopciones',
    image: ImgAdop
  },
  {
    id: 4,
    name: 'Donaciones',
    link: '/donaciones',
    image: ImgDona
  },
  {
    id: 5,
    name: 'Contacto',
    link: '/contacto',
    image: ImgCont
  }
]

export default links
