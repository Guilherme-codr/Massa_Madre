// id="cafeteria" é o destino do item "Cafeteria & Empório" do menu
export default function Cafeteria() {
  return (
    <section id="cafeteria" aria-labelledby="cafeteria-titulo" className="bg-cafe">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <span className="font-serif text-3xl sm:text-4xl font-semibold text-dourado">Cafeteria &amp; Empório</span>
        <h2 id="cafeteria-titulo" className="mt-4 mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
          Sente-se, respire o aroma de pão quente e desacelere.
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-creme/75">
          Nossa casa foi pensada como um refúgio urbano. Além dos pães para levar, servimos cafés especiais torrados
          localmente, manteiga artesanal batida na casa, geleias orgânicas e tostadas servidas na hora.
        </p>
      </div>
    </section>
  )
}
