'use client'
import bannerAdopciones from '@/assets/bannerImg/banner-adopciones.svg'
import Banner from '@/components/banner/page'
import InfoAdoM from './odopcionesinfo/page'
import AdopExito from './casosdeexito/page'

const Adopciones = () => {
  return (
    <div className="mt-[110px] max-[640px]:mt-[80px]">
      <Banner imageUrl={bannerAdopciones} />
      <InfoAdoM />
      <AdopExito />
    </div>
  )
}

export default Adopciones
