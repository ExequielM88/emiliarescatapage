import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'

const CopyableParagraph = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)

    // Reiniciar el estado de "copied" después de 3 segundos
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col mt-4 lg:w-[400px]">
      <div className="flex items-center justify-between">
        <p className="mb-1 text-lg font-semibold md:text-sm lg:text-xl">{text}</p>
        <span
          className="hover:cursor-pointer"
          onClick={handleCopy}
        >
          <ContentCopyIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>
      {copied && <span className="text-green-500">Copiado</span>}
    </div>
  )
}

export default CopyableParagraph
