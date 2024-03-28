"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import links from '@/data/links'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'


const DropdownMenu = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden ">
      <button onClick={toggleMenu} className='flex ml-8 md:ml-16'>
        <MenuIcon sx={{ color: "var(--color-black)", fontSize: "40px" }} />
      </button>
      {isOpen && (
        <div className="top-full absolute block left-0 bg-bgPrimary rounded-ee-3xl  shadow-gray-500 shadow-lg">
          <ul className='items-center pb-8 text-colorblack font-normal'>
            {links.map(({ link, id, name, image }) => (
              <React.Fragment key={id}>
                <Link
                  href={`${link}`}
                  className={`flex items-center py-1  my-6 text-2xl pr-10  shadow-gray-300 shadow-sm ${pathname === `${link}` ? 'font-bold bg-footer  ' : ''
                    }`}
                  onClick={toggleMenu}
                >
                  <Image
                    src={image}
                    alt='icono'
                    width={24}
                    height={30}
                    priority
                    className='w-auto h-auto items-center px-4 bg-transparent'
                  />
                  {name}
                </Link>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
