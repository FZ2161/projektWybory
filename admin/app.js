const body = document.getElementById('body')
const div1 = document.getElementById('div1')
var glosy =[]
var k1=[]
var k2 =[]
var k3 = []

async function getData(){
const data = await fetch('http://localhost:3000/select')
glosy = await data.json()

}
getData()

async function getKs(){
    const data1 = await fetch('http://localhost:3000/k1')
    k1 = await data1.json()

    const data2 = await fetch('http://localhost:3000/k2')
    k2 = await data2.json()

    const data3 = await fetch('http://localhost:3000/k3')
    k3 = await data3.json()

    console.log(k2)
}

getKs()

    

function show(){
    var k1Len = parseInt(k1.length)
    var k2Len = parseInt(k2.length)
    var k3Len = parseInt(k3.length)
    
    console.log(k3Len)
    
    div1.innerHTML = ''

    

    var kandydaci = ['k1', 'k2', 'k3']
    var glosy = [k1Len, k2Len, k3Len]
    var barColors=[
        "#b91d47",
        "#00aba9",
        "#2b5797",
    ]



        new Chart('myChart', {
        type: 'pie', 
        data: {
            labels: kandydaci, 
            datasets: [{
                backgroundColor: barColors,
                data: glosy
            }]
        },
        options: {
            title: {
                display: true,
                text: 'głosy oddane na poszczególnych kandydatów'
            }
        }
    })

}




