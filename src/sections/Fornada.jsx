import { useState } from 'react'
import Icon from '../components/Icon'
import Quantidade from '../components/Quantidade'
import { categorias, produtos } from '../data/produtos'
import { reais } from '../data/config'

// id="fornada" é o destino do item "Fornada do Dia" do menu.
// qtd e mudar são a sacola, que mora no App.
export default function Fornada({ qtd, mudar }) {
  const [filtro, setFiltro] = useState('todos')
  const visiveis = filtro === 'todos' ? produtos : produtos.filter((p) => p.categoria === filtro)

  return (
    <section id="fornada" aria-labelledby="fornada-titulo" className="border-t border-cafe/10">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-terracota">Direto do forno</span>
        <h2 id="fornada-titulo" className="mt-4 text-4xl sm:text-5xl font-semibold leading-[1.1]">
          Fornada do Dia
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-cafe/75">
          Escolha seus favoritos abaixo e monte sua lista de encomenda. Enviamos direto para o nosso balcão no WhatsApp
          para você retirar quentinho.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categorias.map((c) => (
            <button
              key={c.id}
              onClick={() => setFiltro(c.id)}
              aria-pressed={filtro === c.id}
              className="shrink-0 rounded-full border border-cafe/15 px-5 py-2.5 text-sm font-semibold hover:bg-cafe/5 aria-pressed:border-cafe aria-pressed:bg-cafe aria-pressed:text-creme"
            >
              {c.nome}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((p) => (
            <li
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-cafe/10 bg-white/60 shadow-sm"
            >
              {/* Fotos ficam em public/produtos/; sem foto aparece o trigo no lugar */}
              {p.imagem ? (
                <img
                  src={`${import.meta.env.BASE_URL}produtos/${p.imagem}`}
                  alt={p.nome}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="grid aspect-[4/3] place-items-center bg-cafe/5 text-cafe/20">
                  <Icon name="wheat" className="size-16" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold leading-tight">{p.nome}</h3>
                <p className="mt-1 text-sm text-cafe/60">{p.descricao}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="font-semibold text-terracota">{reais(p.preco)}</span>
                  {qtd[p.id] > 0 ? (
                    <Quantidade nome={p.nome} qtd={qtd[p.id]} onMudar={(delta) => mudar(p.id, delta)} />
                  ) : (
                    <button
                      onClick={() => mudar(p.id, 1)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-cafe px-4 py-2 text-sm font-semibold text-creme hover:bg-cafe/90"
                    >
                      <Icon name="plus" className="size-4" /> Adicionar
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
