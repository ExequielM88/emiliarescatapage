import React from 'react'
import Link from 'next/link'

const ButtonPages = ({data}) => {
  return (
    <Link href={data.ref} className={data.style} target='_blank'>
      <button >
        {data.title}
      </button>
    </Link>
  )
}

export default ButtonPages