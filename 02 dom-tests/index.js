// 1

// function handler1() {
// alert('Спасибо!');
// };

// function handler2() {
// alert('Спасибо ещё раз!');
// }

// elem.onclick = () => alert("Привет");
// elem.addEventListener("click", handler1); // Спасибо!
// elem.addEventListener("click", handler2); // Спасибо ещ

// 2

// let text = '<b>текст</b>';

// elem1.append(document.createTextNode(text));
// elem2.innerHTML = text;
// elem3.textContent = text;


// 3


elem.onclick = () =>{
let newLi = document.createElement('li');

let valueelement=document.getElementById("text").value
newLi.innerHTML = valueelement
let add=list.appendChild(newLi);

localStorage.setItem('add',  valueelement.toString())
console.log(localStorage.getItem('add'))
}

elem2.onclick = () =>{
let delLi = document.getElementById('list');
list.removeChild(delLi.lastChild);


}

function clearContent(element){
	element.value=''
}









