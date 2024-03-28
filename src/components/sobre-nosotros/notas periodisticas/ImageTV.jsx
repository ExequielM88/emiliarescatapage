import Image from "next/image";

const ImageTV = ({ src, alt, linkText, linkUrl }) => (
  <div className="flex flex-col items-center space-y-2.5">
    <div className="rounded-3xl overflow-hidden border-[20px] border-[#3D82AD] bg-[#3D82AD]">
      <Image src={src} width={300} height={300} alt={alt} />
    </div>
    <div className="w-[35%] h-[15px] bg-[#3D82AD] self-center rounded-lg"></div>
    {linkText && (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#6D0401] text-2xl font-semibold underline leading-loose"
      >
        {linkText}
      </a>
    )}
  </div>
);

export default ImageTV;
