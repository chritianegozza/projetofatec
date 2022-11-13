// Adicionando o evento de quando cadastrar no formulário e informar que foi com sucesso. 

const form = document.getElementById('form')

// evento botão submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = {
        nome,
        email,
    }
    const convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    const content = document.getElementById('content')

    const carregando = `<p> carregando ...</p>`

    const pronto = `<p>Cadastrado com sucesso</p>`
    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto

    }, 1000)
})