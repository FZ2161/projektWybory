const body = document.getElementById('body')
const pesel = document.getElementById('pesel')
const wybrany = document.getElementById('wybrany')
const app = document.getElementById('app')
const glos =  document.getElementById('zaglosowano')



function glosoj(){

    const nowyPesel = pesel.value
    const nowyKandydat = wybrany.value

    //potwierdzenie poprawności
    if(nowyPesel!='' && nowyKandydat=='k1' || nowyKandydat=='k2' || nowyKandydat=='k'){
        const zaglosowano = document.createElement('h2')
        zaglosowano.innerHTML = 'pomyślnie oddano głos'
        zaglosowano.setAttribute('id', 'glos')

        app.appendChild(zaglosowano)

        setTimeout(() => {
            zaglosowano.remove();
          }, 4000);
    }else{

        const zaglosowano = document.createElement('h2')
        zaglosowano.innerHTML = 'nie udało sie oddać głosu z powodu niepoprawnych danych'
        zaglosowano.setAttribute('id', 'red')

        app.appendChild(zaglosowano)

            setTimeout(() => {
                zaglosowano.remove();
              }, 4000);
    }
      



}