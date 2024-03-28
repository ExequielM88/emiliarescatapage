import React from "react";
import ImageTV from "./ImageTV";

//assets

import nota1 from "@/assets/notas-periodisticas/nota1.svg";
import nota2 from "@/assets/notas-periodisticas/nota2.svg";
import nota3 from "@/assets/notas-periodisticas/nota3.svg";
import nota4 from "@/assets/notas-periodisticas/nota4.svg";

const NotasPeriodisticas = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold">| Notas periodísticas</h2>
          <p className="pt-5 text-xl leading-loose">
            Bienvenidos a nuestro espacio de noticias donde recopilamos algunas
            notas que hemos tenido en los medios de comunicación. La difusión de
            nuestras actividades es esencial para cumplir nuestra misión y
            objetivos.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 pt-9 pb-8">
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota1}
              alt="nota1"
              linkText="‘’Canal 21 Huancayo’’"
              linkUrl="https://www.youtube.com/watch?v=gt8IFlEayv4"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota2}
              alt="nota2"
              linkText="“El dominical de Panamericana”"
              linkUrl="https://www.facebook.com/watch/?v=614377880875828&extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&ref=sharing&mibextid=Nif5oz"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota3}
              alt="nota3"
              linkText="‘’Parada Urbana’’"
              linkUrl="https://www.youtube.com/watch?v=KyP9j6s7E1Q"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota4}
              alt="nota4"
              linkText="‘’Patitas en Acción’’"
              linkUrl="https://www.youtube.com/watch?v=7oKMVp57W6E"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotasPeriodisticas;
