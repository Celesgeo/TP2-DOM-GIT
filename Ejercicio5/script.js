const a= document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btn = document.getElementById("btn");

btn.addEventListener("click",superficie);

function superficie(){
const l1 = a.value 
const l2 = b.value
const l3 = c.value
    // para la primer area
    const A1 = l2 * l3
    console.log(A1)
    // para la segunda area
    const A2 = (l1-l2)*l3/2
    console.log(A2)
    const areaT = A1 + A2
    console.log(areaT)
    alert('el area total de su terreno es de: ' + areaT)

}