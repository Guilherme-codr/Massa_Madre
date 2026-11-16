import Icon from '../components/Icon'
import { whatsappLink } from '../data/config'

const ENDERECO = 'Rua das Oliveiras, 428 – Vila Madalena'
const LINK_MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ENDERECO}, São Paulo`)}`

// Ícone + título + conteúdo, igual nos três itens
function Item({ icone, titulo, children }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-dourado/20 text-terracota">
        <Icon name={icone} />
      </span>
      <div>
        <p className="font-semibold">{titulo}</p>
        {children}
      </div>
    </li>
  )
}

// id="visitar" é o destino do item "Onde Estamos" do menu
export default function OndeEstamos() {
  return (
    <section id="visitar" aria-labelledby="visitar-titulo" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl bg-creme p-8 sm:p-12 text-cafe">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota">Visite nossa casa</span>
          <h2 id="visitar-titulo" className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">Onde estamos</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cafe/75">
            Venha tomar um café sem pressa ou retire sua encomenda fresca diretamente no nosso balcão.
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            <Item icone="pin" titulo="Endereço">
              <p className="mt-1 text-cafe/75">{ENDERECO}</p>
            </Item>
            <Item icone="clock" titulo="Horário de funcionamento">
              <p className="mt-1 text-cafe/75">Terça a sábado: 07h00 às 20h00</p>
              <p className="text-cafe/75">Domingos e feriados: 07h30 às 16h00</p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                <Icon name="flame" className="size-4" />
                Fornadas quentes às 07h30 e 16h00
              </p>
            </Item>
            <Item icone="phone" titulo="Contato & Encomenda">
              <p className="mt-1 text-cafe/75">Atendimento e encomendas pelo WhatsApp</p>
            </Item>
          </ul>

          <div className="mt-10 mx-auto flex max-w-xs flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-5 py-3 font-semibold text-creme hover:bg-cafe/90"
            >
              <Icon name="whatsapp" /> Chamar no WhatsApp
            </a>
            <a
              href={LINK_MAPA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cafe/30 px-5 py-3 font-semibold hover:bg-cafe/5"
            >
              <Icon name="pin" /> Abrir no mapa
            </a>
          </div>

          {/* Fundo imitando um mapa: ruas desenhadas com gradientes, sem carregar o Google Maps */}
          <div
            className="mt-8 mx-auto grid h-60 max-w-sm place-items-center rounded-2xl bg-[#e8e4d8] border border-cafe/10"
            style={{
              backgroundImage:
                'linear-gradient(#fff 6px, transparent 6px), linear-gradient(90deg, #fff 6px, transparent 6px), linear-gradient(35deg, transparent 48%, #f3d9a4 48%, #f3d9a4 52%, transparent 52%)',
              backgroundSize: '64px 64px, 64px 64px, 100% 100%',
            }}
          >
            <div className="flex flex-col items-center rounded-xl bg-white px-5 py-3 text-center shadow-md">
              <Icon name="pin" className="size-6 text-terracota" />
              <p className="mt-1 font-semibold">Massa Madre</p>
              <p className="text-xs text-cafe/70">{ENDERECO}</p>
              <p className="mt-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Estacionamento &amp; bicicletário
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
