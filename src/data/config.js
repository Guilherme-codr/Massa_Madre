// shortcut: número fictício, troque pelo WhatsApp real da padaria (só dígitos, com 55 + DDD)
const WHATSAPP = '5500000000000'
const MENSAGEM_WHATSAPP = 'Olá! Gostaria de fazer uma encomenda na Massa Madre.'

export const linkWhatsapp = (mensagem) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`
export const whatsappLink = linkWhatsapp(MENSAGEM_WHATSAPP)

// Coloque a foto em public/ (ex.: public/pao.jpg) e escreva o nome aqui: 'pao.jpg'
export const FOTO_DESTAQUE = ''

// reais(28) => "R$ 28,00"
export const reais = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
