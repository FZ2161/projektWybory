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
    var k1Len = k1.length
    var k2Len = k2.length
    var k3Len = k3.length
    
    console.log(k3Len)
    
    div1.innerHTML = ''


    var xValues = []
    var yValues = [k1Len, k2Len, k3Len]
    var barColors=[]

}




