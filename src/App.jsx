import { useRef, useState } from 'react'
import AvisoFornada from './components/AvisoFornada'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Sacola from './components/Sacola'
import Hero from './sections/Hero'
import Essencia from './sections/Essencia'
import Fornada from './sections/Fornada'
import Cafeteria from './sections/Cafeteria'

// Monta a página. Para adicionar uma seção nova: crie em src/sections/ e coloque dentro do <main>.
export default function App() {
  const menuRef = useRef(null)
  const sacolaRef = useRef(null)

  // Sacola compartilhada pela Fornada do Dia e pela janela da Sacola: { idDoProduto: quantidade }
  const [sacola, setSacola] = useState({})
  const mudarSacola = (id, delta) => setSacola((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + delta) }))

  return (
    <>
      <AvisoFornada />
      <Header onAbrirMenu={() => menuRef.current.showModal()} onAbrirSacola={() => sacolaRef.current.showModal()} />
      <MenuLateral ref={menuRef} />
      <Sacola ref={sacolaRef} qtd={sacola} mudar={mudarSacola} />

      <main>
        <Hero />
        <Essencia />
        <Fornada qtd={sacola} mudar={mudarSacola} />
        <Cafeteria />
      </main>
    </>
  )
}
