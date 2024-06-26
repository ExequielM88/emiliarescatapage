'use client'
import CopyableParagraph from '@/components/copyParagraph/page'
import bannerDonaciones from '@/assets/bannerImg/banner-donaciones.svg'
import { Card, CardFijo } from '@/components/cards/page'
import imgMultired from '@/assets/images/multired.svg'
import imgbcr from '@/assets/images/bancoCredito.svg'
import imgpaypal from '@/assets/images/paypal.svg'
import Banner from '@/components/banner/page'
import Image from 'next/image'

const Donaciones = () => {
  return (
    <section className="mt-[110px] max-[640px]:mt-[80px]">
      <Banner
        imageUrl={bannerDonaciones}
      />
      <article className="p-2 mt-10 flex gap-5 flex-wrap justify-center lg:justify-start">
        <div className="lg:ml-6">
          <h2 className="mb-4 font-bold text-xl border-l-4 border-black pl-2 lg:text-3xl">
            Suscripción a membresías mensuales
          </h2>
          <p className="mb-1 text-lg lg:text-xl">
            Nuestra membresía mensual tiene como objetivo apadrinar perritos rescatados,
            brindándoles amor y cuidado continuo.
          </p>
        </div>
        <Card />
      </article>

      <article className="p-2 mt-10 flex gap-5 flex-wrap justify-center lg:justify-start">
        <div className="lg:ml-6">
          <h2 className="mb-4 font-bold text-xl border-l-4 border-black pl-2 lg:text-3xl">
            Donaciones por única vez
          </h2>
          <p className="mb-1 text-lg lg:text-xl">
            Nuestra donación única, brinda un apoyo esencial e inmediato para cubrir las necesidades
            urgentes los perritos rescatados.
          </p>
        </div>
        <CardFijo />
      </article>

      <article className="px-2 py-16 mt-3 bg-[#fdeeed] w-full">
        <div className="lg:ml-6">
          <h2 className="mb-4 font-bold text-xl border-l-4 text-colorText border-colorText pl-2 lg:text-3xl">
            Gracias a tus donaciones, seguimos cambiando la vida de más perritos callejeros
          </h2>
          <p className="mb-1 text-lg lg:text-xl">
            Si deseas colaborar con un monto diferente, tenes la posibilidad de realizar tu donación
            de manera rápida y sencilla.
          </p>
          <div className="flex flex-col gap-5 justify-center mt-16 md:flex-row">
            <div className="flex flex-col justify-center items-center md:w-[33%]">
              <Image
                src={imgpaypal}
                width={400}
                height={100}
                alt="imagen de paypal"
              />
              <div className="flex flex-col justify-start">
                <CopyableParagraph text="Cta. Soles: 355-98569031-0-13" />
                <CopyableParagraph text="CCI 002-35519856903101362" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[33%]">
              <Image
                src={imgbcr}
                width={400}
                height={100}
                alt="imagen de banco credito"
              />
              <div className="flex flex-col justify-start">
                <CopyableParagraph text="Cta. Soles: 355-98569031-0-13" />
                <CopyableParagraph text="CCI 002-35519856903101362" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[33%]">
              <Image
                src={imgMultired}
                width={400}
                height={100}
                alt="imagen de banco multired"
              />
              <div className="flex flex-col justify-start">
                <CopyableParagraph text="Cta. Soles: 04-388-105939" />
                <CopyableParagraph text="CCI 018 388 004388105939 98" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Donaciones
