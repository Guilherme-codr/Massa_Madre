import { createInterface } from 'node:readline/promises'
import { execSync, execFileSync } from 'node:child_process'
import ghpages from 'gh-pages'

function exigir(comando, ajuda) {
  try {
    execSync(comando, { stdio: 'ignore' })
  } catch {
    console.error(ajuda)
    process.exit(1)
  }
}

exigir('git --version', 'Git não encontrado. Instale com: winget install --id Git.Git -e  (depois reabra o VS Code)')
exigir(
  'git config user.email',
  'Git sem identidade. Rode:\n  git config --global user.name "Seu Nome"\n  git config --global user.email "seu@email.com"',
)

const branch = execSync('git branch --show-current').toString().trim()
if (branch === 'gh-pages') {
  console.error('Você está na branch gh-pages (site compilado). Rode: git checkout main')
  process.exit(1)
}

const rl = createInterface({ input: process.stdin, output: process.stdout })
let message = ''
while (!message) {
  message = (await rl.question('Mensagem do commit (Ctrl+C cancela): ')).trim()
}
rl.close()

execSync('npx vite build', { stdio: 'inherit' })

// Código-fonte: commit (se houver mudança) e push da branch atual
execSync('git add -A', { stdio: 'inherit' })
try {
  execSync('git diff --cached --quiet')
  console.log('Nenhuma mudança no código para commitar.')
} catch {
  execFileSync('git', ['commit', '-m', message], { stdio: 'inherit' })
}
execSync('git push -u origin HEAD', { stdio: 'inherit' })

await ghpages.publish('dist', {
  repo: 'https://github.com/Guilherme-codr/Massa_Madre.git',
  message,
})
console.log(`\nPublicado: "${message}"\nhttps://guilherme-codr.github.io/Massa_Madre/`)
