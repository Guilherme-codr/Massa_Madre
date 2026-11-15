import Icon from './Icon'
import Quantidade from './Quantidade'
import { produtos } from '../data/produtos'
import { linkWhatsapp, reais } from '../data/config'

// Painel da sacola, mesmo comportamento do MenuLateral: aberto pelo App via ref.showModal().
// qtd e mudar vêm do App, porque a Fornada do Dia também adiciona itens.
export default function Sacola({ ref, qtd, mudar }) {
  const fechar = () => ref.current.close()

  const escolhidos = produtos.filter((p) => qtd[p.id] > 0)
  // soma em centavos para não acumular erro de arredondamento (0.1 + 0.2)
  const total = escolhidos.reduce((soma, p) => soma + Math.round(p.preco * 100) * qtd[p.id], 0) / 100
  const mensagem = [
    'Olá! Gostaria de encomendar na Massa Madre:',
    ...escolhidos.map((p) => `• ${qtd[p.id]}x ${p.nome} (${reais(p.preco * qtd[p.id])})`),
    `Total: ${reais(total)}`,
  ].join('\n')

  return (
    <dialog
      ref={ref}
      aria-label="Sacola"
      onClick={(e) => e.target === e.currentTarget && fechar()}
      className="menu-painel fundo-pontilhado fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-sm bg-creme text-cafe backdrop:bg-cafe/50"
    >
      <div className="flex h-full flex-col px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-terracota">Sacola</span>
          <button
            onClick={fechar}
            aria-label="Fechar sacola"
            className="grid place-items-center size-11 -mr-2 rounded-full hover:bg-cafe/5"
          >
            <Icon name="close" className="size-6" />
          </button>
        </div>

        {escolhidos.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="grid place-items-center size-16 rounded-full bg-cafe/5 text-cafe/50">
              <Icon name="bag" className="size-7" />
            </span>
            <h2 className="mt-5 text-3xl font-semibold">Sacola vazia</h2>
            <p className="mt-2 max-w-64 text-sm text-cafe/60">
              Explore a fornada do dia e adicione pães ou cafés para reservar sua retirada.
            </p>
          </div>
        ) : (
          <ul className="mt-6 -mx-6 px-6 flex-1 overflow-y-auto divide-y divide-cafe/10 border-y border-cafe/10">
            {escolhidos.map((p) => (
              <li key={p.id} className="flex items-center gap-3 py-4">
                <div className="min-w-0 flex-1">
                  <span className="block font-serif text-xl font-semibold leading-tight">{p.nome}</span>
                  <span className="block text-sm text-cafe/60">{p.descricao}</span>
                  <span className="block mt-1 text-sm font-semibold text-terracota">{reais(p.preco)}</span>
                </div>
                <Quantidade nome={p.nome} qtd={qtd[p.id]} onMudar={(delta) => mudar(p.id, delta)} />
              </li>
            ))}
          </ul>
        )}

        <footer className="-mx-6 -mb-5 mt-5 border-t border-cafe/10 bg-areia px-6 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-cafe/60">Total estimado</span>
            <span className="font-serif text-3xl font-semibold tabular-nums">{reais(total)}</span>
          </div>
          <p className="mt-3 text-sm text-cafe/60">
            Ao clicar abaixo, você será redirecionado para o WhatsApp com sua lista pronta para confirmar o horário de
            retirada.
          </p>
          {escolhidos.length > 0 ? (
            <a
              href={linkWhatsapp(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-cafe px-6 py-4 font-semibold text-creme hover:bg-cafe/90"
            >
              <Icon name="whatsapp" /> Enviar pedido pelo WhatsApp
            </a>
          ) : (
            // Link não aceita disabled; sem itens mostramos um botão desativado no lugar
            <button
              disabled
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-cafe px-6 py-4 font-semibold text-creme opacity-40"
            >
              <Icon name="whatsapp" /> Enviar pedido pelo WhatsApp
            </button>
          )}
        </footer>
      </div>
    </dialog>
  )
}
