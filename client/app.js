const body = document.getElementById('body')
const pesel = document.getElementById('pesel')
const wybrany = document.getElementById('wybrany')
const app = document.getElementById('app')
const glos =  document.getElementById('zaglosowano')

const baseURL = 'http://localhost:3000'



async function glosoj(){

    const nowyPesel = pesel.value
    const nowyKandydat = wybrany.value

    //potwierdzenie poprawności
    if((nowyPesel != '') && (nowyKandydat == 'k1' || nowyKandydat == 'k2' || nowyKandydat == 'k3')){
        const zaglosowano = document.createElement('h2')
        zaglosowano.innerHTML = 'oddano głos'
        zaglosowano.setAttribute('id', 'glos')

        app.appendChild(zaglosowano)

          setTimeout(() => {
            zaglosowano.remove();
          }, 4000);

        var url = `${baseURL}/add/${pesel.value}/${wybrany.value}`

        await fetch(url)

        pesel.value = ''
        wybrany.value = ''

        
    }else{

        const nieZaglosowano = document.createElement('h2')
        nieZaglosowano.innerHTML = 'nie udało sie oddać głosu z powodu niepoprawnych danych'
        nieZaglosowano.setAttribute('id', 'red')

        app.appendChild(nieZaglosowano)

            setTimeout(() => {
                nieZaglosowano.remove();
              }, 4000);
    }
         

}