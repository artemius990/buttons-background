let users = [
{id: 1, name: "Петя"},
{id: 2, name: "Вася"},
{id: 3, name: "Коля"}
];

// let user = users.find(item => item.id ==2);
// console.log(user.name);
// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers); 

elem.onclick = () =>{
	for (const person of users) {
  if (person.id < 3) {
    let findedPerson = person
	let newLi = document.createElement('li');
	list.appendChild(newLi);
	console.log(findedPerson)
	newLi.innerHTML = findedPerson.name;
  }
}
}
	
elem2.onclick = () =>{
let delLi = document.getElementById('list');
list.removeChild(delLi.lastChild);
}
	
	






