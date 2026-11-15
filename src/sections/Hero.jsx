import Icon from '../components/Icon'
import { numeros } from '../data/conteudo'
import fotoBaguette from '../assets/baguette_levain.jpg'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-salvia/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-salvia">
          <Icon name="sparkle" className="size-4" />
          Levain natural • 100% artesanal
        </span>

        <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-3xl mx-auto">
          A arte do tempo, do fogo e da <em className="font-medium text-terracota">farinha.</em>
        </h1>

        <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-cafe/75">
          Pães de fermentação natural maturados lentamente por 48 horas. Sem aditivos químicos, com farinhas orgânicas
          moídas na pedra e o aroma inconfundível de crosta caramelizada saindo do forno todos os dias.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-3">
          <a
            href="#cardapio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-8 py-4 font-semibold text-creme hover:bg-cafe/90"
          >
            Ver Cardápio do Dia <Icon name="arrow" className="size-4" />
          </a>
          <a
            href="#visitar"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cafe/20 px-8 py-4 font-semibold hover:bg-cafe/5"
          >
            <Icon name="pin" className="size-5 text-terracota" /> Visitar a Padaria
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-3 divide-x divide-cafe/10 border-t border-cafe/10 pt-8">
          {numeros.map((n) => (
            <div key={n.texto} className="flex flex-col-reverse px-3 sm:px-6">
              <dt className="mt-1 text-sm leading-snug text-cafe/65 sm:text-base">{n.texto}</dt>
              <dd className="font-serif text-4xl font-semibold">{n.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-cafe shadow-2xl shadow-cafe/25 lg:mt-0 lg:aspect-[4/5]">
        <img src={fotoBaguette} alt="Baguete de fermentação natural" className="size-full object-cover object-[50%_70%]" />
        <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-cafe/10 bg-creme/95 p-4 backdrop-blur sm:inset-x-8 sm:bottom-8">
          <span className="grid place-items-center size-11 shrink-0 rounded-xl bg-terracota/10 text-terracota">
            <Icon name="flame" className="size-6" />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold leading-tight">Levain Vivo desde 2018</span>
            <span className="block mt-1 text-sm leading-snug text-cafe/70">
              Alimentado diariamente com farinha orgânica e água filtrada.
            </span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
