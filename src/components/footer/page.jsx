import logoEmiliaText from '@/assets/headerFooterImg/LogoEmiliaText.svg'
import logoEmilia from '@/assets/headerFooterImg/LogoEmilia-new.png'
import Image from 'next/image'
import NavBar from '../nabvar/page'
import Social from '../social/page'

const Footer = () => {
  const data = {
    stylesNav: '',
    stylesUl:
      'flex flex-wrap justify-center px-2 items-center gap-4 text-colorblack font-normal  lg:gap-8'
  }

  const dataSocial = {
    styleDiv: 'flex flex-col gap-3 py-3 items-start',
    styleLink: 'flex items-center hover:scale-95 transition-all',
    styleIcon: 'text-3xl mr-1 size-6',
    styleP: 'pr-2 font-semibold'
  }

  return (
    <footer className=" bg-footer text-colorText pt-12 text-center items-center flex flex-col">
      <div className="flex flex-col justify-around items-center w-full md:flex-row">
        <div className="flex flex-col order-2 md:order-1">
          <div className="flex flex-col w-full items-center justify-between mb-4 md:flex-row md:justify-center md:gap-4 xl:gap-[132px]">
            <div className="flex items-center w-[300px] h-[90px]">
              <Image
                src={logoEmiliaText}
                alt="Logo Emilia en texto"
                width="auto"
                height="auto"
                priority
                className="block w-auto h-auto"
              />
            </div>
            <Social data={dataSocial} />
          </div>
          <NavBar data={data} />
        </div>
        <div className="order-1 md:order-2 hover:animate-spin-y transition-all">
          <Image
            src={logoEmilia}
            width={100}
            height="auto"
            alt="Logo Emilia Rescata"
            priority
          />
        </div>
      </div>
      <div className="order-3 p-4 flex items-center justify-center bg-[#e9b2af] w-full rounded-sm mt-6">
        <p className="text-[#202020]">"Derechos reservados © [2024] [Emilia Rescata]."</p>
      </div>
    </footer>
  )
}

export default Footer
