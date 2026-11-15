import Icon from './Icon'

export default function Header({ onAbrirMenu, onAbrirSacola }) {
  return (
    <header className="sticky top-0 z-10 border-b border-cafe/10 bg-creme/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center gap-3 px-4 py-5">
        <a href={import.meta.env.BASE_URL} className="flex items-center gap-3 min-w-0">
          <span className="grid place-items-center size-12 shrink-0 rounded-full bg-cafe text-creme">
            <Icon name="wheat" className="size-6" />
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-2xl font-semibold leading-none">Massa Madre</span>
            <span className="block mt-1 text-[0.7rem] tracking-[0.25em] uppercase text-terracota font-semibold">
              Padaria Artesanal
            </span>
          </span>
        </a>
        <button
          onClick={onAbrirSacola}
          aria-label="Abrir sacola"
          aria-haspopup="dialog"
          className="ml-auto grid place-items-center size-11 rounded-full bg-cafe/5 hover:bg-cafe/10"
        >
          <Icon name="bag" />
        </button>
        <button
          onClick={onAbrirMenu}
          aria-label="Abrir menu"
          aria-haspopup="dialog"
          className="grid place-items-center size-11"
        >
          <Icon name="menu" className="size-6" />
        </button>
      </div>
    </header>
  )
}
