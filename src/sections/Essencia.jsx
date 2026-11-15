import Icon from '../components/Icon'
import { pilares } from '../data/conteudo'
import fotoPaes from '../assets/paes_essencia.jpeg'

// id="historia" é o destino do item "Nossa História" do menu
export default function Essencia() {
  return (
    <section id="historia" aria-labelledby="essencia-titulo" className="border-t border-cafe/10 bg-creme/60">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-terracota">Nossa Essência</span>
          <h2 id="essencia-titulo" className="mt-4 mx-auto max-w-3xl text-4xl sm:text-5xl font-semibold leading-[1.1]">
            Respeitamos o relógio da natureza, <em className="font-medium text-terracota">não o da indústria.</em>
          </h2>
        </div>

        <div className="mt-8">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-cafe/75">
            Na <span className="font-semibold text-cafe">MassaMadre</span>, acreditamos que um grande pão precisa de
            apenas três ingredientes: farinha de alta qualidade, água pura e sal marinho, unidos pela paciência. Nosso
            fermento natural (levain) transforma cada fornada em um alimento leve, de digestão suave, miolo úmido e
            casca crocante.
          </p>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {pilares.map((p) => (
              <li key={p.titulo} className="rounded-2xl border border-cafe/10 bg-white/60 p-6 shadow-sm">
                <span className="mx-auto grid place-items-center size-11 rounded-xl bg-terracota/10 text-terracota">
                  <Icon name={p.icone} className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cafe/70">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* object-cover corta as sobras para a foto não distorcer */}
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <img
          src={fotoPaes}
          alt="Pães artesanais de fermentação natural da Massa Madre"
          loading="lazy"
          className="block w-full h-56 sm:h-72 lg:h-80 rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
