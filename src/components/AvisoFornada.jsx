import { useState } from 'react'
import Icon from './Icon'

export default function AvisoFornada() {
  const [visivel, setVisivel] = useState(true)
  if (!visivel) return null

  return (
    <div className="bg-cafe text-creme text-sm">
      <div className="mx-auto max-w-6xl flex items-center gap-3 px-4 py-3">
        <p className="flex-1 text-center leading-snug">
          Fornadas quentes saindo todos os dias às <strong className="text-amber-200 font-semibold">07h30</strong> e às{' '}
          <strong className="text-amber-200 font-semibold">16h00</strong>. Reserve o seu!
        </p>
        <button
          onClick={() => setVisivel(false)}
          aria-label="Fechar aviso"
          className="shrink-0 rounded-full p-1.5 hover:bg-white/10"
        >
          <Icon name="close" className="size-4" />
        </button>
      </div>
    </div>
  )
}
