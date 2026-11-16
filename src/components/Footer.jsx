import Icon from './Icon'
import { MEU_GITHUB, MEU_LINKEDIN, MEU_WHATSAPP } from '../data/config'

const redes = [
  { nome: 'WhatsApp', href: MEU_WHATSAPP, icone: 'whatsapp' },
  { nome: 'LinkedIn', href: MEU_LINKEDIN, icone: 'linkedin' },
  { nome: 'GitHub', href: MEU_GITHUB, icone: 'github' },
]

export default function Footer() {
  return (
    <footer className="bg-cafe text-creme">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-creme text-cafe">
            <Icon name="wheat" className="size-6" />
          </span>
          <div>
            <p className="font-serif text-2xl font-semibold leading-none">Massa Madre</p>
            <p className="mt-1 text-sm text-creme/70">Padaria Artesanal &amp; Fermentação Natural</p>
          </div>
        </div>

        <ul className="mt-8 flex gap-3">
          {redes.map((r) => (
            <li key={r.nome}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.nome}
                className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Icon name={r.icone} />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-t border-white/10 pt-6 text-sm text-creme/60">
          © {new Date().getFullYear()} Guilherme Lacerda Faria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
