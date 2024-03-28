'use client'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import bannerSobreNosotros from '@/assets/bannerImg/banner-sobreNosotros.svg'
import { TestimonialCard } from '@/components/cards/page'
import { testimonialData } from '@/data/dataCards'
import Banner from '@/components/banner/page'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import Link from 'next/link'
import ComentSlider from './comentSlider/ComentSlider'
import Premios from './premios/Premios'
import MisionHistoria from "../../components/sobre-nosotros/mision-historia/MisionHistoria";
import NotasPeriodisticas from "@/components/sobre-nosotros/notas periodisticas/NotasPeriodisticas";

const SobreNosotros = () => {
  return (
    <section className="mt-[110px] max-[640px]:mt-[80px]">
      <Banner imageUrl={bannerSobreNosotros} />
      <MisionHistoria/>
      <ComentSlider />
      <Premios />
      <NotasPeriodisticas/>
    </section>
  )
}

export default SobreNosotros


