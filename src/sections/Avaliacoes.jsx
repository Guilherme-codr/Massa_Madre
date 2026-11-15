import Icon from '../components/Icon'
import { avaliacoes } from '../data/conteudo'

export default function Avaliacoes() {
  return (
    <section aria-labelledby="avaliacoes-titulo" className="border-t border-white/10 bg-[#1f150f]">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 id="avaliacoes-titulo" className="mx-auto max-w-3xl text-4xl sm:text-5xl font-semibold leading-[1.1] text-white">
          O que dizem sobre nossas fornadas
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
          {avaliacoes.map((a) => (
            <li key={a.nome} className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6">
              <div className="flex gap-1 text-dourado" role="img" aria-label="5 de 5 estrelas">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Icon key={n} name="star" fill="currentColor" className="size-4" />
                ))}
              </div>
              <blockquote className="leading-relaxed text-creme/80">“{a.texto}”</blockquote>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-creme">{a.nome}</p>
                <p className="text-xs text-creme/60">{a.subtitulo}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
