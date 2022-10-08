const BASE_URL = 'https://dog.ceo/api/breeds/image/random' // variavel com o url
const dogBtn = document.getElementById('change-dog') // variavel com o botão de mudar a imagem

const getDogs = async () => {
  try {
    const data = await fetch(BASE_URL) // variavel com o fetch, utilizando a variavel do url como parametro
    const json = await data.json() // variavel para transformar o fetch em json
    return json.message // retorno com o json e qual elemento dele vai usar, no caso o link das imagens
  } catch (e) {
    console.log(e.message) // em caso de erro o catch vai pegar o mesmo e informar qual foi o erro.
  }
}

const loadImg = async () => {
  // função assincrona para colocar a imagem da API no campo img do html
  const dogImg = document.getElementById('dog') // pega o elemento img do html
  dogImg.src = await getDogs() // coloca o url da imagem da API, usando a função asincrona, dentro do src do elemento img do html
}

dogBtn.addEventListener('click', loadImg) // ativa a função asincrona ao clicar no botão

loadImg() // pra garantir que ja tenha uma imagem quando entrar no site
