import Icon from './Icon'

// Controle − 1 + usado na Fornada do Dia e na Sacola
export default function Quantidade({ nome, qtd, onMudar }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-cafe/5">
      <button
        onClick={() => onMudar(-1)}
        aria-label={`Tirar ${nome}`}
        className="grid place-items-center size-9 rounded-full hover:bg-cafe/10"
      >
        <Icon name="minus" className="size-4" />
      </button>
      <span aria-live="polite" className="w-5 text-center font-semibold tabular-nums">
        {qtd}
      </span>
      <button
        onClick={() => onMudar(1)}
        aria-label={`Adicionar mais ${nome}`}
        className="grid place-items-center size-9 rounded-full hover:bg-cafe/10"
      >
        <Icon name="plus" className="size-4" />
      </button>
    </div>
  )
}
