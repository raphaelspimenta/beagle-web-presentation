import { createFeedbackPage } from './utils'

export default function getSuccessView() {
  return createFeedbackPage({
    buttonLink: 'https://docs.usebeagle.io/',
    buttonValue: 'Acesse o app!',
    description: 'Parabéns! Sua conta foi criada com sucesso! Agora é só entrar no app e começar a curtir nossos serviços!',
    image: 'https://image.freepik.com/vetores-gratis/sucesso-nos-negocios-ilustracao-vetorial-de-lideranca_82574-8087.jpg',
    title: 'Sucesso!',
  })
}
