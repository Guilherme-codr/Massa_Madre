import Icon from '../components/Icon'
import fotoCafe from '../assets/cafe_xicara.jpg'
import fotoPao from '../assets/pao_mao.jpg'

// id="cafeteria" é o destino do item "Cafeteria & Empório" do menu
export default function Cafeteria() {
  return (
    <section id="cafeteria" aria-labelledby="cafeteria-titulo" className="bg-[#1f150f]">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <span className="font-serif text-3xl sm:text-4xl font-semibold text-dourado">Cafeteria &amp; Empório</span>
        <h2 id="cafeteria-titulo" className="mt-4 mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
          Sente-se, respire o aroma de pão quente e desacelere.
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-creme/75">
          Nossa casa foi pensada como um refúgio urbano. Além dos pães para levar, servimos cafés especiais torrados
          localmente, manteiga artesanal batida na casa, geleias orgânicas e tostadas servidas na hora.
        </p>
        <ul className="mt-10 mx-auto flex max-w-md flex-col gap-4 text-left">
          {[
            'Grãos especiais 100% arábica (torra média-clara)',
            'Empório com azeites extravirgens, queijos de pequenos produtores e mel silvestre',
            'Jardim interno pet-friendly com mesas ao ar livre',
          ].map((item) => (
            <li key={item} className="flex items-center gap-4 text-creme/90">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-dourado/25 text-dourado">
                <Icon name="check" className="size-5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        {/* mt-12 na segunda foto cria o degrau: a primeira fica mais acima */}
        <div className="mt-14 mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
          <img
            src={fotoCafe}
            alt="Xícara de café especial servida na cafeteria"
            loading="lazy"
            className="block w-full h-64 sm:h-96 rounded-2xl object-cover"
          />
          <img
            src={fotoPao}
            alt="Mão segurando um pão artesanal de fermentação natural"
            loading="lazy"
            className="mt-12 block w-full h-64 sm:h-96 rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
