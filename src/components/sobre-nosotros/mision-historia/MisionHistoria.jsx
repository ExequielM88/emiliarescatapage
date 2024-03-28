import Image from "next/image";
import React from "react";

// assets
import mision from "@/assets/mision-historia/mision.svg";
import historia from "@/assets/mision-historia/historia.svg";
import Bg from "./Bg";

const MisionHistoria = () => {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      <Bg/>
      <div className="flex justify-center">
        <div className="w-[70%] mx-auto">
          <div className="flex flex-col justify-center md:flex-row pt-10 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold">| Nuestra misión</h2>
              <p className="pt-5 text-xl leading-loose">
                En el refugio ‘’Emilia Rescata’’ ubicado en Huancayo, Perú
                tenemos como objetivo poner{" "}
                <span className="font-bold">fin al sufrimiento animal</span>. A
                través de recaudación de fondos{" "}
                <span className="font-bold">esterilizamos</span> entre 40 y 50
                perritos por mes con la esperanza de alcanzar un número mayor.
                Además nos dedicamos a educar a la comunidad sobre el{" "}
                <span className="font-bold">cuidado responsable</span> de los
                perritos ofreciendo charlas informativas. Juntos, estamos
                trabajando para crear un futuro donde todos los animales sean
                tratados con{" "}
                <span className="font-bold">compasión y respeto</span>.
              </p>
            </div>
            <div className="md:h-1/2-screen md:pl-10">
              <Image
                src={mision}
                layout="responsive"
                width={500}
                height={300}
                alt="mision"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row-reverse pt-28 pb-10 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold">| Nuestra historia</h2>
              <p className="pt-5 text-xl leading-loose">
                Emilia es una{" "}
                <span className="font-bold">rescatista independiente</span> cuyo
                compromiso con la causa animal surgió después que su perrita
                fuera atropellada. Al buscar ayuda para su mascota, se encontró
                con páginas y personas dedicadas al rescate y cuidados de
                animales necesitados. Esta experiencia la llevó a involucrarse
                plenamente con la protección de perritos, convirtiéndose en una
                fuente de <span className="font-bold">esperanza</span> para
                aquellos que no tiene voz.
              </p>
            </div>
            <div className="md:h-1/2-screen md:pr-10">
              <Image
                src={historia}
                layout="responsive"
                width={500}
                height={300}
                alt="historia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionHistoria;
