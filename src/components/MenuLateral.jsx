import Icon from './Icon'
import { menu } from '../data/conteudo'
import { whatsappLink } from '../data/config'

// Painel que desliza da direita. O <dialog> é aberto pelo App via ref.showModal().
export default function MenuLateral({ ref }) {
  const fechar = () => ref.current.close()

  return (
    <dialog
      ref={ref}
      aria-label="Menu"
      onClick={(e) => e.target === e.currentTarget && fechar()}
      className="menu-painel fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-sm bg-creme text-cafe backdrop:bg-cafe/50"
    >
      <div className="flex h-full flex-col px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-terracota">Menu</span>
          <button
            onClick={fechar}
            aria-label="Fechar menu"
            className="grid place-items-center size-11 -mr-2 rounded-full hover:bg-cafe/5"
          >
            <Icon name="close" className="size-6" />
          </button>
        </div>

        <nav className="mt-8">
          <ul className="divide-y divide-cafe/10 border-y border-cafe/10">
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={fechar} className="group block py-5">
                  <span className="block font-serif text-3xl font-semibold leading-tight group-hover:text-terracota">
                    {item.titulo}
                  </span>
                  <span className="block mt-1 text-sm text-cafe/60">{item.texto}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-6 py-4 font-semibold text-creme hover:bg-cafe/90"
        >
          <Icon name="whatsapp" /> Encomendar pelo WhatsApp
        </a>
        <p className="mt-3 text-center text-xs text-cafe/50">Encomendas com 24h de antecedência</p>
      </div>
    </dialog>
  )
}
